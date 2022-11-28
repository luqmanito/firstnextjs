import React, { Fragment, useEffect, useState } from "react";
import styles from "../../styles/changepw.module.scss";
import Image from "next/image";
import grid1 from "../../public/asset/grid1.png";
import up1 from "../../public/asset/up.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import man2 from "../../public/asset/man2.png";
import check from "../../public/asset/check.png";
import eye from "../../public/asset/eye.png";
import eyedash from "../../public/asset/eyeslash.png";
import { useSelector, useDispatch } from "react-redux";
import { jsPDF } from "jspdf";
import {  passApi } from "../api/utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const History = () => {
  
  const { token } = useSelector((state) => state.regSlice);
  const { user_id } = useSelector((state) => state.regSlice);

  const [body, setBody] = useState({});
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [isPwdShown2, setIsPwdShown2] = useState(false);
  const [isPwdShown3, setIsPwdShown3] = useState(false);

  const changeHandler = (e) =>
    setBody({ ...body, [e.target.name]: e.target.value });
  console.log(body);

  const changePass = async () => {
    try {
      const result = await passApi(body, user_id, token);
      toast.success("Your Password has been updated!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Old Password wrong or new password doesn't match!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
      console.log(error);
    }
  };




  return (
    <>
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
                  <p className={` ${styles["transto"]}`}> Change Password</p>
                  <p className={` ${styles["transti"]}`}>
                    You must enter your current password and then <br /> type
                    your new password twice.
                  </p>
                  <div className={`col ${styles["wr-pw"]}`} >
                    <div className={` ${styles["wr-wr"]}`}>
                      <input
                        onChange={changeHandler}
                        className={` ${styles["pwd"]}`}
                        type={isPwdShown ? "text" : "password"}
                        placeholder="🔒 Current password"
                        name="oldPassword"
                      /> <br />
                      <Image
                        className={`${styles["icon-eye"]}`}
                        src={isPwdShown ? eye : eyedash}
                        onClick={() => setIsPwdShown(!isPwdShown)}
                      />
                      <input
                        onChange={changeHandler}
                        className={` ${styles["pwd"]}`}
                        type={isPwdShown2 ? "text" : "password"}
                        placeholder="🔒 New password"
                        name="newPassword"
                      /> <br />
                      <Image
                        className={`${styles["icon-eye"]}`}
                        src={isPwdShown2 ? eye : eyedash}
                        onClick={() => setIsPwdShown2(!isPwdShown2)}
                      />
                      <input
                        onChange={changeHandler}
                        className={` ${styles["pwd"]}`}
                        type={isPwdShown3 ? "text" : "password"}
                        placeholder="🔒 Repeat new password"
                        name="confirmPassword"
                      /> <br />
                      <Image
                        className={`${styles["icon-eye1"]}`}
                        src={isPwdShown3 ? eye : eyedash}
                        onClick={() => setIsPwdShown3(!isPwdShown3)}
                      />
                      <button onClick={changePass} className={` ${styles["btn-pw"]}`}>
                        Change Password
                      </button>
                      <ToastContainer />
                    </div>
                  </div>

                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
