import React from "react";
import styles from "../footer/footer.module.scss";

function Footer() {
  return (
    // <section className={`${styles["bg-1"]}`}>
        <div className={`container ${styles["bg"]}`}>
          <div className={`row ${styles["row-end"]}`}>
            <div className={`col ${styles["row-end1"]}`}>2020 FazzPay. All right reserved.</div>
            <div className={`col-6 ${styles["row-end2"]}`}>+62 5637 8882 9901 </div>
            <div className={`col ${styles["row-end3"]}`} >contact@fazzpay.com</div>
          </div>
        </div>
      // </section>
  );
}

export default Footer;
