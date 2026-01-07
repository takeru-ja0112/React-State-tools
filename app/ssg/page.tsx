import Link from "next/link";

// SSG（Static Site Generation）
// ビルド時に一度だけ実行される
async function getData() {
  const buildTime = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  
  // ダミーデータの取得をシミュレート
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    buildTime,
    message: 'このページはビルド時に生成されました',
    randomNumber: Math.floor(Math.random() * 1000),
  };
}

export default async function SSGPage() {
  const data = await getData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900 font-sans">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            SSG (Static Site Generation)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ビルド時に一度だけHTMLを生成
          </p>
        </div>

        {/* Data Display */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-green-100 dark:border-green-900">
            <div className="space-y-6">
              <div className="bg-green-50 dark:bg-green-900 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                  📅 生成日時
                </h2>
                <p className="text-3xl font-bold text-green-600 dark:text-green-300">
                  {data.buildTime}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                  ページをリロードしても変わりません
                </p>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-emerald-800 dark:text-emerald-200 mb-2">
                  🎲 ランダム数値
                </h2>
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-300">
                  {data.randomNumber}
                </p>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-2">
                  ビルド時に決定された値（固定）
                </p>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-2">
                  💬 メッセージ
                </h2>
                <p className="text-lg text-teal-700 dark:text-teal-300">
                  {data.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-green-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="bg-green-500 rounded-full p-2 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">SSG（Static Site Generation）について</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  SSGは<strong>ビルド時に一度だけ</strong>HTMLを生成します。
                  生成されたHTMLはCDNにキャッシュされ、超高速で配信されます。
                </p>
                <div className="space-y-2 mt-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">✅ メリット</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      • 超高速な表示<br />
                      • サーバー負荷ゼロ<br />
                      • SEO最適化
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">❌ デメリット</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      • リアルタイム性がない<br />
                      • ページ数が多いとビルド時間増加
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">🎯 適しているケース</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      ブログ、ドキュメント、ランディングページ、商品ページ
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">⚙️ 実装方法</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                      App Router: デフォルトで SSG<br />
                      Pages Router: getStaticProps() を使用
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
              SSR を体験
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all duration-300"
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
