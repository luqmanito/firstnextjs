import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/confirmation.module.scss";
import Image from "next/image";
import grid1 from "../../public/asset/grid1.png";
import up1 from "../../public/asset/up1.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import man2 from "../../public/asset/man2.png";
import EnterPin from "../components/enterpin/enterPin";
import { useSelector, useDispatch } from "react-redux";
import UsersDetail from "../components/detail-user/detail-user";
import { getProfile } from "./api/utils";
import { useRouter } from "next/router";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import PageTitle from "../components/page-tittle/pageTittle";

const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const { confirm } = useSelector((state) => state.confirmSlice);
  const { details } = useSelector((state) => state.userTransferSlice);
  const [userData, setUserData] = useState("name");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState('-');
  const [isPwdShown, setIsPwdShown] = useState(false);
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState(null);

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const date = new Date();
  
  const getDataProfile = async () => {
    try {
      const result = await getProfile(user_id, token);
      setBalance(result.data.data.balance);
    } catch (error) {
      console.log(error);
    }
  };
  const router = useRouter();
  const nav2 = () => {
    router.push("/success");
  };

  const handleLogout = async () => {
    setOpen(!open);
  };
  console.log(userData);
  useEffect(() => {
    setUserData(details.details);
    setAmount(confirm.confirm.amount)
    setNotes(confirm.confirm.notes)
    getDataProfile();
  }, []);

  return (
    <>
     <PageTitle title="Confirmation" />
      <Header />

      <section className={`${styles["section-main"]}`}>
        <div className={`container ${styles["section-sub"]}`}>
          <div className={`row ${styles["section-row"]}`}>
            <div className={`col-4 ${styles["section-col"]}`}>
              <div className={`${styles["list-main"]}`}>
                <p className={` ${styles["p1"]}`}>
                  {" "}
                  <Image
                    className={` ${styles["menu"]}`}
                    src={grid1}
                    alt="gbr"
                  />
                  <span onClick={nav2} className={` ${styles["spanpD"]}`}>
                    Dashboard
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image className={` ${styles["menu"]}`} src={up1} alt="gbr" />
                  <span className={` ${styles["spanpt"]}`}>
                    <b>Transfer</b>
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={plus}
                    alt="gbr"
                  />{" "}
                  <span className={` ${styles["spanp"]}`}>Top Up </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={people}
                    alt="gbr"
                  />{" "}
                  <span className={` ${styles["spanp"]}`}>Profile </span>
                </p>
                <p className={` ${styles["p3"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={logout}
                    alt="gbr"
                  />{" "}
                  <span className={` ${styles["spanp"]}`}>Logout </span>
                </p>
              </div>
            </div>
            <div className={`col-8 ${styles["colcol"]}`}>
              <div className={`container ${styles["trans-wrap"]}`}>
                <div 
                className={`row ${styles["col-main"]}`}
                // className="row"
                >
                  <div 
                  className={`col ${styles["col-main"]}`}
                  // className="col"
                  >
                    <p className={` ${styles["trans"]}`}> Transfer To</p>
                    <div className={` ${styles["wr-wr"]}`}>
                      {/* <div className={` ${styles["wr-img"]}`}>
                        <Image className={` ${styles["man2"]}`} src={man2} />{" "}
                        <span className={` ${styles["suhi"]}`}>
                          Samuel Suhi
                        </span>{" "}
                        <p className={` ${styles["acc2"]}`}>
                          +62 813-8492-9994
                        </p>
                      </div> */}
                      <UsersDetail
                        name={`${userData.firstName} ${userData.lastName}`}
                        phone={userData.noTelp}
                      />
                      <p className={` ${styles["trans"]}`}> Details</p>
                      <div className={` ${styles["wr-img"]}`}>
                        {/* <Image className={` ${styles["man2"]}`} src={man2} />{" "} */}
                        <span className={` ${styles["susi"]}`}>Amount</span>{" "}
                        <p className={` ${styles["acc3"]}`}>
                          {rupiah(amount)}
                        </p>
                      </div>
                      <div className={` ${styles["wr-img"]}`}>
                        {/* <Image className={` ${styles["man2"]}`} src={man2} />{" "} */}
                        <span className={` ${styles["susi"]}`}>
                          Balance Left
                        </span>{" "}
                        <p className={` ${styles["acc3"]}`}>{rupiah(balance)}</p>
                      </div>
                      <div className={` ${styles["wr-img"]}`}>
                        {/* <Image className={` ${styles["man2"]}`} src={man2} />{" "} */}
                        <span className={` ${styles["susi"]}`}>
                          Date & Time
                        </span>{" "}
                        <p className={` ${styles["acc3"]}`}>
                          {date.toLocaleString()}
                        </p>
                      </div>
                      <div className={` ${styles["wr-img"]}`}>
                        {/* <Image className={` ${styles["man2"]}`} src={man2} />{" "} */}
                        <span className={` ${styles["susi"]}`}>Notes</span>{" "}
                        <p className={` ${styles["acc3"]}`}>
                          {notes}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className={`${styles["conti"]}`}
                  >
                    Continue
                  </button>
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
      </section>
      <EnterPin
        open={open}
        setOpen={setOpen}
        title="Log out"
        body="Do you really want to log out?"
        confirm={confirm.confirm}
      />
      <Footer />
    </>
  );
};

export default ConfirmationPage;
