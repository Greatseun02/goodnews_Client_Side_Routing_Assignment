import { useEffect, useState } from "react"
import Repos from "../Components/GithubRepoSearch/Repos";
import "../github.css"
import Filter from "../Components/GithubRepoSearch/Filter";

export type repo = {
  full_name: string;
  html_url: string;
  description: string;
  topics: string[];
  updated_at:string;
  stargazers_count: number;
}


export default function Github() {
  const [queryInput, setQueryInput] = useState("")
  const [numberOfItems, setNumberOfItems] = useState("10")
  const [sortResult, setSortResult] = useState("Best match")
  const [order, setOrder] = useState("asc")
  const [repos, setRepos] = useState<repo[]>([]);


  useEffect(()=>{
    const url= `https://api.github.com/search/repositories?q=${queryInput ? queryInput : "A"}`

    const data = fetch(url).then(
      (data)=> data.json()
    ).then(
      (response)=> setRepos(response.items)
    )
    

  }, [queryInput])
  

  return (
    <div className="github-repo">
      <div className="github-repo-container">
        <h1 className="github-repo-h1">Github Repository Search</h1>
        <Filter 
          queryInput={queryInput} setQueryInput={setQueryInput}
          numberOfItems={numberOfItems}
          setNumberOfItems={setNumberOfItems}
          sortResult={sortResult}
          setSortResult={setSortResult}
          order={order}
          setOrder={setOrder}
        />
        <Repos repos={repos}/>
      </div>
    </div>
  )
}
