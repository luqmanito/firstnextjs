import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/pinconfirm.module.scss";
import Image from "next/image";
import x from "../../public/asset/x.png";

const PinConfirm = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);

  return (
    <>
      <main className={` ${styles["main-pin"]}`}>
        <section className={` ${styles["sec-pin"]}`}>
          <Image className={` ${styles["sec-x"]}`} src={x} />
          <p className={` ${styles["p1"]}`}>Enter PIN to Transfer</p>
          <p className={` ${styles["p2"]}`}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.{" "}
          </p>
          <form action="">
            <div class="container">
              <div class="row row-cols-2 row-cols-lg-3">
                <div class="col-4 col-lg-2">
                  <input
                    className={`form-control ${styles["inp-otp"]}`}
                    type="text"
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div class="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div class="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div class="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div class="col-4 col-lg-2">
                  <input
                    type="text"
                    className={`form-control ${styles["inp-otp"]}`}
                    placeholder=""
                    maxlength="1"
                  />
                </div>
                <div class="col-4 col-lg-2">
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
