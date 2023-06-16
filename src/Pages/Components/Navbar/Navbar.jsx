import { data } from "../../../data/data"
import styles from "./Navbar.module.css"

// eslint-disable-next-line react/prop-types
export const Navbar = ({ activeTab, setActiveTab, setCardData }) => {

    const getActiveTab = (status) => {
        setActiveTab(status)
        if (status === "your") {
            const myData = data.data.filter(item => item.owner_id === 1)
            setCardData(myData);
        } else if (status === "all") {
            setCardData(data.data)
        } else if (status === "blocked") {
            const myData = data.data.filter(item => item.status === "blocked")
            setCardData(myData)
        }
    }
    return (
        <nav className={styles.navbar}>
            <span className={activeTab === "your" ? styles["active"] : styles["link-to"]} onClick={() => getActiveTab("your")} >Your</span>
            <span className={activeTab === "all" ? styles["active"] : styles["link-to"]} onClick={() => getActiveTab("all")} >All</span>
            <span className={activeTab === "blocked" ? styles["active"] : styles["link-to"]} onClick={() => getActiveTab("blocked")} >Blocked</span>
        </nav>
    )
}
