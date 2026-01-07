"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Contextの型定義
interface CounterContextType {
    contextCount: number;
    userName: string;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: (value: number) => void;
    setUserName: (name: string) => void;
}

// 2. Contextの作成（初期値はnull）
const CounterContext = createContext<CounterContextType | null>(null);

// 3. Providerコンポーネント
export function ContextProvider({ children }: { children: ReactNode }) {
    const [contextCount, setCount] = useState(0);
    const [userName, setUserName] = useState('');

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    // Providerで渡す値
    const value : CounterContextType = {
        contextCount,
        userName,
        increment,
        decrement,
        reset,
        setCount,
        setUserName
    };
    

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    );
}

// 4. カスタムフック（useContextを使いやすくする）
export function useCounter() {
    const context = useContext(CounterContext);
    
    if (!context) {
        throw new Error('useCounter must be used within a CounterProvider');
    }
    
    return context;
}
