import React, { Fragment, useEffect, useState } from "react";
import styles from "../../styles/profile-info.module.scss";
import Image from "next/image";
import grid1 from "../../../public/asset/grid1.png";
import up1 from "../../../public/asset/up.png";
import plus from "../../../public/asset/plus.png";
import logout from "../../../public/asset/logout.png";
import people from "../../../public/asset/people.png";
import man2 from "../../../public/asset/man2.png";
import check from "../../../public/asset/check.png";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { jsPDF } from "jspdf";
import { getProfile } from "../api/utils";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import PageTitle from "../../components/page-tittle/pageTittle";

const ProfileDetail = () => {
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);

  const [balance, setBalance] = useState(null);
  const [phone, setPhone] = useState(null);
  const [user, setUser] = useState(null);
  const [userLast, setUserLast] = useState(null);
  const [email, setUserEmail] = useState(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const getDataProfile = async () => {
    try {
      const result = await getProfile(user_id, token);
      setPhone(result.data.data.noTelp);
      setUser(result.data.data.firstName);
      setUserLast(result.data.data.lastName)
      setUserEmail(result.data.data.email)
    } catch (error) {
      console.log(error);
    }
  };

  const navPhone = () => {
    router.push("/profile-info/phone-number");
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <>
    <PageTitle title="Profile" />
    <Header/>
      {/* <section className={`${styles["section-main"]}`}> */}
        <div className={`container ${styles["section-sub"]}`}>
          <div className={`row ${styles["section-row"]}`}>
            <div className={`col-4 ${styles["section-col"]}`}>
              <div className={`${styles["list-main"]}`}>
                <p className={` ${styles["p1"]}`}>
                  {" "}
                  <Image className={` ${styles["menu"]}`} src={grid1} alt="gbr"/>
                  <span className={` ${styles["spanpD"]}`}>Dashboard</span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up1} alt="gbr"/>
                  <span className={` ${styles["spanpt"]}`}>
                    <b>Transfer</b>
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={plus} alt="gbr"/>{" "}
                  <span className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={people} alt="gbr"/>{" "}
                  <span className={` ${styles["spanp"]}`}>Profile </span>
                </p>
                <p className={` ${styles["p3"]}`}>
                  <Image className={` ${styles["menu"]}`} src={logout} alt="gbr"/>{" "}
                  <span className={` ${styles["spanp"]}`}>Logout </span>
                </p>
              </div>
            </div>
            <div className="col-8">
              <div className={`container ${styles["trans-wrap"]}`}>
                <div className="row">
                  <p className={` ${styles["transto"]}`}>
                    {" "}
                    Personal Information
                  </p>
                  <p className={` ${styles["transti"]}`}>
                    We got your personal information from the sign up proccess.{" "}
                    <br /> If you want to make changes on your information,{" "}
                    <br /> contact our support.
                  </p>
                  {/* <div className="col"> */}
                    <div className={` ${styles["wr-wr"]}`}>
                      <div className={` ${styles["wr-img"]}`}>
                        <span className={` ${styles["susi"]}`}>First Name</span>{" "}
                        <p className={` ${styles["acc3"]}`}>{user}</p>
                      </div>
                      <div className={` ${styles["wr-img"]}`}>
                        <span className={` ${styles["susi"]}`}>Last Name</span>{" "}
                        <p className={` ${styles["acc3"]}`}>{userLast}</p>
                      </div>
                      <div className={` ${styles["wr-img"]}`}>
                        <span className={` ${styles["susi"]}`}>
                          Verified E-mail
                        </span>{" "}
                        <p className={` ${styles["acc3"]}`}>{email}</p>
                      </div>
                      <div className={` ${styles["wr-img"]}`}>
                        <span className={` ${styles["susi"]}`}>
                          Phone Number
                        </span>{" "}
                        <p className={` ${styles["acc3"]}`}>
                          {phone}
                        </p>
                        <p
                          onClick={navPhone}
                          className={` ${styles["manage"]}`}
                        >
                          Manage
                        </p>
                      </div>
                    </div>
                  {/* </div> */}

                  <div className="col">
                    <button className={`${styles["filter"]}`}>
                      -- Select Filter --
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </section> */}
      <Footer/>
    </>
  );
};

export default ProfileDetail;
