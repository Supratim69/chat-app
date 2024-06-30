import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReceivedMessage() {
    return (
        <div className="flex items-start gap-3">
            <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
                <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                    <p>Hey, can we discuss the new feature?</p>
                </div>
                {/* <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
                <ThumbsUpIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <Button size="icon" variant="ghost">
                <ThumbsDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <div className="rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-50">
                Unlabeled
            </div>
        </div> */}
            </div>
        </div>
    );
}
