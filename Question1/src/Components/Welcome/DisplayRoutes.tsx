import type { displayRoutesProps } from '../../utils/types'
import { Link } from 'react-router-dom'

export default function DisplayRoutes({name}: displayRoutesProps) {
  return (
    <div className="display-routes">
      <h1>Welcome to Our App, {name}!</h1>
      <p>Select a route to continue:</p>
      <ul className="route-list">
        <li >
            <Link to="/contact-book">Contact Book App</Link>
        </li>
        <li>
            <Link to="/github-search">Search for Github Pages</Link>
        </li>
      </ul>
    </div>
  )
}
