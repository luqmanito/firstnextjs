import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/history.module.scss";
import Image from "next/image";
import grid from "../../public/asset/grid.png";
import up from "../../public/asset/up.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import { useRouter } from "next/router";
import UsersHistory from "../components/history-user/detail";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "../helper/debounce";
import { getUsersHistory } from "./api/utils";
import { setHistory } from "../redux/reducers/userHistorySlice";
import Head from "next/head";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Cookies from "js-cookie";

const History = () => {
  const { history } = useSelector((state) => state.userHistorySlice);
  const router = useRouter();
  const as = () => {
    router.push("/createpin");
  };

  // const { token } = useSelector((state) => state.regSlice);
  
  const dispatch = useDispatch();
  const [userTransfer, setuserTransfer] = useState(null);
  const [open, setOpen] = useState(false);
  const [dataHistory, setDataHistory] = useState(null);

  const getAllUser = debounce(async () => {
    try {
      const result = await getUsersHistory(Cookies.get("tokenUser"));
      dispatch(setHistory({ history: result.data.data }));
      setDataHistory(result.data.data)
      // console.log(result.data.data);
      // Cookies.set("userHistory", JSON.stringify(result.data.data));
    } catch (error) {
      console.log(error);
    }
  }, 1500);

  useEffect(() => {
    // setDataHistory(history.history);
    getAllUser();
  }, []);
  console.log(dataHistory);
  return (
    <>
      {/* <main className={`container ${styles["two"]}`}>
        <aside className={`row ${styles["row-f"]}`}>
          <div className={`col-md-8 ${styles["fazz"]}`}>    
            <p> Fazzpay</p>
          </div>
          <div className={`col-6 col-md-4 ${styles["fazzy"]}`}>
            <div className="row">
              <div className={` col-6 col-md-4 ${styles["wrap-img"]}`}>
                <Image className={` ${styles["man"]}`} src={man} />
              </div>
              <div className="col-6 col-md-4">
                <p className={` ${styles["name"]}`}>Robert Chandler</p> <br />
                <p className={` ${styles["num"]}`}>+62 8139 3877 7946</p>
              </div>
              <div className={`col-6 col-md-4 ${styles["bell"]}`}>🔔</div>
            </div>
          </div>
        </aside>
      </main> */}
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
                    alt="agr"
                  />
                  <span className={` ${styles["spanpd"]}`}>Dashboard</span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up} alt="agr" />
                  <span onClick={as} className={` ${styles["spanp"]}`}>
                    {" "}
                    Transfer{" "}
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={plus}
                    alt="agr"
                  />{" "}
                  <span className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={people}
                    alt="agr"
                  />{" "}
                  <span className={` ${styles["spanp"]}`}>Profile </span>
                </p>
                <p className={` ${styles["p3"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={logout}
                    alt="agr"
                  />{" "}
                  <span className={` ${styles["spanp"]}`}>Logout </span>
                </p>
              </div>
            </div>

            <div className={`container ${styles["trans-wrap"]}`}>
              <p className={` ${styles["trans"]}`}>Transaction History</p>

              {dataHistory &&
                dataHistory.map((user) => {
                  // console.log(user.firstName)
                  return (
                    <UsersHistory
                      name={`${user.firstName} ${user.lastName}`}
                      status={user.status}
                      amount={user.amount}
                      type={user.type}
                      key={user.id}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <section>
        <div className="container">
          <div className={`row ${styles["row-end"]}`}>
            <div className={`col ${styles["row-end1"]}`}>
              2020 FazzPay. All right reserved.
            </div>
            <div className={`col-6 ${styles["row-end2"]}`}>
              +62 5637 8882 9901{" "}
            </div>
            <div className={`col ${styles["row-end3"]}`}>
              contact@fazzpay.com
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default History;
