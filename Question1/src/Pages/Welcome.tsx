import { useEffect, useState } from "react"
import CollectName from "../Components/Welcome/CollectName";
import DisplayRoutes from "../Components/Welcome/DisplayRoutes";
import { SESSION_STORAGE } from "../utils/setup";

export default function Welcome() {
  const [name, setName] = useState<string>("");
  const [steps, setSteps] = useState<number>(1);

  useEffect(()=>{
    const getName = sessionStorage.getItem(SESSION_STORAGE);

    if(getName){
      setName(getName);
      setSteps(2)
    }
  }, [])

  return (
    <div className="welcome">
        <div className="welcome-container">
            {
              steps === 1 &&
              <CollectName setName={setName} name={name} setSteps={setSteps}/>
            }
            {
              steps === 2 &&
              <DisplayRoutes name={name}/>
            }
        </div>
    </div>
  )
}
