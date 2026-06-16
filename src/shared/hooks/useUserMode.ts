import { UserMode } from "@shared/types/UserMode.types";
import { useLocation } from "react-router";

export default function useUserMode() {
    const location = useLocation();
    
    return location.pathname === "/manager" ? UserMode.MANAGER : UserMode.USER;
}