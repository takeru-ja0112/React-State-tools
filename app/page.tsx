"use client";

import Image from "next/image";

import { useAppSelector } from "@/lib/hooks";
import useCounterStore from "@/lib/zustand/useCounterStore";
import Link from "next/link";

export default function Home() {

  const reduxCount = useAppSelector((state) => state.counter.value);
  const { count } = useCounterStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 font-sans">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <Image
              className="dark:invert animate-pulse"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={36}
              priority
            />
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            State Management Demo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Redux と Zustand を使った状態管理のデモアプリケーション
          </p>
        </div>

        {/* State Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Redux Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-indigo-100 dark:border-indigo-900 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Redux</h2>
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-3">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">{reduxCount}</div>
            <p className="text-gray-600 dark:text-gray-400">現在の値</p>
          </div>

          {/* Zustand Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-purple-100 dark:border-purple-900 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Zustand</h2>
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-3">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="text-5xl font-bold text-gray-800 dark:text-white mb-2">{count}</div>
            <p className="text-gray-600 dark:text-gray-400">現在の値</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-2 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">使い方</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  これらの値はそれぞれの状態管理ライブラリで独立して管理されています。
                  以下のリンク先で値を増やしてから戻ってくると値が反映されます。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">ページ一覧</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Redux Page */}
            <Link href="/redux" className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-indigo-500 dark:hover:border-indigo-400 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Redux</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Redux でカウンターを操作</p>
              </div>
            </Link>

            {/* Zustand Page */}
            <Link href="/zustand" className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-purple-500 dark:hover:border-purple-400 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Zustand</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Zustand でカウンターを操作</p>
              </div>
            </Link>

            {/* Joke Page */}
            <Link href="/joke" className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent hover:border-pink-500 dark:hover:border-pink-400 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-full p-4 mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Joke</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">ランダムジョークを取得</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          <a
            className="group flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy Now
          </a>
          <a
            className="group flex items-center gap-3 bg-white dark:bg-gray-800 text-black dark:text-white px-8 py-4 rounded-full font-semibold border-2 border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  );
}
