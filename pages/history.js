import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/history.module.scss";
import Image from "next/image";
import grid from "../public/asset/grid.png";
import up from "../public/asset/up.png";
import plus from "../public/asset/plus.png";
import logout from "../public/asset/logout.png";
import people from "../public/asset/people.png";
import man from "../public/asset/man.png";
import man2 from "../public/asset/man2.png";
import {useRouter} from 'next/router'


const History = () => {
  const [isPwdShown, setIsPwdShown] = useState(false);
  const router = useRouter()
  const as = () => {
    router.push("/createpin");
  }

  return (
    <>
      <main className={`container ${styles["two"]}`}>
        {/* <section className={`container ${styles["twos"]}`}> */}
        <aside className={`row ${styles["row-f"]}`}>
          <div className={`col-md-8 ${styles["fazz"]}`}>
            {/* <Image className={` ${styles["man"]}`} src={man} /> */}
            <p> Fazzpay</p>
          </div>
          <div className={`col-6 col-md-4 ${styles["fazzy"]}`}>
            <div class="row">
              <div className={` col-6 col-md-4 ${styles["wrap-img"]}`}>
                <Image className={` ${styles["man"]}`} src={man} />
              </div>
              <div class="col-6 col-md-4">
                <p className={` ${styles["name"]}`}>Robert Chandler</p> <br />
                <p className={` ${styles["num"]}`}>+62 8139 3877 7946</p>
              </div>
              <div className={`col-6 col-md-4 ${styles["bell"]}`}>🔔</div>
            </div>
          </div>
        </aside>
        {/* </section> */}
      </main>

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
                  <span onClick={as} className={` ${styles["spanp"]}`}> Transfer </span>
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
                  <div class="col">
                    <p className={` ${styles["trans"]}`}>Transaction History</p>
                    <div className={` ${styles["wr-img"]}`}>
                      <Image className={` ${styles["man2"]}`} src={man2} />{" "}
                      <span className={` ${styles["suhi"]}`}>Samuel Suhi</span>{" "}
                      <p className={` ${styles["acc2"]}`}>Accept</p>
                    </div>
                    <div className={` ${styles["wr-img"]}`}>
                      <Image className={` ${styles["man2"]}`} src={man2} />{" "}
                      <span className={` ${styles["suhi"]}`}>Samuel Suhi</span>{" "}
                      <p className={` ${styles["acc2"]}`}>Accept</p>
                    </div>
                    <div className={` ${styles["wr-img"]}`}>
                      <Image className={` ${styles["man2"]}`} src={man2} />{" "}
                      <span className={` ${styles["suhi"]}`}>Samuel Suhi</span>{" "}
                      <p className={` ${styles["acc2"]}`}>Accept</p>
                    </div>
                    <div className={` ${styles["wr-img"]}`}>
                      <Image className={` ${styles["man2"]}`} src={man2} />{" "}
                      <span className={` ${styles["suhi"]}`}>Samuel Suhi</span>{" "}
                      <p className={` ${styles["acc2"]}`}>Accept</p>
                    </div>
                    <div className={` ${styles["wr-img"]}`}>
                      <Image className={` ${styles["man2"]}`} src={man2} />{" "}
                      <span className={` ${styles["suhi"]}`}>Samuel Suhi</span>{" "}
                      <p className={` ${styles["acc2"]}`}>Accept</p>
                    </div>
                    <div className={` ${styles["wr-img"]}`}>
                      <Image className={` ${styles["man2"]}`} src={man2} />{" "}
                      <span className={` ${styles["suhi"]}`}>Samuel Suhi</span>{" "}
                      <p className={` ${styles["acc2"]}`}>Accept</p>
                    </div>
                  </div>
                  <div className={`col-6 ${styles["transe"]}`}></div>
                  <div class="col">
                    <button className={`${styles["filter"]}`}>
                      -- Select Filter --
                    </button>
                    <div className={`${styles["price"]}`}>
                      <p className={`${styles["idr"]}`}>+Rp50.000</p>
                      <p className={`${styles["idr"]}`}>+Rp50.000</p>
                      <p className={`${styles["idr"]}`}>+Rp50.000</p>
                      <p className={`${styles["idr"]}`}>+Rp50.000</p>
                      <p className={`${styles["idr"]}`}>+Rp50.000</p>
                      <p className={`${styles["idr"]}`}>+Rp50.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div className={`row ${styles["row-end"]}`}>
            <div className={`col ${styles["row-end1"]}`}>2020 FazzPay. All right reserved.</div>
            <div className={`col-6 ${styles["row-end2"]}`}>+62 5637 8882 9901 </div>
            <div className={`col ${styles["row-end3"]}`} >contact@fazzpay.com</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
