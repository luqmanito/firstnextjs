import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/createnewpass.module.scss";
import {useRouter} from 'next/router'
import Image from "next/image";
import pic1 from "../public/asset/pic1.png";
import pic2 from "../public/asset/pic2.png";
import { createPassApi } from "./api/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eye from "../public/asset/eye.png";
import eyedash from "../public/asset/eyeslash.png";

const Createnewpass = () => {
  const [body, setBody] = useState(false);
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown1, setIsPwdShown1] = useState(false);
  const router = useRouter()
  const changeHandler = (e) =>
  setBody({ ...body, [e.target.name]: e.target.value });

  const resetPass = async () => {
    try {
      const result = await createPassApi(body);
      toast.success("Your password has been updated !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      console.log(result);
    //   router.push('/createnewpass')
    } catch (error) {
      toast.error("Password isn't match!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      console.log(error);
    }
  };

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
                Did You Forgot Your Password? Don`&apos;`t Worry, You Can Reset Your
                Password In a Minutes.
              </p>
              <p className={`${styles["tf"]}`}>
              Now you can create a new password for your FazzPay account. Type your password twice so we can confirm your new passsword.
              </p>
              <form action="">
              <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type="text"
                  placeholder="🔑 Input Key generated from Email"
                  name="keysChangePassword"
                />
                <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type={isPwdShown1 ? "text" : "password"}
                  placeholder="🔒 Create new password"
                  name="newPassword"
                />
                <Image
                  className={`${styles["icon-eye"]}`}
                  src={isPwdShown ? eye : eyedash}
                  onClick={() => setIsPwdShown1(!isPwdShown1)}
                />
                <br /> <br />
                <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type={isPwdShown ? "text" : "password"}
                  placeholder="🔒 Confirm your new password"
                  name="confirmPassword"
                />
                
                
                <Image
                  className={`${styles["icon-eye"]}`}
                  src={isPwdShown ? eye : eyedash}
                  onClick={() => setIsPwdShown(!isPwdShown)}
                />
            
               
              </form>
              <button onClick={resetPass} className={` ${styles["btn"]}`}>Confirm</button>
              <ToastContainer />
            </section>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Createnewpass;
