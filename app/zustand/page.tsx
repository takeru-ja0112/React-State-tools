"use client";

import useCounterStore from "@/lib/zustand/useCounterStore";

export default function ZustandPage() {
    const { count, increment, setCount } = useCounterStore();

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="max-w-2xl p-8">
                <h1 className="text-3xl font-bold mb-4">Zustand Counter Page</h1>
                <div className="text-center mb-6">
                    <p className="text-2xl mb-4">Count: {count}</p>
                    <button
                        onClick={() => increment()}
                        className="mx-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => setCount(count - 1)}
                        className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Decrement
                    </button>
                    <button
                        onClick={() => setCount(0)}
                        className="mx-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => setCount(count * 2)}
                        className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600`}
                    >
                        Increment by {count}
                    </button>
                </div>
            </div>
        </div>
    );
}