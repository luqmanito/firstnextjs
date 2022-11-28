import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/resetpw.module.scss";
import Image from "next/image";
import pic1 from "../public/asset/pic1.png";
import pic2 from "../public/asset/pic2.png";

const login = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);

  return (
    <>
      <main className={`container ${styles["two"]}`}>
        <aside className={`row ${styles["main"]}`}>
          <div className={`col-sm-7 ${styles["sub"]}`}>
            <p>FazzPay</p>
            <div className={`${styles["img-wrap"]}`}>
              <Image className={`${styles["img1"]}`} src={pic1} />
              <Image className={`${styles["img2"]}`} src={pic2} />
            </div>
            <section className={`${styles["sect"]}`}>
              <p className={`${styles["p1"]}`}>
                App that Covering Banking Needs.
              </p>
              <p className={`${styles["p2"]}`}>
                {" "}
                FazzPay is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in FazzPay everyday with
                worldwide users coverage.
              </p>
            </section>
          </div>
          <div className={`col-sm-5 ${styles["sub-sec"]}`}>
            <section className={`${styles["sec-sect"]}`}>
              <p className={`${styles["start"]}`}>
                Did You Forgot Your Password? Don't Worry, You Can Reset Your
                Password In a Minutes.
              </p>
              <p className={`${styles["tf"]}`}>
              To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
              </p>
              <form action="">
              <input
                  // onChange={handleName}
                  className={` ${styles["inp"]}`}
                  type="text"
                  placeholder="✉ Enter your e-mail"
                  name="name"
                />
              </form>
              <button className={` ${styles["btn"]}`}>Confirm</button>
            </section>
          </div>
        </aside>
      </main>
    </>
  );
};

export default login;
