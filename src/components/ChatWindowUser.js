import React from 'react';
import BubbleChat from './BubbleChat';
import BubbleChatSelf from './BubbleChatSelf';
import MessageInput from './MessageInput';

const ChatWindowUser = ({ selectedChat, messages, sendMessage }) => {
    return (
        <div className="w-full py-24 bg-slate-200">
            <div className="fixed top-0 w-full bg-white border-t dark:border-gray-600">
                <div className="flex items-center p-3 border-b hover:bg-gray-200 cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <h3 className="font-semibold">{selectedChat}</h3>
                        </div>
                        <p className="text-gray-600 text-sm truncate">Online 2 hours ago</p>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-y-auto h-full">
                {messages && messages.map((msg, index) => (
                    msg.sender === 'self' ? (
                        <BubbleChatSelf key={index} message={msg.text} timestamp={msg.time} />
                    ) : (
                        <BubbleChat key={index} sender={msg.sender} message={msg.text} timestamp={msg.time} />
                    )
                ))}
            </div>
            <MessageInput sendMessage={sendMessage} />
        </div>
    );
};

export default ChatWindowUser;
