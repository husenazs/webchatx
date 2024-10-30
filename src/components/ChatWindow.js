import React from 'react';

const ChatWindow = () => {
    return (
        <div className="w-2/3 flex flex-col items-center justify-center bg-gray-50">
            <div className="text-center">
                <img src={`${process.env.PUBLIC_URL}/new-logo-nexilis.png`} alt="WhatsApp Logo" className="mx-auto mb-4 h-auto max-w-[300px]" />
                <p className="text-gray-500 mt-2">
                    Better than wa web
                </p>
            </div>
        </div>
    );
};

export default ChatWindow;

