import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/resetpw.module.scss";
import {useRouter} from 'next/router'
import Image from "next/image";
import pic1 from "../../public/asset/pic1.png";
import pic2 from "../../public/asset/pic2.png";
import { resetPassApi } from "./api/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Resetpw = () => {
  const [body, setBody] = useState(false);
  const router = useRouter()
  const changeHandler = (e) =>
  setBody({ ...body, [e.target.name]: e.target.value });

  const resetPass = async () => {
    try {
      const result = await resetPassApi(body);
      toast.success("Process success, please check your email !", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      console.log(result);
      router.push('/createnewpass')
    } catch (error) {
      toast.error("Email isn't activated or email or password is wrong!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      console.log(error);
    }
  };

  function tokenCheck() {
    let verify = Cookies.get("tokenUser");
    console.log(verify);
    if (verify) {
      return router.push("/dashboard")
    }
  }

  useEffect(() => {
    tokenCheck()
  }, [])

  return (
    <>
      <main className={`container ${styles["two"]}`}>
        <aside className={`row ${styles["main"]}`}>
          <div className={`col-sm-7 ${styles["sub"]}`}>
            <p>FazzPay</p>
            <div className={`${styles["img-wrap"]}`}>
              <Image className={`${styles["img1"]}`} src={pic1} alt="gbr"/>
              <Image className={`${styles["img2"]}`} src={pic2} alt="gbr"/>
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
              To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
              </p>
              <form action="">
              <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type="text"
                  placeholder="✉ Enter your e-mail"
                  name="email"
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

export default Resetpw;
