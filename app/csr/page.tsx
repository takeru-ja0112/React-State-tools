"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [data, setData] = useState<{
    loadTime: string;
    randomNumber: number;
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // クライアントサイドでデータを取得
    const fetchData = async () => {
      setLoading(true);
      
      // データ取得をシミュレート
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const loadTime = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
      
      setData({
        loadTime,
        message: 'このページはブラウザで動的に生成されました',
        randomNumber: Math.floor(Math.random() * 1000),
      });
      
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900 dark:to-red-900 font-sans">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-full p-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            CSR (Client-Side Rendering)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ブラウザでJavaScriptが実行されてコンテンツを生成
          </p>
        </div>

        {/* Data Display */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-orange-100 dark:border-orange-900">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-200 border-t-orange-600 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">データを読み込み中...</p>
              </div>
            ) : data ? (
              <div className="space-y-6">
                <div className="bg-orange-50 dark:bg-orange-900 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-2">
                    📅 読み込み日時
                  </h2>
                  <p className="text-3xl font-bold text-orange-600 dark:text-orange-300">
                    {data.loadTime}
                  </p>
                  <p className="text-sm text-orange-600 dark:text-orange-400 mt-2">
                    useEffect で取得しました
                  </p>
                </div>

                <div className="bg-red-50 dark:bg-red-900 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
                    🎲 ランダム数値
                  </h2>
                  <p className="text-3xl font-bold text-red-600 dark:text-red-300">
                    {data.randomNumber}
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-400 mt-2">
                    クライアントサイドで生成
                  </p>
                </div>

                <div className="bg-pink-50 dark:bg-pink-900 rounded-xl p-6">
                  <h2 className="text-lg font-semibold text-pink-800 dark:text-pink-200 mb-2">
                    💬 メッセージ
                  </h2>
                  <p className="text-lg text-pink-700 dark:text-pink-300">
                    {data.message}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Info Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-orange-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500 rounded-full p-2 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">CSR（Client-Side Rendering）について</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  CSRは<strong>ブラウザ上でJavaScriptを実行</strong>してコンテンツを生成します。
                  従来のSPAの標準的なレンダリング方式です。
                </p>
                <div className="space-y-2 mt-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">✅ メリット</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      • インタラクティブ性が高い<br />
                      • サーバー負荷が軽い<br />
                      • SPA特有の滑らかな遷移
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">❌ デメリット</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      • 初期表示が遅い（ローディング表示）<br />
                      • SEO対策が困難<br />
                      • JavaScriptが無効だと動作しない
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">🎯 適しているケース</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      管理画面、ダッシュボード、認証後のページ、リアルタイムアプリ
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">⚙️ 実装方法</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                      "use client" を使用<br />
                      useEffect + fetch でデータ取得
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <Link 
              href="/ssr" 
              className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              SSR を体験
            </Link>
            <Link 
              href="/comparison" 
              className="inline-flex items-center gap-2 bg-gradient-to-br from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              比較表を見る
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </Link>
          </div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold hover:gap-3 transition-all duration-300"
          >
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
