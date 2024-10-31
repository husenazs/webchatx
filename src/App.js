import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/SideBar';
import SideMenu from './components/SideMenu';
import ChatWindowUser from './components/ChatWindowUser';
import io from 'socket.io-client';

const App = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);  // gunakan useRef untuk koneksi socket

  const userId = useRef(Math.random().toString(36).substring(2, 12)).current;  // ID user tetap

  const initialMessages = {
    Joestar: [
      { sender: 'self', text: "Cool. I'll let you know when it's done.", time: '17:47' },
      { sender: 'Joestar', text: "That's awesome. I think our users will really appreciate the improvements.", time: '11:46' },
    ],
    Eddie: [
      { sender: 'self', text: "Hey, Eddie!", time: '22:10' },
      { sender: 'Eddie', text: "Hai apa kabar?", time: '22:05' },
    ],
    SweetCatz: [
      { sender: 'self', text: "Goodbye!", time: '21:25' },
      { sender: 'SweetCatz', text: "Selamat Jalan", time: '21:20' },
    ]
  };

  useEffect(() => {
    // Membuat koneksi socket hanya sekali saat komponen pertama kali dimuat
    if (!socketRef.current) {
      socketRef.current = io('http://localhost:9090', { query: { userId } });

      // Mendengarkan pesan dari socket
      socketRef.current.on('receiveMessage', (message) => {
        if (message.sender === selectedChat) {
          setMessages((prevMessages) => [...prevMessages, message]);
        }
      });
    }

    // Membersihkan listener ketika komponen unmounted
    return () => {
      if (socketRef.current) {
        socketRef.current.off('receiveMessage');
      }
    };
  }, [selectedChat]);

  const openChatWindowUser = (chatName) => {
    setSelectedChat(chatName);
    setMessages(initialMessages[chatName] || []);
  };

  const sendMessage = (text) => {
    const message = { sender: 'self', text, time: new Date().toLocaleTimeString() };
    socketRef.current.emit('sendMessage', { receiver: selectedChat, ...message });
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="mx-auto">
      <div className="flex h-screen">
        <SideMenu />
        <Sidebar openChatWindowUser={openChatWindowUser} />

        <div className="flex-grow">
          {selectedChat ? (
            <ChatWindowUser
              selectedChat={selectedChat}
              messages={messages}
              sendMessage={sendMessage}
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="text-center">
                  <img src={`${process.env.PUBLIC_URL}/new-logo-nexilis.png`} alt="WhatsApp Logo" className="mx-auto mb-4 h-auto max-w-[300px]" />
                  <p className="text-gray-500 mt-2">
                    Better than wa web
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
