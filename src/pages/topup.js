import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/topup.module.scss";
import Image from "next/image";
import x from "../../public/asset/x.png";
import PageTitle from "../components/page-tittle/pageTittle";

const PinConfirm = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);

  return (
    <>
     <PageTitle title="Top Up" />
      <main className={` ${styles["main-pin"]}`}>
        <section className={` ${styles["sec-pin"]}`}>
          <Image className={` ${styles["sec-x"]}`} src={x} alt="gbr"/>
          <p className={` ${styles["p1"]}`}>Topup</p>
          <p className={` ${styles["p2"]}`}>
          Enter the amount of money, and click submit.{" "}
          </p>
          <form action="">
            <div className="container">
              <input className={` ${styles["btn-topup"]}`} type="text" name="" id="" />
            </div>
          </form>
          <button className={` ${styles["btn-pin"]}`}>Continue</button>
        </section>
      </main>
    </>
  );
};

export default PinConfirm;
