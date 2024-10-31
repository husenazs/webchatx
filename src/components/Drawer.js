import React, { useRef, useEffect, useState } from 'react';

function Drawer({ isOpen, toggleDrawer }) {
    const drawerRef = useRef(null);
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setContentVisible(true); // Show content when drawer opens
        } else {
            setContentVisible(false); // Hide content immediately when drawer closes
        }
    }, [isOpen]);

    return (
        <>
            <div
                ref={drawerRef}
                className={`fixed w-1/4 bg-white h-full z-20 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0 shadow-lg' : '-translate-x-full'
                    }`}
            >
                <div
                    className={`p-4 transition-opacity ease-in-out ${contentVisible && isOpen ? 'opacity-100 duration-500' : 'opacity-0 duration-100'
                        }`}
                >
                    <button onClick={toggleDrawer} className="mb-4 text-red-500">
                        Close
                    </button>
                    <p>Drawer Content Here</p>
                </div>
            </div>
        </>
    );
}

export default Drawer;
