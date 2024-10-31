import React, { useState, useEffect } from 'react';
import io from 'socket.io-client'; // Tambahkan baris ini
import ChatWindowUser from './ChatWindowUser';

const chats = [
    { name: 'Joestar', lastMessage: 'Chat terbaru', time: '25/08/2024' },
    { name: 'Eddie', lastMessage: 'Hai apa kabar?', time: '22:05' },
    { name: 'SweetCatz', lastMessage: 'Selamat Jalan', time: '21:20', unreadCount: 4 },
];

const ChatList = ({ openChatWindowUser }) => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const socket = io('http://localhost:9090'); // Pastikan ini terhubung ke server yang sesuai

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
        if (socket) {
            socket.on('receiveMessage', (message) => {
                if (message.sender === selectedChat) {
                    setMessages((prevMessages) => [...prevMessages, message]);
                }
            });
        }

        return () => {
            if (socket) {
                socket.off('receiveMessage');
            }
        };
    }, [selectedChat, socket]);

    const sendMessage = (text) => {
        const message = { sender: 'self', text, time: new Date().toLocaleTimeString() };
        socket.emit('sendMessage', { receiver: selectedChat, ...message });
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    return (
        <div className="w-full h-full flex overflow-hidden">
            <div className="w-full h-full bg-gray-100">
                {chats.map((chat, index) => (
                    <div
                        key={index}
                        className="flex items-center py-2 px-2 border-b hover:bg-gray-200 cursor-pointer"
                        onClick={() => openChatWindowUser(chat.name)}
                    >
                        <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <h3 className="font-semibold">{chat.name}</h3>
                                <span className="text-xs text-gray-500">{chat.time}</span>
                            </div>
                            <p className="text-gray-600 text-sm truncate">{chat.lastMessage}</p>
                        </div>
                        {chat.unreadCount && (
                            <span className="text-xs bg-green-500 text-white rounded-full px-2 py-0.5 ml-2">
                                {chat.unreadCount}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatList;
