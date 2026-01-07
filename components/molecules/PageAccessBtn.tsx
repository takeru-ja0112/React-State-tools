import { PageAccessInterface } from "@/types/pageAccess";
import Link from "next/link";

export default function PageAccessBtn({ title, description, href, children, gradientColor, borderColor }: PageAccessInterface) {
    return (
        <Link href={href} className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 border-transparent ${borderColor} hover:scale-105`}>
            <div className="flex flex-col items-center text-center">
                <div className={`fill-white bg-gradient-to-br ${gradientColor} rounded-full p-4 mb-4 group-hover:scale-110 transition-transform`}>
                    {children}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
            </div>
        </Link>
    );
}