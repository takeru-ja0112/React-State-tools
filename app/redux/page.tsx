"use client";

import { useAppDispatch , useAppSelector } from "@/lib/hooks";
import { increment , decrement , reset , incrementByAmount } from "@/lib/features/counterSlice";

export default function ReduxPage() {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="max-w-2xl p-8">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    Redux Page
                </h1>
                <div className="text-center mb-6">
                    <p className="text-2xl mb-4">Count: {count}</p>
                    <button
                        onClick={() => dispatch(increment())}
                        className="mx-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Increment
                    </button>
                    <button
                        onClick={() => dispatch(decrement())}
                        className="mx-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Decrement
                    </button>
                    <button
                        onClick={() => dispatch(reset())}
                        className="mx-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Reset
                    </button>
                    <button
                        onClick={() => dispatch(incrementByAmount(count))}
                        className={`mx-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600`}
                    >
                        Increment by {count}
                    </button>
                </div>
            </div>
        </div>
    );
}
