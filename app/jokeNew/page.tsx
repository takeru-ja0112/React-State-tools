"use client";

import useSWR, { Fetcher } from "swr";
import type { Joke } from "@/types/joke";

export default function jokeNew() {
    // 同じキーを使うだけでキャッシュが共有される
    const api = "https://official-joke-api.appspot.com/random_joke";
    const fetcher: Fetcher<Joke> = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading, isValidating } = useSWR<Joke>(api, fetcher);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Failed to load joke.</div>;
    if (!data) return <div>No data</div>;

    // キャッシュ状態の判断
    const isFromCache = !isLoading && data;
    const isRevalidating = isValidating && !isLoading;

    return (
        <div className="flex min-h-screen items-center justify-center p-8">
            <div className="max-w-2xl">
                <h1 className="text-3xl font-bold mb-6">Joke New Page (キャッシュから表示)</h1>
                
                {/* データソース表示 */}
                <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900 rounded">
                    <p className="font-semibold">データソース:</p>
                    <p>
                        {isFromCache && !isRevalidating && "✅ キャッシュから表示"}
                        {isRevalidating && "🔄 キャッシュ表示中、バックグラウンドで再検証中..."}
                        {isLoading && "⏳ 初回ロード中..."}
                    </p>
                </div>

                <div className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800">
                    <p className="text-lg mb-2"><strong>Setup:</strong> {data.setup}</p>
                    <p className="text-lg text-red-500"><strong>Punchline:</strong> {data.punchline}</p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                    ※ このデータは /user ページと同じキャッシュから取得されています
                </p>
            </div>
        </div>
    )
}