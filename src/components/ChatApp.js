import React, { useState, useEffect } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import MessageInput from './MessageInput';
import io from 'socket.io-client';

const userId = () => {
    // return Math.random().toString(36).substring(2, 12);
    return 'Joestart'
}

const socket = io('https://localhost:9090', {
    query: {
        userId: userId()
    }
});

const ChatApp = () => {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('sendMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, []);

    return (
        <div className="flex h-screen">
            <ChatList setSelectedChat={setSelectedChat} />
            <div className="flex-1 flex flex-col">
                <ChatWindow selectedChat={selectedChat} messages={messages} />
                <MessageInput />
            </div>
        </div>
    );
};

export default ChatApp;
