import type { setState } from "../../utils/types";



export default function Paginate({position, setPosition, maxPages}: {maxPages:number, position:number, setPosition:setState<number>}) {
    function handleIncrementOrDecrement(action: string){
        if(action === "increase" && position < maxPages){
            setPosition(position+=1)
        }else if(action === "decrease" && position > 1){
            setPosition(position-=1)
        }
    }

    return (
        <div className="paginate">
            <button onClick={()=>{handleIncrementOrDecrement("decrease")}}>Prev</button>
            <ul className="numbers">
                <li className="number">
                    {position}
                </li>
            </ul>
            <button onClick={()=>{handleIncrementOrDecrement("increase")}}>Next</button>
        </div>
    )
}
