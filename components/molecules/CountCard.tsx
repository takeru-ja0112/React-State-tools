import type { CountCardInterface } from "@/types/countCard"

export default function CountCard({ title, count, colorClass }: CountCardInterface) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border border-indigo-100 dark:border-indigo-900 hover:scale-105">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{title}</h2>
                <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-3">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                </div>
            </div>
            <div className={`text-5xl font-bold text-gray-800 dark:text-white mb-2 ${colorClass}`}>{count}</div>
            <p className="text-gray-600 dark:text-gray-400">現在の値</p>
        </div>
    )
}