"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { increment, decrement, reset, incrementByAmount } from "@/lib/features/counterSlice";
import { updateName } from "@/lib/features/userSlice";
import Link from "next/link";
import { motion } from "motion/react";
import { memo } from "react";

// このコンポーネントは user.name だけを購読
// counter.value が変わっても再レンダリングされない！
// React.memo でラップすることで、親の再レンダリングの影響を受けない
const TestComponent = memo(function TestComponent() {
    // counter ではなく user.name を購読
    const userName = useAppSelector((state) => state.user.name);

    return (
        <div className="bg-yellow-100 dark:bg-yellow-900 rounded-xl p-4 mb-8 text-center">
            <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Redux 部分購読のデモ + React.memo
            </p>
            <p className="text-xs text-yellow-700 dark:text-yellow-300">
                このコンポーネントは <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">user.name</code> のみを購読 + <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">React.memo</code> でメモ化
            </p>
            <motion.div
                key={userName}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4"
            >
                <p className="text-lg font-bold text-yellow-800 dark:text-yellow-200 mt-2">
                    ユーザー名: {userName || "(未設定)"}
                </p>
            </motion.div>
            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
                カウンターボタンをクリックしても、このコンポーネントは再レンダリングされません
            </p>
        </div>
    );
});

export default function ReduxPage() {

    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-indigo-900 dark:to-blue-900 font-sans">
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full p-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                        Redux Counter
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Redux Toolkit で状態管理を体験しよう
                    </p>
                </div>
                <TestComponent />

                {/* Counter Display */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 border border-indigo-100 dark:border-indigo-900 text-center">
                        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">Current Count</p>
                        <motion.div
                            key={count}
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-8xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
                        >
                            {count}
                        </motion.div>
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            Redux Store Connected
                        </div>
                    </div>
                </motion.div>

                {/* User Control Button */}
                <div className="max-w-4xl mx-auto mb-8">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => dispatch(updateName(`User-${Math.floor(Math.random() * 1000)}`))}
                        className="w-full bg-gradient-to-br from-yellow-500 to-amber-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        <div className="flex flex-col items-center">
                            <svg className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="font-semibold text-lg">ランダムユーザー名を設定</span>
                            <span className="text-sm opacity-90 mt-1">TestComponent だけが再レンダリングされます</span>
                        </div>
                    </motion.button>
                </div>

                {/* Control Buttons */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Increment */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => dispatch(increment())}
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
                            onClick={() => dispatch(decrement())}
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
                            onClick={() => dispatch(reset())}
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

                        {/* Increment by Amount */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => dispatch(incrementByAmount(count))}
                            className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-center">
                                <svg className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="font-semibold text-lg">Multiply</span>
                                <span className="text-sm opacity-90 mt-1">+{count}</span>
                            </div>
                        </motion.button>
                    </div>
                </div>

                {/* Info Card */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-indigo-200 dark:border-gray-700">
                        <div className="flex items-start gap-4">
                            <div className="bg-indigo-500 rounded-full p-2 mt-1">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Redux について</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Redux は予測可能な状態管理ライブラリです。このデモでは、Redux Toolkit を使用してカウンターの状態を管理しています。
                                    各ボタンはディスパッチアクションを通じてストアの状態を更新します。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all duration-300">
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
