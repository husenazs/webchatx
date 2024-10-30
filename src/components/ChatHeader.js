import React, { useState, useEffect, useRef } from 'react';
import Drawer from './Drawer';
import { EllipsisVerticalIcon, MagnifyingGlassIcon, PlusIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const ChatHeader = () => {
    const [search, setSearch] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const clickOutsideDropdown = (e) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(e.target) &&
            buttonRef.current && !buttonRef.current.contains(e.target)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', clickOutsideDropdown);
        return () => {
            document.removeEventListener('click', clickOutsideDropdown);
        };
    }, []);

    return (
        <>

            <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
            <div className="p-4 mx-1 flex items-center justify-between bg-white">
                <h2 className="text-lg font-bold">Chats</h2>
                <div className="relative inline-block text-left">
                    <div className='flex'>
                        <button
                            onClick={toggleDrawer}
                            type="button"
                            className="inline-flex w-full outline-none justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                            id="add-chat-button"
                        >
                            <PlusIcon className="h-5 w-5" />
                        </button>
                        <button
                            ref={buttonRef}
                            type="button"
                            className="inline-flex w-full outline-none justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                            id="menu-button"
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="true"
                            onClick={toggleDropdown}
                        >
                            <EllipsisVerticalIcon className='h-5 w-5' />
                        </button>
                    </div>

                    {isDropdownOpen && (
                        <div
                            ref={dropdownRef}
                            id="dropdown-menu"
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                        >
                            <div className="py-1" role="none">
                                <a href="#" role='button' className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0">New Groups</a>
                                <a href="#" role='button' className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1">Starred Messages</a>
                                <a href="#" role='button' className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-2">Select Chats</a>
                                <a href="#" role='button' className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-3">Lock Apps</a>

                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="p-3 border-b flex items-center relative">
                <button
                    className={`absolute pl-3 transition-transform duration-300 ${isFocused ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-50'}`}
                >
                    {isFocused ? (
                        <ArrowLeftIcon className="h-5 w-5 text-green-500 transition-opacity duration-300" />
                    ) : (
                        <MagnifyingGlassIcon className="h-5 w-5 ml-1 text-green-500 transition-opacity duration-300" />
                    )}
                </button>
                <input
                    className={`bg-gray-200 text-black w-full p-2 rounded placeholder-gray-400 outline-none pl-10 
                               transition-all duration-300 ${isFocused ? 'bg-gray-100' : 'bg-gray-200'}`}
                    type="search"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
        </>
    );
};

export default ChatHeader;
