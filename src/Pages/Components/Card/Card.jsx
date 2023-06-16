import styles from "./Card.module.css"

export const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles["card-head"]}>
                <div className={styles["card-head-text"]}>
                    <h2>Linkedin</h2>
                    <div className={styles["card-sub-text"]}><span>Memberfive</span><span className={styles["dot-separator"]}>•</span><span>Budget</span></div>
                </div>
                <div className={styles["status-icon"]}>
                    <span className="material-symbols-outlined">
                        {false ? "local_fire_department" : "sync"}
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
                        Expiry
                    </div>
                    <div className={styles["card-data-value"]}>
                        21 July 2021
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
                <b>7890 SGD</b>
            </div>
            <div className={styles["progress-bar-labels"]}>
                <div className={styles["progress-label-head"]}>
                    <div className={styles["progress-label-pointers"]}>
                    </div>
                    <div className={styles["progress-label-subtitle"]}>
                        Balance
                    </div>
                </div>
                <b>7890 SGD</b>
            </div>

        </div>
    )
}
