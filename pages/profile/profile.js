import React, { Fragment, useEffect, useState } from "react";
import styles from "../../styles/profile.module.scss";
import Image from "next/image";
import grid1 from "../../public/asset/grid1.png";
import up1 from "../../public/asset/up.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import man2 from "../../public/asset/man2.png";
import check from "../../public/asset/check.png";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../api/utils";
// import UsersDetail from "../components/detail-user/detail-user";
import { jsPDF } from "jspdf";

const History = () => {
  //   const { user_id } = useSelector((state) => state.regSlice);
  //   const { token } = useSelector((state) => state.regSlice);
  //   const { confirm } = useSelector((state) => state.confirmSlice);
  //   const [balance, setBalance] = useState(null);
  //   const [phone, setPhone] = useState(null);
  //   const date = new Date();
  //   const { details } = useSelector((state) => state.userTransferSlice);
  //   let da = details.details;

  //   const [content, setContent] = useState({
  //     // receiverId: confirm.confirm.id,
  //     amount: null,
  //     notes: null,
  //   });

  //   const getDataProfile = async () => {
  //     try {
  //       const result = await getProfile(user_id, token);
  //       setBalance(result.data.data.balance);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getDataProfile();
  //     setContent(confirm.confirm);
  //   }, []);

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
                    Transfer
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={plus} />{" "}
                  <span className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={people} />{" "}
                  <span className={` ${styles["spanpp"]}`}> <b>Profile</b>  </span>
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
                  <div className={`col ${styles["copl-pro"]}`} >
                    
                    <Image className={` ${styles["check-img"]}`} src={man2} />
                    <p className={` ${styles["edit"]}`}>✎ Edit</p>
                    <p className={` ${styles["rob"]}`}>Robert Chandler</p>
                    
                    <p className={` ${styles["hp"]}`}>
                      +62 813-9387-7946
                    </p>
                    <div className={` ${styles["cen-pro"]}`}>
                    <button className={` ${styles["btn-pro"]}`}>
                      Personal Information →
                    </button> <br />
                    <button className={` ${styles["btn-pro"]}`}>
                      Change Password →
                    </button> <br />
                    <button className={` ${styles["btn-pro"]}`}>
                      Change PIN →
                    </button> <br />
                    <button className={` ${styles["btn-pro"]}`}>
                      Logout →
                    </button>
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
