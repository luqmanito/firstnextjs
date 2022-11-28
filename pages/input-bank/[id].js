import React, { Fragment, useEffect, useState } from "react";
import { setDetails } from "../../redux/reducers/userTransferSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import styles from "../../styles/input-bank.module.scss";
import Image from "next/image";
import grid1 from "../../public/asset/grid1.png";
import up1 from "../../public/asset/up1.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import {setConfirm} from "../../redux/reducers/confirmSlice"
import { debounce } from "../../helper/debounce";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getProfile, getProfile2, getUsers, transferBalance } from "../api/utils";
import man2 from "../../public/asset/man2.png";
import Users from "../../components/usersTransfer/[id]";
import UsersDetail from "../../components/detail-user/detail-user";

const Transfer = () => {
  const { token } = useSelector((state) => state.regSlice);
  const { user_id } = useSelector((state) => state.regSlice);
  const [balance, setBalance] = useState(null);
 
  const router = useRouter();
  const dispatch = useDispatch();

 
  const { id } = router.query;
  const [body, setBody] = useState({
    receiverId : id,
    amount : null,
    notes : null
  });
  const changeHandler1 = (e) =>
  setBody({ ...body, [e.target.name]: Number(e.target.value) });
  console.log(body);

  const changeHandler2 = (e) =>
  setBody({ ...body, [e.target.name]: e.target.value });
  console.log(body);


  const getDataUser = debounce(async () => {
    try {
      const result = await getProfile2(id, token);
      dispatch(setDetails({ details: result.data.data }));
    } catch (error) {
      console.log(error);
    }
  }, 1500);

  const getDataProfile = async () => {
    try {
      const result = await getProfile(user_id, token);
      setBalance(result.data.data.balance);
    } catch (error) {
      console.log(error);
    }
  };


  const submitHandler = async () => {
    try {
      const result = await transferBalance(body, token);
        toast.success("Please wait..", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const nav1 = () => {
    dispatch(setConfirm({ confirm: body }))
    router.push(`/confirmation/`);
  };


  const { details } = useSelector((state) => state.userTransferSlice);

  useEffect(() => {
    getDataUser();
    getDataProfile();
  }, []);
  let da = details.details;
  console.log(da);


  return (
    <>
      <Header />
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
                  <div class="col">
                    <p className={` ${styles["trans"]}`}> Transfer Money</p>
                    <div className={` ${styles["wr-wr"]}`}>
                      <UsersDetail
                        name={`${da.firstName} ${da.lastName}`}
                        phone={da.noTelp}
                      />
                    </div>
                    <p className={` ${styles["textam"]}`}>
                      Type the amount you want to transfer and then <br />
                      press continue to the next steps.
                    </p>
                    <div className={` ${styles["center-bank"]}`}>
                      <input
                       onChange={changeHandler1}
                        className={` ${styles["inp-bank"]}`}
                        type="number"
                        placeholder="0"
                        name="amount"
                      />
                      <p className={` ${styles["inp-idr"]}`}>
                        Rp{balance} Available
                      </p>
                      <input
                       onChange={changeHandler2}
                        className={` ${styles["inp-note"]}`}
                        type="text"
                        placeholder="✎ Add some notes"
                        name="notes"
                      />
                      {/* <input  onChange={changeHandler} 
                      type="text"
                      name="receiverId"
                      value={id} /> */}
                    </div>
                    <button onClick={nav1} className={` ${styles["btn-cnt"]}`}>
                      Continue
                    </button>
                    <ToastContainer />
                  </div>
                  <div className={`col-6 ${styles["transe"]}`}>
                    {" "}
                    <p></p>
                  </div>
                  <div class="col">
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
      <Footer />
    </>
  );
};

export default Transfer;
