import { Link, Outlet } from "react-router-dom"

export function BlogsLayout() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/blogs/coinbase">Coinbase</Link></li>
          <li><Link to="/blogs/earnin">Earnin</Link></li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}