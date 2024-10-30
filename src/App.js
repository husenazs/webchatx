import React from 'react';
import Sidebar from './components/SideBar';
import SideMenu from './components/SideMenu';
import ChatWindow from './components/ChatWindow';
import ChatWindowUser from './components/ChatWindowUser';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className='mx-auto'>
      <div className="flex h-screen">
        <SideMenu />
        <Sidebar />
        {/* <ChatWindow /> */}
        <ChatWindowUser />
      </div>
    </div>
  );
}

export default App;
