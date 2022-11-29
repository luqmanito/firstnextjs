import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser_id, setPin, setToken } from "../redux/reducers/regSlice";
import styles from "../styles/createPin.module.scss";
import {useRouter} from 'next/router'
import Image from "next/image";
import dynamic from "next/dynamic";
import pic1 from "../public/asset/pic1.png";
import pic2 from "../public/asset/pic2.png";
import { inputPin } from "./api/utils";
import { toast, ToastContainer } from "react-toastify";

const ReactCodeInput = dynamic(import("react-code-input"));

const CreatePin = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const [body, setBody] = useState(null);
  
  const router = useRouter()
  const dispatch = useDispatch();

    const handlerPin = (e) => setBody(Number(`${e}`));
    console.log(body);

    const finalBody = { pin: body };
    console.log(finalBody);

  const submitHandler = async () => {   
    try {
      const result = await inputPin(finalBody, user_id, token);
      toast.success("Login Succesfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      dispatch(setPin({ pin: result.data.data.pin }));
      router.push("/dashboard");
    } catch (error) {
      toast.error("Server Error!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    // final();
  }, []);

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
                Secure Your Account, Your Wallet, and Your Data With 6 Digits
                PIN That You Created Yourself.{" "}
              </p>
              <p className={`${styles["tf"]}`}>
                Create 6 digits pin to secure all your money and your data in
                FazzPay app. Keep it secret and don`&apos;`t tell anyone about your
                FazzPay account password and the PIN.
              </p>
              <form action="">
                <div class="container">
                  <div class="row row-cols-2 row-cols-lg-3">
                    <div class="col-4 col-lg-2">
                      {/* <input
                        onChange={changeHandler1}
                        className={`form-control ${styles["inp-otp"]}`}
                        type="text"
                        placeholder=""
                        maxlength="1"
                        name="pin1"
                      />
                    </div>
                    <div class="col-4 col-lg-2">
                    
                      <input
                        onChange={changeHandler2}
                        type="text"
                        className={`form-control ${styles["inp-otp"]}`}
                        placeholder=""
                        maxlength="1"
                        name="pin2"
                      />
                    </div>
                    <div class="col-4 col-lg-2">
                      <input
                        onChange={changeHandler3}
                        type="text"
                        className={`form-control ${styles["inp-otp"]}`}
                        placeholder=""
                        maxlength="1"
                        name="pin3"
                      />
                    </div>
                    <div class="col-4 col-lg-2">
                      <input
                        onChange={changeHandler4}
                        type="text"
                        className={`form-control ${styles["inp-otp"]}`}
                        placeholder=""
                        maxlength="1"
                        name="pin4"
                      />
                    </div>
                    <div class="col-4 col-lg-2">
                      <input
                        onChange={changeHandler5}
                        type="text"
                        className={`form-control ${styles["inp-otp"]}`}
                        placeholder=""
                        maxlength="1"
                        name="pin5"
                      />
                    </div>
                    <div class="col-4 col-lg-2">
                      <input
                        onChange={changeHandler6}
                        type="text"
                        className={`form-control ${styles["inp-otp"]}`}
                        placeholder=""
                        maxlength="1"
                        name="pin6"
                      /> */}
                    </div>
                  </div>
                  <ReactCodeInput
                        type="password"
                        name="pin"
                        fields={6}
                        onChange={handlerPin}
                      />
                </div>
              </form>
              <button onClick={submitHandler} className={` ${styles["btn"]}`}>
                Confirm
              </button>
              <ToastContainer />
            </section>
          </div>
        </aside>
      </main>
    </>
  );
};

export default CreatePin;
