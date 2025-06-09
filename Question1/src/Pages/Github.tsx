import { useEffect, useState } from "react"
import Repos from "../Components/GithubRepoSearch/Repos";
import "../github.css"
import Filter from "../Components/GithubRepoSearch/Filter";
import Paginate from "../Components/GithubRepoSearch/Paginate";
import { token } from "../utils/setup";

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
  const [sortResult, setSortResult] = useState("best-match")
  const [order, setOrder] = useState("desc")
  const [repos, setRepos] = useState<repo[]>([]);
  const [maxPages, setMaxPages] = useState(0);
  const [position, setPosition] = useState(1);


  useEffect(()=>{
    const url= `https://api.github.com/search/repositories?q=${queryInput ? queryInput : "A"}&order=${order}&sort=${sortResult}&per_page=${numberOfItems}&page=${position}`

    fetch(url, {
      headers:{
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
      }
    }).then(
      (data)=> data.json()
    ).then(
      (response)=> {setRepos(response.items); getMaxPages(response.total_count)}
    )
    
  }, [queryInput, order, sortResult, position, numberOfItems])

  function getMaxPages(size: number){
    let itemsInNumber = Number(numberOfItems);

    setMaxPages(Math.ceil(size/itemsInNumber));
  }

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
        <Paginate maxPages={maxPages} position={position} setPosition={setPosition}/>
      </div>
    </div>
  )
}
