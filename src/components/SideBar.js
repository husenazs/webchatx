import React from 'react';
import ChatHeader from './ChatHeader';
import ChatList from './ChatList';
// import Drawer from './Drawer';

const Sidebar = () => {
    return (
        <div className="w-2/4 bg-white-100 h-screen border-r flex flex-col sidebar">
            <ChatHeader />
            <ChatList />
        </div>
    );
};

export default Sidebar;
