import React, { Fragment, useEffect, useState } from "react";
import {  setPin  } from "../../redux/reducers/regSlice";
import styles from "../../styles/modify.module.scss";
import Image from "next/image";
import grid1 from "../../../public/asset/grid1.png";
import up1 from "../../../public/asset/up.png";
import plus from "../../../public/asset/plus.png";
import logout from "../../../public/asset/logout.png";
import people from "../../../public/asset/people.png";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import { inputPin } from "../api/utils";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useRouter } from "next/router";
import PageTitle from "../../components/page-tittle/pageTittle";
const ReactCodeInput = dynamic(import("react-code-input"));

const ChangePin = () => {
  const [body, setBody] = useState({});
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const dispatch = useDispatch();
  const router = useRouter();

  const handlerPin = (e) => setBody(Number(`${e}`));
  console.log(body);

  const finalBody = { pin: body };
  console.log(finalBody);

  const submitHandler = async () => {
    try {
      const result = await inputPin(finalBody, user_id, token);
      console.log(result);
      toast.success("PIN Updated!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      dispatch(setPin({ pin: result.data.data.pin }));
    } catch (error) {
      toast.error("change PIN Failed!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log(error);
    }
  };

  const navDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <>
    <Header/>
    <PageTitle title="Change PIN" />
      {/* <section className={`${styles["section-main"]}`}> */}
        <div className={`container ${styles["section-sub"]}`}>
          <div className={`row ${styles["section-row"]}`}>
            <div className={`col-4 ${styles["section-col"]}`}>
              <div className={`${styles["list-main"]}`}>
                <p className={` ${styles["p1"]}`}>
                  {" "}
                  <Image className={` ${styles["menu"]}`} src={grid1} alt="gbr" />
                  <span onClick={navDashboard} className={` ${styles["spanpD"]}`}>Dashboard</span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up1} alt="gbr" />
                  <span className={` ${styles["spanpt"]}`}>
                    <b>Transfer</b>
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={plus} alt="gbr" />{" "}
                  <span className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={people} alt="gbr" />{" "}
                  <span className={` ${styles["spanp"]}`}>Profile </span>
                </p>
                <p className={` ${styles["p3"]}`}>
                  <Image className={` ${styles["menu"]}`} src={logout} alt="gbr" />{" "}
                  <span className={` ${styles["spanp"]}`}>Logout </span>
                </p>
              </div>
            </div>
            <div className="col-8">
              <div className={`container ${styles["trans-wrap"]}`}>
                <div className="row">
                  <p className={` ${styles["transto"]}`}> Change PIN</p>
                  <p className={` ${styles["transti"]}`}>
                    Type your new 6 digits security PIN <br /> to use in
                    Fazzpay.
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
                <button
                  onClick={submitHandler}
                  className={` ${styles["btn-px"]}`}
                >
                  Change PIN
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      {/* </section> */}
      <Footer/>
    </>
  );
};

export default ChangePin;
