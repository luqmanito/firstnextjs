import React, { Fragment, useEffect, useState } from "react";
import styles from "../../styles/profile.module.scss";
import Image from "next/image";
import grid1 from "../../../public/asset/grid1.png";
import up1 from "../../../public/asset/up.png";
import plus from "../../../public/asset/plus.png";
import logout from "../../../public/asset/logout.png";
import people from "../../../public/asset/people.png";
import man2 from "../../../public/asset/pip.png";
import check from "../../../public/asset/check.png";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../api/utils";
import Modal from "../../components/logout/logout";
import { useRouter } from "next/router";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


const History = () => {
    const { user_id } = useSelector((state) => state.regSlice);
    const { token } = useSelector((state) => state.regSlice);
    const { confirm } = useSelector((state) => state.confirmSlice);
    const [balance, setBalance] = useState(null);
    const [phone, setPhone] = useState(null);
    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const router = useRouter();


    const getDataProfile = async () => {
      try {
        const result = await getProfile(user_id, token);
        setPhone(result.data.data.noTelp);
        setUser(result.data.data.firstName)
      } catch (error) {
        console.log(error);
      }
    };

    const navInfo = () => {
      router.push("/prof-detail/profile-info");
    };
    const navPwd = () => {
      router.push("/password/changepw");
    };
    const navPin = () => {
      router.push("/changepin/modify");
    };
    const handleLogout = async () => {
      setOpen(!open);
    };
    const navDashb = () => {
      router.push("/dashboard");
    };
  

    useEffect(() => {
      getDataProfile();
    }, []);

    // if (open) {
    //   document.body.classList.add(`${styles['active-modal']}`)
    // } else {
    //   document.body.classList.remove(`${styles['active-modal']}`)
    // }

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
                  <Image className={` ${styles["menu"]}`} src={man2} alt="grb" />
                  <span onClick={navDashb} className={` ${styles["spanpD"]}`}>Dashboard</span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up1} alt="grb" />
                  <span className={` ${styles["spanpt"]}`}>
                    Transfer
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={plus} alt="grb" />{" "}
                  <span className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={people} alt="grb" />{" "}
                  <span className={` ${styles["spanpp"]}`}> <b>Profile</b>  </span>
                </p>
                <p className={` ${styles["p3"]}`}>
                  <Image className={` ${styles["menu"]}`} src={logout} alt="grb" />{" "}
                  <span className={` ${styles["spanp"]}`}>Logout </span>
                </p>
              </div>
            </div>
            <div className="col-8">
              <div className={`container ${styles["trans-wrap"]}`}>
                <div className="row">
                  <div className={`col ${styles["copl-pro"]}`} >
                    
                    <Image className={` ${styles["check-img"]}`} src={man2} alt="grb" />
                    <p className={` ${styles["edit"]}`}>✎ Edit</p>
                    <p className={` ${styles["rob"]}`}>{user}</p>
                    
                    <p className={` ${styles["hp"]}`}>
                      {phone}
                    </p>
                    <div className={` ${styles["cen-pro"]}`}>
                    <button onClick={navInfo} className={` ${styles["btn-pro"]}`}>
                      Personal Information →
                    </button> <br />
                    <button onClick={navPwd} className={` ${styles["btn-pro"]}`}>
                      Change Password →
                    </button> <br />
                    <button onClick={navPin} className={` ${styles["btn-pro"]}`}>
                      Change PIN →
                    </button> <br />
                    <button onClick={handleLogout} className={` ${styles["btn-pro"]}`}>
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
      <Footer/>
      <Modal
      open={open}
      setOpen={setOpen}
      title="Log out"
      body="Do you really want to log out?"
    />
    </>
  );
};

export default History;
