import type { FormEvent } from "react";
import type { setState } from "./types";
import { SESSION_STORAGE } from "./setup";

export function collectUserName (e:FormEvent<HTMLFormElement>, name:string, setSteps:setState<number>){
    e?.preventDefault();
    setSteps((step)=>step+1);
    sessionStorage.setItem(SESSION_STORAGE, name);
}