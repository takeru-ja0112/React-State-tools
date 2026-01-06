import { useDispatch ,useSelector } from "react-redux";
import type { AppState , AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = <T>(selector : (state : AppState ) => T) => 
    useSelector(selector);
