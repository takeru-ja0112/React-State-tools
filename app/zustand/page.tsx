"use client";

import useCounterStore from "@/lib/zustand/useCounterStore";
import Link from "next/link";
import { motion } from "motion/react";

export default function ZustandPage() {
    console.log('💜 Zustand page rendered');
    
    const { zustandCount, increment, setCount } = useCounterStore();

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 font-sans">
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-br from-purple-500 to-violet-600 rounded-full p-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent mb-4">
                        Zustand Counter
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        軽量でシンプルな Zustand で状態管理を体験
                    </p>
                </div>

                {/* Counter Display */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 border border-purple-100 dark:border-purple-900 text-center">
                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-4">Current Count</p>
                        <motion.div
                            key={zustandCount}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-8xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent"
                        >
                            {zustandCount}
                        </motion.div>
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            Zustand Store Connected
                        </div>
                    </div>
                </motion.div>

                {/* Control Buttons */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Increment */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => increment()}
                            className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center">
                                <svg className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                <span className="font-semibold text-lg">Increment</span>
                                <span className="text-sm opacity-90 mt-1">+1</span>
                            </div>
                        </motion.button>

                        {/* Decrement */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCount(zustandCount - 1)}
                            className="bg-gradient-to-br from-red-500 to-rose-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center">
                                <svg className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                </svg>
                                <span className="font-semibold text-lg">Decrement</span>
                                <span className="text-sm opacity-90 mt-1">-1</span>
                            </div>
                        </motion.button>

                        {/* Reset */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCount(0)}
                            className="bg-gradient-to-br from-gray-500 to-gray-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center">
                                <svg className="w-8 h-8 mb-3 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                                <span className="font-semibold text-lg">Reset</span>
                                <span className="text-sm opacity-90 mt-1">= 0</span>
                            </div>
                        </motion.button>

                        {/* Double */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setCount(zustandCount * 2)}
                            className="bg-gradient-to-br from-purple-500 to-violet-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center">
                                <svg className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span className="font-semibold text-lg">Double</span>
                                <span className="text-sm opacity-90 mt-1">×2</span>
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Comparison Card */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-purple-100 to-violet-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-purple-200 dark:border-gray-700">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-500 rounded-full p-2 mt-1">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Zustand について</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                    Zustand は軽量でシンプルな状態管理ライブラリです。Redux と比較してボイラープレートが少なく、
                                    フックベースのシンプルな API で使いやすいのが特徴です。
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">パッケージサイズ</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">非常に軽量</p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">学習コスト</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">低い</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold hover:gap-3 transition-all duration-300">
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