import { data } from "../../../data/data";
import styles from "./filter.module.css"


// eslint-disable-next-line react/prop-types
export const Filter = ({ filter, setCardData, setTypeVal }) => {
    return (
        <div className={styles.filter} style={{ display: filter ? "flex" : "none" }}>
            <h4>Filter</h4>
            <div htmlFor="category">Type</div>
            <div className={styles.types}>
                <div>
                    <label htmlFor="subs">Subscription</label>
                    <input id="subs" name = "typesyy" type="radio" value="subscription" onClick={(e) => {setTypeVal(e.target.value); setCardData(data.data.filter(item => item.card_type === e.target.value))}} />
                </div>
                <div>
                    <label htmlFor="burner">Burner</label>
                    <input id="burner" name = "typesyy" type="radio" value="burner" onClick={(e) => {setTypeVal(e.target.value); setCardData(data.data.filter(item => item.card_type === e.target.value))}} />
                </div>
            </div>
        </div>
    )
}
