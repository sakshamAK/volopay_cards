import { data } from "../../../data/data"
import styles from "./Navbar.module.css"

// eslint-disable-next-line react/prop-types
export const Navbar = ({ activeTab, setActiveTab, setCardData, setFilter, typeVal }) => {

    const getValue = (e) => {
        const { data: myData } = data;
        const searchResult = myData.filter(item => item.name.toLowerCase().includes(e.toLowerCase()));
        e === "" ? getActiveTab(activeTab) : setCardData(searchResult)
        console.log(e);
        
    }

    const getActiveTab = (status) => {
        setActiveTab(status)
        if (status === "your") {
            let myData = data.data.filter(item => item.owner_id === 1)
            myData = !typeVal ? myData : myData.filter(item => item.card_type === typeVal)
            console.log(myData, typeVal);
            setCardData(myData);
        } else if (status === "all") {
            const myData = !typeVal ? data.data : data.data.filter(item => item.card_type === typeVal)
            setCardData(myData)
        } else if (status === "blocked") {
            let myData = data.data.filter(item => item.status === "blocked")
            myData = !typeVal ? myData : myData.filter(item => item.card_type === typeVal)
            setCardData(myData)
        } else {
            setCardData("");
        }
    }
    return (
        <nav className={styles.navbar}>
            <span className={activeTab === "your" ? styles["active"] : styles["link-to"]} onClick={() => getActiveTab("your")} >Your</span>
            <span className={activeTab === "all" ? styles["active"] : styles["link-to"]} onClick={() => getActiveTab("all")} >All</span>
            <span className={activeTab === "blocked" ? styles["active"] : styles["link-to"]} onClick={() => getActiveTab("blocked")} >Blocked</span>
            <div className={styles.cardfilter}>
                <div><input type="text" onChange={(e) => getValue(e.target.value)} />
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>
                <div onClick={() => {setFilter(p => !p)}} style = {{cursor:"pointer"}}>Filter</div>
            </div>
        </nav>
    )
}
