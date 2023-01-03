import React, { Fragment, useEffect, useState } from "react";
import styles from "../../styles/modify.module.scss";
import Image from "next/image";
import grid1 from "../../public/asset/grid1.png";
import up1 from "../../public/asset/up.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { checkPinUser, getProfile } from "../api/utils";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
const ReactCodeInput = dynamic(import("react-code-input"));

const History = () => {

  const [body, setBody] = useState({});
  const { token } = useSelector((state) => state.regSlice);
  const router = useRouter();

  const handlerPin = (e) => setBody(Number(`${e}`));
  console.log(body);

  const checkPin = async () => {
    try {
      const result = await checkPinUser(body, token);
      console.log(result, "from checkpin");
      toast.error("PIN Correct!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      router.push("/changepin/final");
    } catch (error) {
      toast.error("Input PIN is wrong!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log(error);
    }
  };


  return (
    <>
    <Header/>
      <section className={`${styles["section-main"]}`}>
        <div className={`container ${styles["section-sub"]}`}>
          <div className={`row ${styles["section-row"]}`}>
            <div className={`col-4 ${styles["section-col"]}`}>
              <div className={`${styles["list-main"]}`}>
                <p className={` ${styles["p1"]}`}>
                  {" "}
                  <Image className={` ${styles["menu"]}`} src={grid1} />
                  <span className={` ${styles["spanpD"]}`}>Dashboard</span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up1} />
                  <span className={` ${styles["spanpt"]}`}>
                    <b>Transfer</b>
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={plus} />{" "}
                  <span className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={people} />{" "}
                  <span className={` ${styles["spanp"]}`}>Profile </span>
                </p>
                <p className={` ${styles["p3"]}`}>
                  <Image className={` ${styles["menu"]}`} src={logout} />{" "}
                  <span className={` ${styles["spanp"]}`}>Logout </span>
                </p>
              </div>
            </div>
            <div class="col-8">
              <div className={`container ${styles["trans-wrap"]}`}>
                <div class="row">
                  <p className={` ${styles["transto"]}`}> Change PIN</p>
                  <p className={` ${styles["transti"]}`}>
                    Enter your current 6 digits Fazzpay PIN below <br /> to
                    continue to the next steps.
                  </p>
                  <div className={`col ${styles["wr-pw"]}`}>
                    <div className={styles.cdecde}>
                    <ReactCodeInput
                    
                      type="password"
                      name="pin"
                      fields={6}
                      onChange={handlerPin}
                    />
                    </div>
                  </div>
                  
                </div>
                <button onClick={checkPin} className={` ${styles["btn-pw"]}`}>
                  Continue
                  </button>
                  <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default History;
