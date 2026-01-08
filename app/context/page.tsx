"use client";

import { useCounter } from "@/lib/context/CounterContext";
import Link from "next/link";
import { motion } from "motion/react";
import { useLayoutEffect, useRef, useState, memo } from "react";

// Context APIの限界を示すコンポーネント
// React.memo + userName だけを使用しても、contextCount が変わると再レンダリングされる！
const UserNameDisplay = memo(function UserNameDisplay() {
    console.log("ユーザーネーム表示レンダリング");
    let str = '';
    for (let i = 0; i < 5000000; i++) {
        str += `iteration-${i}-`;
        if (str.length > 100000) str = str.slice(-50000); // メモリ削減
    }

    // userName だけを使いたいが、Context全体にアクセスしてしまう
    const { userName } = useCounter();

    return (
        <div className="bg-red-100 dark:bg-red-900 rounded-xl p-4 mb-8 text-center border-2 border-red-400">
            <p className="text-sm font-semibold text-red-800 dark:text-red-200 mb-2">
                Context API の限界
            </p>
            <p className="text-xs text-red-700 dark:text-red-300">
                <code className="bg-red-200 dark:bg-red-800 px-1 rounded">userName</code> のみ使用 + <code className="bg-red-200 dark:bg-red-800 px-1 rounded">React.memo</code> でメモ化
            </p>
            <p className="text-lg font-bold text-red-800 dark:text-red-200 mt-2">
                ユーザー名: {userName || "(未設定)"}
            </p>
            <p className="text-xs text-red-600 dark:text-red-400 mt-2 font-semibold">
                カウンターボタンをクリックすると、このコンポーネントも再レンダリングされます
            </p>
            <p className="text-xs text-red-500 dark:text-red-300 mt-1">
                Context の値が変わると、useContext を使っている全てのコンポーネントが影響を受ける<br />
                500万回の無駄なループ処理が走ります。
            </p>
        </div>
    );
});

// Contextを使うコンポーネント1：カウンターの表示
function CounterDisplay() {
    console.log('カウントレンダリング');

    const { contextCount } = useCounter();

    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-12 border border-amber-100 dark:border-amber-900 text-center">
                <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-4">Current Count</p>
                <motion.div
                    key={contextCount}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
                >
                    {contextCount}
                </motion.div>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                    React Context Connected
                </div>
            </div>
        </motion.div>
    );
}

// ユーザー名更新ボタン
function UserControlButton() {
    const { setUserName } = useCounter();

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setUserName(`User-${Math.floor(Math.random() * 1000)}`)}
            className="w-full bg-gradient-to-br from-yellow-500 to-amber-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
            <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-semibold text-lg">ランダムユーザー名を設定</span>
                <span className="text-xs opacity-90 mt-1">UserNameDisplay + 全てのコンポーネントが再レンダリング</span>
            </div>
        </motion.button>
    );
}

// 子コンポーネント：コントロールボタン
function CounterControls() {

    const { increment, decrement, reset, setCount } = useCounter();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Increment */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={increment}
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
                onClick={decrement}
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
                onClick={reset}
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

            {/* Set to 10 */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCount(10)}
                className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
                <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-semibold text-lg">Set to 10</span>
                    <span className="text-sm opacity-90 mt-1">= 10</span>
                </div>
            </motion.button>
        </div>
    );
}

// メインページ（Providerでラップする）
export default function ContextPage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-amber-900 dark:to-orange-900 font-sans">
            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center mb-4">
                        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-full p-4">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                        Context API Counter
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        React Context API で状態管理を体験<br />
                        値が変更された時、contextを使用している各コンポーネントも再レンダリングが走ります。<br />
                        実際にどの程度パフォーマンスが低下しているのか確認するために重い処理を加えたコンポーネントを用意しています。
                    </p>
                </div>


                {/* Counter Display */}
                <div className="max-w-2xl mx-auto mb-8">
                    <CounterDisplay />
                </div>

                {/* UserName Display - Context の限界を示す */}
                <div className="max-w-2xl mx-auto mb-8">
                    <UserNameDisplay />
                </div>

                {/* User Control Button */}
                <div className="max-w-4xl mx-auto mb-8">
                    <UserControlButton />
                </div>

                {/* Control Buttons */}
                <div className="max-w-4xl mx-auto mb-12">
                    <CounterControls />
                </div>

                {/* Info Card */}
                <div className="max-w-3xl mx-auto mb-12">
                    <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-amber-200 dark:border-gray-700">
                        <div className="flex items-start gap-4">
                            <div className="bg-amber-500 rounded-full p-2 mt-1">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Context API について</h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                                    Context API は React 標準の状態管理機能です。
                                    Props のバケツリレーを避け、コンポーネントツリー全体で値を共有できます。
                                </p>
                                <div className="space-y-2 mt-4">
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                                        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">1. createContext()</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">Context を作成</p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                                        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">2. Provider</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">値を提供するコンポーネントでラップ</p>
                                    </div>
                                    <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                                        <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">3. useContext()</p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400">子コンポーネントで値を取得</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 font-semibold hover:gap-3 transition-all duration-300">
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