import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import grid from "../../public/asset/grid.png";
import chart from "../../public/asset/chart.png";
import up from "../../public/asset/up.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import PageTitle from "../components/page-tittle/pageTittle";
import styles from "../styles/dashboard.module.scss";
import { useSelector } from "react-redux";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import man from "../../public/asset/man.png";
import man2 from "../../public/asset/man2.png";
import upg from "../../public/asset/upg.png";
import downm from "../../public/asset/downm.png";
import { getProfile } from "./api/utils";
import UsersHistoryDashboard from "../components/dashboard-history/list-history";
import Cookies from "js-cookie";
import { NextResponse } from "next/server";
import PinConfirm from "../components/topUp/topup";
import Modal from "../components/logout/logout";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const router = useRouter();
  const as = () => {
    router.push("/transfer");
  };
  const nav1 = () => {
    router.push("/transfer");
  };
  const nav2 = () => {
    router.push("/success");
  };
  const nav5 = () => {
    router.push("/profile");
  };
  const navSeeAll = () => {
    router.push("/history");
  };
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };
  const handleTopUp = async () => {
    setOpen(!open);
  };
  const handleLogout = async () => {
    setOpenAuth(!openAuth);
  };
  const { history } = useSelector((state) => state.userHistorySlice);
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const [balance, setBalance] = useState(null);
  const [phone, setPhone] = useState(null);
  const [dataHistory, setDataHistory] = useState(null);
  const [imageUser, setImageUser] = useState(null);
  
  const getDataProfile = async () => {
    try {
      const result = await getProfile(user_id, token);
      setPhone(result.data.data.noTelp);
      setBalance(result.data.data.balance);
      setImageUser(result.data.data.image)
    } catch (error) {
      console.log(error);
    }
  };

  function tokenCheck() {
    let verify = Cookies.get("tokenUser");
    console.log(verify);
    if (!verify) {
      return router.push("/")
    }
  }

  useEffect(() => {
    setDataHistory(history.history);
    getDataProfile();
    tokenCheck();
  }, []);

  return (
    <>
      <PageTitle title="Dashboard" />

      <Header />

      <section className={`${styles["section-main"]}`}>
        <div className={`container ${styles["section-sub"]}`}>
          <div className={`row ${styles["section-row"]}`}>
            <div className={`col-4 ${styles["section-col"]}`}>
              <div className={`${styles["list-main"]}`}>
                <p className={` ${styles["p1"]}`}>
                  {" "}
                  <Image
                    className={` ${styles["menus"]}`}
                    src={grid}
                    alt="gbr"
                  />
                  <span className={` ${styles["spanpd"]}`}>Dashboard</span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up} alt="gbr" />
                  <span onClick={as} className={` ${styles["spanp"]}`}>
                    {" "}
                    Transfer{" "}
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={plus}
                    alt="gbr"
                  />{" "}
                  <span 
                  onClick={handleTopUp}
                  className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={people}
                    alt="gbr"
                  />{" "}
                  <span onClick={nav5} className={` ${styles["spanp"]}`}>
                    Profile{" "}
                  </span>
                </p>
                <p className={` ${styles["p3"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={logout}
                    alt="gbr"
                  />{" "}
                  <span 
                  onClick={handleLogout}
                  className={` ${styles["spanp"]}`}>Logout </span>
                </p>
              </div>
            </div>
            <div className="col-8">
              <div className="container">
                <div className={`row ${styles["mid"]}`}>
                  <div className="col">
                    <p onClick={nav2} className={` ${styles["bln"]}`}>
                      Balance
                    </p>
                    <p className={` ${styles["idr120"]}`}>{rupiah(balance)}</p>
                    <p className={` ${styles["nump"]}`}>{phone}</p>
                  </div>
                  <div className="col-6"></div>
                  <div className="col">
                    <button onClick={nav1} className={` ${styles["btn-tf"]}`}>
                      ↑ Transfer
                    </button>{" "}
                    <br /> <br />
                    <button 
                    onClick={handleTopUp}
                    className={` ${styles["btn-tu"]}`}>+ Top Up</button>
                  </div>
                </div>
              </div>
              <div className={`row ${styles["sec-mid"]}`}>
                <div className={`col-8 ${styles["th-mid"]}`}>
                  <div className="row">
                    <div className="col-6">
                      <Image
                        className={` ${styles["arr-i"]}`}
                        src={upg}
                        alt="gbr"
                      />
                      <p className={` ${styles["income"]}`}>Income</p>
                      <p className={` ${styles["tot-inc"]}`}>
                        {rupiah(Number(balance))}
                      </p>
                    </div>
                    <div className="col-6">
                      <Image
                        className={` ${styles["arr-i"]}`}
                        src={downm}
                        alt="gbr"
                      />
                      <p className={` ${styles["income"]}`}>Expense</p>
                      <p className={` ${styles["tot-inc"]}`}>Rp 1.560.000,00</p>
                    </div>
                  </div>
                  <Image
                    className={` ${styles["chart"]}`}
                    src={chart}
                    alt="gbr"
                  />
                </div>
                <div className={`col-4 ${styles["ts-mid"]}`}>
                  <div className="row">
                    <div className="col-sm-8">
                      <p className={` ${styles["trans-h"]}`}>
                        Transaction History
                      </p>
                      {dataHistory &&
                        dataHistory.map((user) => {
                          console.log(user.id);
                          return (
                            <UsersHistoryDashboard
                              key={user.id}
                              name={`${user.firstName} ${user.lastName}`}
                              type={user.type}
                              status={user.status}
                              amount={user.amount}
                            />
                          );
                        })}
                    </div>
                    <div className="col-sm-4">
                      <p onClick={navSeeAll} className={` ${styles["seeall"]}`}>
                        See all
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PinConfirm
        open={open}
        setOpen={setOpen}
        title="Log out"
        body="Do you really want to log out?"
        token={token}
      />
      <Modal
        open={openAuth}
        setOpen={setOpenAuth}
        title="Log out"
        body="Do you really want to log out?"
      />
      <Footer />
    </>
  );
}

export default Dashboard;
