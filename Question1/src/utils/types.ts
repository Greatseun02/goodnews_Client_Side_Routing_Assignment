import type { Dispatch, SetStateAction } from "react"

export type setState<T> = Dispatch<SetStateAction<T>>

export type collectNameProps = {
    name:string, 
    setName: Dispatch<SetStateAction<string>>, 
    setSteps: Dispatch<SetStateAction<number>>
}

export type displayRoutesProps = {
    name:string,
}