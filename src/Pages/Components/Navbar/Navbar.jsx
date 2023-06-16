import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
    <nav className = {styles.navbar}>
        <Link to = "/your" className = {styles["link-to"]}>Your</Link>
        <Link to = "/all" className = {styles["link-to"]}>All</Link>
        <Link to = "/blocked" className = {styles["link-to"]}>Blocked</Link>
    </nav>
  )
}
