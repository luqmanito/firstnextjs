import React, { Fragment, useEffect, useState } from "react";
import styles from "../../styles/modifynum.module.scss";
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
import { jsPDF } from "jspdf";
import { updatePhone } from "../api/utils";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useRouter } from "next/router";
const ReactCodeInput = dynamic(import("react-code-input"));

const History = () => {

  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const [body, setBody] = useState({});
  const router = useRouter();
  const changeHandler = (e) =>
  setBody({ ...body, [e.target.name]: e.target.value });
console.log(body);

  const submitHandler = async () => {
    try {
      const result = await updatePhone( user_id, body, token);
      console.log(result);
      toast.success("Phone Number Updated!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500,
      });
      // router.push("/prof-detail/profile-info");
    } catch (error) {
      toast.error("Update Failed!", {
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
                  <p className={` ${styles["transto"]}`}> Edit Phone Number</p>
                  <p className={` ${styles["transti"]}`}>
                  Add at least one phone number for the transfer ID <br /> so you can start transfering your money to another user.
                  </p>
                  <div className={`col ${styles["wr-pw"]}`}>
                    <div className={styles.cdecde}>
                    <input
                  onChange={changeHandler}
                  className={` ${styles["inp"]}`}
                  type="text"
                  placeholder="📞+62 Enter your phone number"
                  name="noTelp"
                />
                    </div>
                  </div>
                  
                </div>
                <button onClick={submitHandler} className={` ${styles["btn-pw"]}`}>
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
