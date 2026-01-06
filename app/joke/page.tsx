"use client";

import { useState } from "react";
import useSWR, { Fetcher } from "swr";
import { motion } from "motion/react";
import type { Joke } from "@/types/joke";

export default function UserPage() {
    const [count, setCount] = useState(0);
    const api = "https://official-joke-api.appspot.com/random_joke";
    const fetcher : Fetcher<Joke> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isValidating } = useSWR<Joke>(api, fetcher);

    if (error) return <div>Failed to load joke.</div>;
    if (!data) return <div>Loading...</div>;

    console.log(data);

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                    Welcome to the User Page!
                </h1>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 mt-4">
                    This is a dedicated page for user-related content. You can customize this page to display user information, settings, and more.
                </p>
                <button
                    onClick={() => {
                        setCount(count + 1);
                    }}
                    className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Clicked {count} times
                </button>
                <div className="mt-10 p-6 border rounded-lg bg-gray-50 dark:bg-gray-800">
                    <h2 className="text-2xl font-semibold mb-4 text-black dark:text-zinc-50">Here's a random joke for you:</h2>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300"><strong>{data.setup}</strong></p>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 mt-2 font-semibold text-red-500">{data.punchline}</p>
                </div>
                <motion.button >
                    hello
                </motion.button>
            </main>
        </div>
    );
}