import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/pinconfirm.module.scss";
import Image from "next/image";
import x from "../../public/asset/x.png";
import PageTitle from "../components/page-tittle/pageTittle";

const PinConfirm = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);

  return (
    <>
     <PageTitle title="Confirm PIN" />
      <main className={` ${styles["main-pin"]}`}>
        <section className={` ${styles["sec-pin"]}`}>
          <Image className={` ${styles["sec-x"]}`} src={x} alt="gbr"/>
          <p className={` ${styles["p1"]}`}>Enter PIN to Transfer</p>
          <p className={` ${styles["p2"]}`}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.{" "}
          </p>
          <form action="">
            <div className="container">
              <div className="row row-cols-2 row-cols-lg-3">
                <div className="col-4 col-lg-2">
                  <input
                    className={`form-control ${styles["inp-otp"]}`}
                    type="text"
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div className="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div className="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div className="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div className="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div className="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
              </div>
            </div>
          </form>
          <button className={` ${styles["btn-pin"]}`}>Continue</button>
        </section>
      </main>
    </>
  );
};

export default PinConfirm;
