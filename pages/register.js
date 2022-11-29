import React, { Fragment, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from 'next/router'
import { signup } from "./api/utils";
import styles from "../styles/register.module.scss";
import Image from "next/image";
import pic1 from "../public/asset/pic1.png";
import pic2 from "../public/asset/pic2.png";
import eye from "../public/asset/eye.png";
import eyedash from "../public/asset/eyeslash.png";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const router = useRouter()
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [body, setBody] = useState({});

  const changeHandler = (e) =>
  setBody({ ...body, [e.target.name]: e.target.value });
  console.log(body);

  const submitHandler = async () => {
    try {
      const result = await signup(body);
        toast.success("Register Succesfully!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      console.log(result);
      router.push('/login')
    } catch (error) {
      toast.error("Email Already Registered!", {
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
                Start Accessing Banking Needs With All Devices and All Platforms{" "}
                <br />
                With 30.000+ Users
              </p>
              <p className={`${styles["tf"]}`}>
                Transfering money is eassier than ever, you can access FazzPay
                wherever you are. Desktop, laptop, mobile phone? <br /> we cover
                all of that for you!
              </p>
              <form action="">
                <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type="text"
                  placeholder="👤 Enter your firstname"
                  name="firstName"
                />
                <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type="text"
                  placeholder="👤 Enter your lastname"
                  name="lastName"
                />
                <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type="text"
                  placeholder="✉ Enter your e-mail"
                  name="email"
                />
                <br />
                <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type={isPwdShown ? "text" : "password"}
                  placeholder="🔒 Enter your password"
                  name="password"
                />
                {/* <input className={` ${styles["inp-none"]}`} /> */}
                <Image
                  className={`${styles["icon-eye"]}`}
                  src={isPwdShown ? eye : eyedash}
                  onClick={() => setIsPwdShown(!isPwdShown)}
                />
              </form>
              <button onClick={submitHandler} className={` ${styles["btn"]}`}>Sign Up</button><ToastContainer />
              
              <p className={` ${styles["acc"]}`}>
                {" "}
                Already have an account? Let`&apos;`s{" "}
                <span className={` ${styles["sign"]}`}>Login</span>{" "}
              </p>
            </section>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Register;
