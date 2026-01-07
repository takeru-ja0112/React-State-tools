export interface PageAccessInterface {
    title : string;
    description : string;
    href : string;
    children : React.ReactNode;
    gradientColor: string; // 例: "from-indigo-500 to-indigo-600"
    borderColor: string;   // 例: "hover:border-indigo-500 dark:hover:border-indigo-400"
}