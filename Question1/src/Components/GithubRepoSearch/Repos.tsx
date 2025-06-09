import type { repo } from '../../Pages/Github'
import Repo from './Repo'

export default function Repos({repos}: {repos:repo[]}) {
  return (
    <div className='repos'>
        {
            repos?.map((repo)=> <Repo key={repo.full_name} {...repo} />)
        }
    </div>
  )
}
