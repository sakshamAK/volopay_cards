/* eslint-disable react/prop-types */
import styles from "./Card.module.css"

// eslint-disable-next-line react/prop-types
export const Card = ({cardData}) => {

    return (
        <div className={styles.card}>
            <div className={styles["card-head"]}>
                <div className={styles["card-head-text"]}>
                    <h2>{cardData.name}</h2>
                    <div className={styles["card-sub-text"]}><span>{cardData.budget_name}</span><span className={styles["dot-separator"]}>•</span><span>Budget</span></div>
                </div>
                <div className={styles["status-icon"]} style = {cardData.card_type === "burner" ? {backgroundColor:"rgba(255, 166, 0, 0.377)", color: "orangered"} : {backgroundColor: "rgba(255, 0, 0, 0.315)", color: "red"}}>
                    <span className="material-symbols-outlined">
                        {cardData.card_type === "burner" ? "local_fire_department" : "sync"}
                    </span>
                </div>
            </div>
            <div className={styles["card-details"]}>
                <div className={styles["card-details-data"]}>
                    <div className={styles["card-data-head"]}>
                        Amount
                    </div>
                    <div className={styles["card-data-value"]}>
                        300SGD
                    </div>
                </div>
                <div className={styles["card-details-data"]}>
                    <div className={styles["card-data-head"]}>
                        Frequency
                    </div>
                    <div className={styles["card-data-value"]}>
                        Monthly
                    </div>
                </div>
                <div className={styles["card-details-data"]}>
                    <div className={styles["card-data-head"]}>
                    {cardData.card_type === "burner" ? "Expiry" : "Limit"}
                    </div>
                    <div className={styles["card-data-value"]}>
                    {cardData.card_type === "burner" ? cardData.expiry : cardData.limit}
                    </div>
                </div>
            </div>
            <div className={styles["progress-bar"]}>
                <div className={styles["progress-bar-left"]}></div>
                <div className={styles["progress-bar-right"]}></div>
            </div>
            <div className={styles["progress-bar-labels"]}>
                <div className={styles["progress-label-head"]}>
                    <div className={styles["progress-label-pointers"]}>
                    </div>
                    <div className={styles["progress-label-subtitle"]}>
                        Spent
                    </div>
                </div>
                <b>{cardData.spent.value} {cardData.spent.currency}</b>
            </div>
            <div className={styles["progress-bar-labels"]}>
                <div className={styles["progress-label-head"]}>
                    <div className={styles["progress-label-pointers"]}>
                    </div>
                    <div className={styles["progress-label-subtitle"]}>
                        Balance
                    </div>
                </div>
                <b>{cardData.available_to_spend.value} {cardData.available_to_spend.currency}</b>
            </div>

        </div>
    )
}
