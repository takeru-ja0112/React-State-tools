import Link from "next/link";

// SSR（Server-Side Rendering）
// リクエストごとにサーバーで実行される
async function getData() {
  const requestTime = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  
  // ダミーデータの取得をシミュレート
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return {
    requestTime,
    message: 'このページはリクエストごとにサーバーで生成されました',
    randomNumber: Math.floor(Math.random() * 1000),
  };
}

export default async function SSRPage() {
  // dynamic renderingを強制（キャッシュを無効化）
  const data = await getData();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 font-sans">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            SSR (Server-Side Rendering)
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            リクエストごとにサーバーでHTMLを生成
          </p>
        </div>

        {/* Data Display */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-blue-100 dark:border-blue-900">
            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  📅 リクエスト日時
                </h2>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">
                  {data.requestTime}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                  ページをリロードすると更新されます
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-indigo-800 dark:text-indigo-200 mb-2">
                  🎲 ランダム数値
                </h2>
                <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-300">
                  {data.randomNumber}
                </p>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-2">
                  リクエストごとに変わります
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900 rounded-xl p-6">
                <h2 className="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  💬 メッセージ
                </h2>
                <p className="text-lg text-purple-700 dark:text-purple-300">
                  {data.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-blue-200 dark:border-gray-700">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full p-2 mt-1">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">SSR（Server-Side Rendering）について</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  SSRは<strong>リクエストごとに</strong>サーバーでHTMLを生成します。
                  常に最新のデータを表示できます。
                </p>
                <div className="space-y-2 mt-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">✅ メリット</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      • リアルタイムデータ表示<br />
                      • SEO最適化<br />
                      • 初期表示が速い
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">❌ デメリット</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      • サーバー負荷が高い<br />
                      • SSGより表示が遅い<br />
                      • サーバーが必要
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">🎯 適しているケース</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      ダッシュボード、ニュースサイト、ECサイト在庫表示、ユーザー固有のページ
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1">⚙️ 実装方法</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                      App Router: fetch() で cache: 'no-store'<br />
                      Pages Router: getServerSideProps() を使用
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reload Button */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
        </div>

        {/* Navigation */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-4">
            <Link 
              href="/ssg" 
              className="inline-flex items-center gap-2 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              SSG を体験
            </Link>
            <Link 
              href="/csr" 
              className="inline-flex items-center gap-2 bg-gradient-to-br from-orange-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              CSR を体験
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
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

// dynamic rendering を強制
export const dynamic = 'force-dynamic';
export const revalidate = 0;
