"use client";

import { useState } from "react";
import useSWR, { Fetcher, mutate } from "swr";
import { motion } from "motion/react";
import type { Joke } from "@/types/joke";
import Link from "next/link";

export default function UserPage() {
    const [count, setCount] = useState(0);
    const api = "https://official-joke-api.appspot.com/random_joke";
    const fetcher : Fetcher<Joke> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isValidating } = useSWR<Joke>(api, fetcher);

    if (error) return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-red-900 flex items-center justify-center">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
                <svg className="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Failed to load joke</h2>
            </div>
        </div>
    );
    
    if (!data) return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-900 dark:to-pink-900 flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-500 mx-auto mb-4"></div>
                <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">Loading joke...</p>
            </div>
        </div>
    );

    console.log(data);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 dark:from-gray-900 dark:via-pink-900 dark:to-rose-900 font-sans">
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-full p-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-orange-600 bg-clip-text text-transparent mb-4">
                        Random Joke Generator
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        笑顔になれるランダムジョークをお届け！
                    </p>
                </div>

                {/* Joke Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto mb-8"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-100 dark:border-pink-900">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="bg-pink-100 dark:bg-pink-900 rounded-full p-3 flex-shrink-0">
                                <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-sm font-semibold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-3">Setup</h2>
                                <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-white leading-relaxed">{data.setup}</p>
                            </div>
                        </div>
                        <div className="border-t-2 border-dashed border-pink-200 dark:border-pink-700 my-6"></div>
                        <div className="flex items-start gap-4">
                            <div className="bg-rose-100 dark:bg-rose-900 rounded-full p-3 flex-shrink-0">
                                <svg className="w-6 h-6 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-sm font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-3">Punchline</h2>
                                <p className="text-2xl md:text-3xl font-bold text-rose-600 dark:text-rose-400 leading-relaxed">{data.punchline}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => mutate(api)}
                        disabled={isValidating}
                        className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className={`w-5 h-5 ${isValidating ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        {isValidating ? 'Loading...' : 'Get New Joke'}
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setCount(count + 1)}
                        className="flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        Liked {count} times
                    </motion.button>
                </div>

                {/* Stats Card */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-pink-200 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="text-center">
                                <p className="text-3xl font-bold text-pink-600 dark:text-pink-400">{data.type}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Category</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">{count}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Total Likes</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-semibold hover:gap-3 transition-all duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </main>
        </div>
    );
}