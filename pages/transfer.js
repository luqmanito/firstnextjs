import React, { Fragment, useEffect, useState } from "react";
import { setDetails } from "../redux/reducers/userTransferSlice";
import styles from "../styles/transfer.module.scss";
import Image from "next/image";
import grid1 from "../public/asset/grid1.png";
import up1 from "../public/asset/up1.png";
import plus from "../public/asset/plus.png";
import logout from "../public/asset/logout.png";
import people from "../public/asset/people.png";
import man2 from "../public/asset/man2.png";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { debounce } from "../helper/debounce";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getUsers } from "./api/utils";
import Users from "../components/usersTransfer/[id]";
import PinConfirm from "../components/topUp/topup";
import { setIsLoading } from "../redux/reducers/isLoadingSlice";
import IsLoading from "../components/isLoading/isLoading";

const Transfer = () => {
  const { token } = useSelector((state) => state.regSlice);
  const router = useRouter();
  const dispatch = useDispatch();
  const [userTransfer, setuserTransfer] = useState(null);
  const [searchProduct, setSearchProduct] = useState("");
  const [open, setOpen] = useState(false);

  const { isLoading } = useSelector((state) => state.isLoadingSlice);
  console.log(isLoading);

  const updateChange = (e) => setSearchProduct(e.target.value);
  const handleLogout = async () => {
    setOpen(!open);
  };

  const getAllUser = debounce(async () => {
    try {
      const result = await getUsers(token);
      dispatch(setDetails({ details: result.data.data }));
      // dispatch(setIsLoading({ isLoading: false }));
      // console.log(isLoading);
    } catch (error) {
      console.log(error);
    }
  }, 1500);

  const { details } = useSelector((state) => state.userTransferSlice);

  useEffect(() => {
    // dispatch(setIsLoading({ isLoading: true }));
    getAllUser();
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
                  <span
                    onClick={handleLogout}
                    className={` ${styles["spanp"]}`}
                  >
                    Top Up{" "}
                  </span>
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
                    <p className={` ${styles["trans"]}`}> Search Receiver</p>
                    <input
                      onChange={debounce(updateChange, 2000)}
                      className={` ${styles["search"]}`}
                      type="text"
                      placeholder="🔎︎ Search receiver here"
                    />
                    <div className={` ${styles["wr-wr"]}`}>
                      {/* {
                      da && da.map((user) => {
                        return (
                          <Users
                            name={`${user.firstName} ${user.lastName}`}
                            phone={user.noTelp}
                            image={user.image}
                            id={user.id}
                            
                          />
                        )
                      })
                      } */}

                      {/* <div className={` ${styles["main-menu"]}`}> */}
                      {da &&
                        da
                          .filter((user) => {
                            if (searchProduct === "") {
                              return user;
                            } else if (
                              user.firstName
                                .toLowerCase()
                                .includes(searchProduct.toLowerCase())
                            ) {
                              return user;
                            }
                          })
                          .map((user) => {
                            return (
                              <Users
                                name={`${user.firstName} ${user.lastName}`}
                                phone={user.noTelp}
                                image={user.image}
                                id={user.id}
                                key={user.id}
                              />
                            );
                          })}
                      {/* </div> :   */}
                    </div>
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
      <PinConfirm
        open={open}
        setOpen={setOpen}
        title="Log out"
        body="Do you really want to log out?"
        token={token}
      />
    </>
  );
};

export default Transfer;
