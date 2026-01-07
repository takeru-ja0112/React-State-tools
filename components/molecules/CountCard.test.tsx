import { render, screen } from "@testing-library/react";
import CountCard from "./CountCard";

describe("CountCard Component", () => {
    test("タイトルが表示される", () => {
        render(<CountCard title="Redux" count={42} colorClass="text-indigo-600" />);
    
        expect(screen.getByText("Redux")).toBeInTheDocument();
    });
    
    test("カウントが表示される", () => {
        render(<CountCard title="Redux" count={42} colorClass="text-indigo-600" />);
    
        expect(screen.getByText("42")).toBeInTheDocument();
    });
    
    test("現在の値というラベルが表示される", () => {
        render(<CountCard title="Redux" count={42} colorClass="text-indigo-600" />);
    
        expect(screen.getByText("現在の値")).toBeInTheDocument();
    });
    
    test("0も正しく表示される", () => {
        render(<CountCard title="Zustand" count={0} colorClass="text-purple-600" />);
    
        expect(screen.getByText("0")).toBeInTheDocument();
    });
});