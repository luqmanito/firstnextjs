import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import grid from "../public/asset/grid.png";
import chart from "../public/asset/chart.png";
import up from "../public/asset/up.png";
import plus from "../public/asset/plus.png";
import logout from "../public/asset/logout.png";
import people from "../public/asset/people.png";
import PageTitle from "../components/page-tittle/pageTittle";
import styles from "../styles/dashboard.module.scss";
import { useSelector } from "react-redux";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import man from "../public/asset/man.png";
import man2 from "../public/asset/man2.png";
import upg from "../public/asset/upg.png";
import downm from "../public/asset/downm.png";
import { getProfile } from "./api/utils";


function Dashboard() {
  const router = useRouter();
  const as = () => {
    router.push("/createpin");
  };
  const nav1 = () => {
    router.push("/transfer");
  };
  const nav2 = () => {
    router.push("/success");
  };

  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const [balance, setBalance] = useState(null);
  const [phone, setPhone] = useState(null);

  const getDataProfile = async () => {
    try {
      const result = await getProfile(user_id, token);
      setPhone(result.data.data.noTelp);
     setBalance(result.data.data.balance)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataProfile();
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
                  <Image className={` ${styles["menus"]}`} src={grid} />
                  <span className={` ${styles["spanpd"]}`}>Dashboard</span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up} />
                  <span onClick={as} className={` ${styles["spanp"]}`}>
                    {" "}
                    Transfer{" "}
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
              <div class="container">
                <div className={`row ${styles["mid"]}`}>
                  <div class="col">
                    <p onClick={nav2} className={` ${styles["bln"]}`}>Balance</p>
                    <p className={` ${styles["idr120"]}`}>Rp{balance}</p>
                    <p className={` ${styles["nump"]}`}>{phone}</p>
                  </div>
                  <div class="col-6"></div>
                  <div class="col">
                    <button onClick={nav1} className={` ${styles["btn-tf"]}`}>↑ Transfer</button> <br /> <br />
                    <button className={` ${styles["btn-tu"]}`}>+ Top Up</button>
                  </div>
                </div>
              </div>
              <div className={`row ${styles["sec-mid"]}`}>
                <div className={`col-8 ${styles["th-mid"]}`}>
                  <div class="row">
                    <div class="col-6">
                        <Image className={` ${styles["arr-i"]}`} src={upg}/>
                      <p className={` ${styles["income"]}`}>Income</p>
                      <p className={` ${styles["tot-inc"]}`}>Rp.{0+balance}</p>
                    </div>
                    <div class="col-6">
                    <Image className={` ${styles["arr-i"]}`} src={downm}/>
                      <p className={` ${styles["income"]}`}>Expense</p>
                      <p className={` ${styles["tot-inc"]}`}>Rp1.560.000</p>
                    </div>
                  </div>
                  <Image className={` ${styles["chart"]}`} src={chart}/>
                </div>
                <div className={`col-4 ${styles["ts-mid"]}`}>
                  <div class="row">
                    <div class="col-sm-8">
                      <p className={` ${styles["trans-h"]}`}>Transaction History</p>
                      <div className={` ${styles["main-p"]}`}>
                        {" "}
                        <Image className={` ${styles["mantiny"]}`} src={man2} />
                       <span className={` ${styles["sam"]}`}>Samuel Suhi</span>  <p className={` ${styles["sub-p"]}`}>Accept</p>{" "}
                      </div>
                      <div className={` ${styles["main-p"]}`}>
                        {" "}
                        <Image className={` ${styles["mantiny"]}`} src={man2} />
                        <span className={` ${styles["sam"]}`}>Samuel Suhi</span> <p className={` ${styles["sub-p"]}`}>Accept</p>{" "}
                      </div>
                      <div className={` ${styles["main-p"]}`}>
                        {" "}
                        <Image className={` ${styles["mantiny"]}`} src={man2} />
                        <span className={` ${styles["sam"]}`}>Samuel Suhi</span><p className={` ${styles["sub-p"]}`}>Accept</p>{" "}
                      </div>
                      <div className={` ${styles["main-p"]}`}>
                        {" "}
                        <Image className={` ${styles["mantiny"]}`} src={man2} />
                        <span className={` ${styles["sam"]}`}>Samuel Suhi</span> <p className={` ${styles["sub-p"]}`}>Accept</p>{" "}
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <p className={` ${styles["seeall"]}`}>See all</p>
                      <p className={` ${styles["sub-min"]}`}>+Rp50.000</p>
                      <p className={` ${styles["sub-min"]}`}>+Rp50.000</p>
                      <p className={` ${styles["sub-min"]}`}>+Rp50.000</p>
                      <p className={` ${styles["sub-min"]}`}>+Rp50.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <Footer />
    
    </>
  );
}

export default Dashboard;
