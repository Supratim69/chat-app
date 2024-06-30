"use client";
import { Button } from "@/components/ui/button";
import TextBox from "@/app/components/recipient-card";
import Chat from "./components/chat";
import { useState } from "react";

export default function Home() {
    const [selectedChat, setSelectedChat] = useState(null);

    const handleTextBoxClick = (recipient: any) => {
        setSelectedChat(recipient);
    };

    const handleBackClick = () => {
        setSelectedChat(null);
    };

    return (
        <div className="flex h-screen w-full bg-white">
            <div
                className={`flex-col border-r border-gray-200 dark:border-gray-800 lg:flex ${
                    selectedChat ? "hidden lg:flex" : "flex"
                } w-full lg:w-1/3`}
            >
                <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
                    <h2 className="text-lg font-medium">Chats</h2>
                    <div className="flex items-center gap-2">
                        <Button size="icon" variant="ghost">
                            <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <PlusIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </Button>
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    <div className="space-y-4 p-4">
                        <TextBox
                            onClick={() => handleTextBoxClick("Recipient 1")}
                        />
                        <TextBox
                            onClick={() => handleTextBoxClick("Recipient 2")}
                        />
                        <TextBox
                            onClick={() => handleTextBoxClick("Recipient 3")}
                        />
                        <TextBox
                            onClick={() => handleTextBoxClick("Recipient 4")}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`flex-1 ${
                    selectedChat ? "flex" : "hidden"
                } lg:flex flex-col`}
            >
                {selectedChat ? (
                    <Chat
                        recipient={selectedChat}
                        onBackClick={handleBackClick}
                    />
                ) : (
                    <div className="flex flex-col justify-center items-center p-4 h-full">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl font-bold">Welcome</h1>
                            <p>Select a chat to start messaging.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function PlusIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}

function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}
