import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SentMessage() {
    return (
        <div className="flex items-start gap-3 justify-end">
            <div className="flex-1 space-y-2">
                <div className="rounded-lg bg-blue-100 p-3 text-sm dark:bg-blue-900 dark:text-blue-400">
                    <p>
                        I&apos;m available tomorrow afternoon. Does 2pm work for
                        you?
                    </p>
                </div>
                {/* <div className="flex items-center gap-2 justify-end">
            <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600 dark:bg-green-900 dark:text-green-400">
                Meeting
            </div>
            <Button size="icon" variant="ghost">
                <ThumbsUpIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <Button size="icon" variant="ghost">
                <ThumbsDownIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
        </div> */}
            </div>
            <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
            </Avatar>
        </div>
    );
}
