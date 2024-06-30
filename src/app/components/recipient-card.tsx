import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function TextBox({ onClick }: { onClick: () => void }) {
    return (
        <div
            className="flex items-center justify-between rounded-lg bg-gray-100 p-3 dark:bg-gray-800 cursor-pointer"
            onClick={onClick}
        >
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-medium">Alex Smith</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        I&apos;d like to schedule a demo.
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                    <EllipsisIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </Button>
                <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-400">
                    Demo
                </div>
            </div>
        </div>
    );
}

function EllipsisIcon(props: any) {
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    );
}
