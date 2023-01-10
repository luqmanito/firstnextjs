import React, { Fragment, useEffect, useState } from "react";
import styles from "../styles/success.module.scss";
import Image from "next/image";
import grid1 from "../../public/asset/grid1.png";
import up1 from "../../public/asset/up1.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import man2 from "../../public/asset/man2.png";
import check from "../../public/asset/check.png";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "./api/utils";
import UsersDetail from "../components/detail-user/detail-user";
import { jsPDF } from "jspdf";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useRouter } from "next/router";

const SuccessPage = () => {
  const { user_id } = useSelector((state) => state.regSlice);
  const { token } = useSelector((state) => state.regSlice);
  const { confirm } = useSelector((state) => state.confirmSlice);
  const [balance, setBalance] = useState(null);
  const [phone, setPhone] = useState(null);
  const date = new Date();
  const { details } = useSelector((state) => state.userTransferSlice);
  let da = details.details;

  const [content, setContent] = useState({
    // receiverId: confirm.confirm.id,
    amount: null,
    notes: null,
  });

  const nav1 = () => {
    router.push("/dashboard");
  };

  const getDataProfile = async () => {
    try {
      const result = await getProfile(user_id, token);
      setBalance(result.data.data.balance);
    } catch (error) {
      console.log(error);
    }
  };
  const router = useRouter();
  const downloadPdf = () => {
    const doc = new jsPDF();

    doc.text(
  
      `Transaction Status = Success 
To = ${da.firstName} ${da.lastName} (${da.noTelp})
Amount = Rp.${content.amount}
Balance Left = Rp.${balance}
Transaction Time = ${date.toLocaleString()}
Notes = ${content.notes}`, 10, 10
      
      );
    doc.save("a4.pdf");
  };

  useEffect(() => {
    getDataProfile();
    setContent(confirm.confirm);
  }, []);

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
                  <Image className={` ${styles["menu"]}`} src={grid1} alt="gbr"/>
                  <span onClick={nav1} className={` ${styles["spanpD"]}`}>Dashboard</span>
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
                  <div className="col">
                    <Image className={` ${styles["check-img"]}`} src={check} alt="gbr"/>
                    <p className={` ${styles["trans"]}`}> Transfer Success</p>
                    <div className={` ${styles["wr-wr"]}`}>
                      {/* <p className={` ${styles["trans"]}`}> Details</p> */}
                      <div className={` ${styles["wr-img"]}`}>
                        {/* <Image className={` ${styles["man2"]}`} src={man2} />{" "} */}
                        <span className={` ${styles["susi"]}`}>Amount</span>{" "}
                        <p className={` ${styles["acc3"]}`}>
                          Rp{content.amount}
                        </p>
                      </div>
                      <div className={` ${styles["wr-img"]}`}>
                        {/* <Image className={` ${styles["man2"]}`} src={man2} />{" "} */}
                        <span className={` ${styles["susi"]}`}>
                          Balance Left
                        </span>{" "}
                        <p className={` ${styles["acc3"]}`}>Rp{balance}</p>
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
                        <p className={` ${styles["acc3"]}`}>{content.notes}</p>
                      </div>
                      <p className={` ${styles["transto"]}`}> Transfer to</p>
                      <UsersDetail
                        name={`${da.firstName} ${da.lastName}`}
                        phone={da.noTelp}
                      />
                    
                    </div>
                  </div>
                  <button onClick={downloadPdf} className={`${styles["contu"]}`}>Download PDF</button>
                  <button onClick={nav1} className={`${styles["conti"]}`}>Continue</button>
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
      <Footer/>
    </>
  );
};

export default SuccessPage;
