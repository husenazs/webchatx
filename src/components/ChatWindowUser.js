import React from 'react';
import BubbleChat from './BubbleChat';
import BubbleChatSelf from './BubbleChatSelf';

const ChatWindowUser = () => {
    return (
        <div className="w-full py-24">
            <div className="fixed top-0 w-full bg-white border-t dark:border-gray-600">
                <div class="flex items-center p-3 border-b hover:bg-gray-200 cursor-pointer">
                    <div class="w-12 h-12 rounded-full bg-gray-300 mr-3">
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between">
                            <h3 class="font-semibold">Joestar</h3>
                        </div>
                        <p class="text-gray-600 text-sm truncate">Online 2 hours ago</p>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-y-auto h-full">
                <BubbleChat />
                <BubbleChatSelf />
                <BubbleChat />
                <BubbleChatSelf />
                <BubbleChat />
                <BubbleChatSelf />
                <BubbleChat />
                <BubbleChatSelf />
                <BubbleChat />
                <BubbleChatSelf />
            </div>
            <form className="fixed bottom-0 w-full bg-white border-t dark:border-gray-600">
                <label for="chat" className="sr-only">Your message</label>
                <div className="flex items-center px-3 py-4 rounded-lg bg-gray-50 dark:bg-gray-700">
                    <button type="button" className="inline-flex justify-center p-2 mx-3 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                            <path fill="currentColor" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"/>
                        </svg>
                        <span className="sr-only">Upload image</span>
                    </button>
                    <button type="button" className="p-2 text-gray-500 rounded-lg mx-3 cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                        </svg>
                        <span className="sr-only">Add emoji</span>
                    </button>
                    <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-8/12 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                        <button type="submit" className="inline-flex justify-center mx-3 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg className="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                        </svg>
                        <span className="sr-only">Send message</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatWindowUser;

