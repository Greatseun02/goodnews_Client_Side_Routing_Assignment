import { collectUserName } from "../../utils/formUtils"
import type { collectNameProps } from "../../utils/types"


export default function CollectName({name, setName, setSteps}:collectNameProps) {
  
    return (
        <div className="collectName">
            <h3>Enter your Name</h3>
            <form onSubmit={(e)=>collectUserName(e, name, setSteps)}>
                <input 
                    name={name}
                    onChange={(e)=>setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
