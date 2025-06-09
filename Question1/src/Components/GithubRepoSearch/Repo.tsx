import type { repo } from '../../Pages/Github'

function formatDate (dateTime:string){
    const dateInstance = new Date(dateTime);

    return dateInstance.toLocaleString("en-GB", {day:"numeric", month:"short", year:"numeric"})
}

export default function Repo({full_name, html_url, description, topics, updated_at, stargazers_count}:repo) {
  return (
    <div className='repo'>
        <h3 className='title'><a target='_blank' href={html_url}>{full_name}</a></h3>
        <p className='description'>{description}</p>
        <div className='topics'>
            {
                topics.map(topic=> <p key={topic}>{topic}</p>)
            }
        </div>
  
        <p className='more'><span>{stargazers_count} stars </span> <span>.</span> <span>Updated on {formatDate(updated_at)}</span></p>
   
    </div>
  )
}
