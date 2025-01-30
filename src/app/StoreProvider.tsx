"use client"

import { AppStore, makeStore } from "@/lib/redux/store";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode; }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        // here we can initial our data 
        // storeRef.current.dispatch(setUserInformation(getCookie("token")));        
    }
    
    return <Provider store={storeRef.current}>{children}</Provider>;
}
