"use client";

import Image from "next/image";

import { useAppSelector } from "@/lib/hooks";
import useCounterStore from "@/lib/zustand/useCounterStore";
import Link from "next/link";
import CountCard from "@/components/molecules/CountCard";
import PageAccessBtn from "@/components/molecules/PageAccessBtn";
import JokeIcon from "@/components/atoms/icon/JokeIcon";
import ReduxIcon from "@/components/atoms/icon/ReduxIcon";
import ZustandIcon from "@/components/atoms/icon/ZustandIcon";
import JotaiIcon from "@/components/atoms/icon/JotaiIcon";
import ContextIcon from "@/components/atoms/icon/ContextIcon";
import { useAtom ,useAtomValue } from "jotai";
import { countAtom } from "@/lib/jotai/atom";
import { useCounter } from "@/lib/context/CounterContext";

export default function Home() {

  const reduxCount = useAppSelector((state) => state.counter.value);
  const { zustandCount } = useCounterStore();
  const jotaiCount = useAtomValue(countAtom);
  const { contextCount } = useCounter();


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
            状態管理ツールのデモアプリケーション
          </p>
        </div>

        {/* State Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {/* Redux Card */}
          <Link href="/redux">
            <CountCard title="Redux" count={reduxCount} colorClass="text-indigo-600 dark:text-indigo-400" />
          </Link>

          {/* Zustand Card */}
          < Link href="/zustand">
            <CountCard title="Zustand" count={zustandCount} colorClass="text-purple-600 dark:text-purple-400" />
          </Link>
          
          < Link href="/jotai">
            <CountCard title="Jotai" count={jotaiCount} colorClass="text-emerald-600 dark:text-emerald-400" />
          </Link>

          <Link href="/context">
            <CountCard title="Context" count={contextCount} colorClass="text-pink-600 dark:text-pink-400" />
          </Link>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Redux Page */}
            <PageAccessBtn 
              title="Redux" 
              description="Redux でカウンターを操作" 
              href="/redux"
              gradientColor="from-indigo-500 to-indigo-600"
              borderColor="hover:border-indigo-500 dark:hover:border-indigo-400"
            >
              <ReduxIcon />
            </PageAccessBtn>

            {/* Zustand Page */}
            <PageAccessBtn 
              title="Zustand" 
              description="Zustand でカウンターを操作" 
              href="/zustand"
              gradientColor="from-purple-500 to-purple-600"
              borderColor="hover:border-purple-500 dark:hover:border-purple-400"
            >
              <ZustandIcon />
            </PageAccessBtn>

            {/* Jotai Page */}
            <PageAccessBtn 
              title="Jotai" 
              description="Jotai でカウンターを操作" 
              href="/jotai"
              gradientColor="from-emerald-500 to-teal-600"
              borderColor="hover:border-emerald-500 dark:hover:border-emerald-400"
            >
              <JotaiIcon />
            </PageAccessBtn>
            {/* Jotai Page */}
            <PageAccessBtn 
              title="Context" 
              description="Context でカウンターを操作" 
              href="/context"
              gradientColor="from-emerald-500 to-teal-600"
              borderColor="hover:border-emerald-500 dark:hover:border-emerald-400"
            >
              <ContextIcon />
            </PageAccessBtn>

            {/* Joke Page */}
            <PageAccessBtn 
              title="Joke" 
              description="ランダムジョークを取得" 
              href="/joke"
              gradientColor="from-pink-500 to-pink-600"
              borderColor="hover:border-pink-500 dark:hover:border-pink-400"
            >
              <JokeIcon />
            </PageAccessBtn>
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
