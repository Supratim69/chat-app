import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SentMessage from "@/app/components/sent-message";
import ReceivedMessage from "@/app/components/received-message";

export default function Chat({
    recipient,
    onBackClick,
}: {
    recipient: any;
    onBackClick: any;
}) {
    return (
        <div className="flex h-screen w-full flex-col">
            <div className="flex items-center justify-between border-b border-gray-200 p-4 dark:border-gray-800">
                <div className="flex items-center gap-3">
                    <Button
                        className="lg:hidden"
                        onClick={onBackClick}
                        variant="ghost"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                    </Button>
                    <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium">{recipient}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Last active 2 hours ago
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                        <PaperclipIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <DotIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </Button>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                    <ReceivedMessage />
                    <SentMessage />
                    <ReceivedMessage />
                    <SentMessage />
                </div>
            </div>
            <div className="border-t border-gray-200 p-4 dark:border-gray-800">
                <form className="flex items-center gap-2">
                    <Input
                        id="message"
                        placeholder="Type your message..."
                        className="flex-1"
                        autoComplete="off"
                    />
                    <Button type="submit" size="icon">
                        <SendIcon className="h-5 w-5" />
                        <span className="sr-only">Send</span>
                    </Button>
                </form>
            </div>
        </div>
    );
}

function DotIcon(props: any) {
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
            <circle cx="12.1" cy="12.1" r="1" />
        </svg>
    );
}

function PaperclipIcon(props: any) {
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
            <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
        </svg>
    );
}

function SendIcon(props: any) {
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
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    );
}

function ThumbsDownIcon(props: any) {
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
            <path d="M17 14V2" />
            <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
        </svg>
    );
}

function ThumbsUpIcon(props: any) {
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
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
    );
}
function ChevronLeftIcon(props: any) {
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
            <path d="m15 18-6-6 6-6" />
        </svg>
    );
}
