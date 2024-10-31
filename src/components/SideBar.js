import React from 'react';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
// import Drawer from './Drawer';

const Sidebar = ({ openChatWindowUser }) => {
    return (
        <div className="w-1/4 bg-white-100 h-screen border-r flex flex-col sidebar">
            <ChatHeader />
            <ChatList openChatWindowUser={openChatWindowUser} />
            {/* <ChatApp /> */}
        </div>
    );
};

export default Sidebar;
