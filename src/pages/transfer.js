import React, { Fragment, useEffect, useState } from "react";
import { setDetails } from "../redux/reducers/userTransferSlice";
import styles from "../styles/transfer.module.scss";
import Image from "next/image";
import grid1 from "../../public/asset/grid1.png";
import up1 from "../../public/asset/up1.png";
import plus from "../../public/asset/plus.png";
import logout from "../../public/asset/logout.png";
import people from "../../public/asset/people.png";
import man2 from "../../public/asset/man2.png";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { debounce } from "../helper/debounce";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Router from "next/router";
import { getUsers } from "./api/utils";
import Users from "../components/usersTransfer/[id]";
import PinConfirm from "../components/topUp/topup";
import { setIsLoading } from "../redux/reducers/isLoadingSlice";
import IsLoading from "../components/isLoading/isLoading";
import Cookies from "js-cookie";
import axios from "axios";

const Transfer = () => {
  const { details } = useSelector((state) => state.userTransferSlice);
  const { token } = useSelector((state) => state.regSlice);
  // const router = useRouter();
  const dispatch = useDispatch();
  // const getQuery = useQuery();
  const [searchProduct, setSearchProduct] = useState("");
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  // const [param, setParam] = useState({
  //   search: getQuery.get("search") ?? "",
  //   sort: getQuery.get("sort") ?? "",
  //   filter: getQuery.get("filter") ?? "",
  //   page: getQuery.get("page") ?? 1,
  // });
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
      // setuserTransfer(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }, 1000);

  const urlParam = () => {
    Router.push({
      pathname: "/transfer",
      query: { search: searchProduct },
    });
  };

  const [userData, setUserData] = useState();
  const [pageIndex, setPageIndex] = useState(1);
  const router = useRouter();
  const nav1 = () => {
    router.push("/dashboard");
  };
  const nav2 = () => {
    router.push("/profile");
  };
  const onHandlePlus = () => {
    const add = Number(counter) + 1;
    setCounter(add);
    const tempCount = pageIndex + 1;
    setPageIndex(tempCount);
  };

  const onHandleMin = () => {
    let min = Number(counter) - 1;
    const tempCount = pageIndex - 1;
    setPageIndex(tempCount);
    if (counter === 1) {
      setCounter(1);
    } else {
      setCounter(min);
    }
  };
  // console.log(counter);

  const dataUsers = userData ? userData.length : 0;
  // console.log(dataUsers);
  const pageSize = 3;
  let page = pageIndex;
  let totalPages = Math.ceil(dataUsers / pageSize);
  console.log(page, totalPages);
  const pageData = Array.isArray(userData)
    ? userData.slice(page * pageSize - pageSize, page * pageSize)
    : [];

  console.log(pageData);
  const baseUrl = process.env.CLOUDINARY_LINK_HOST_KEY;
  const link = "https://res.cloudinary.com/dd1uwz8eu/image/upload/v1666604839/";

  useEffect(() => {
    // userTransfer(details.details)
    setUserData(details.details);
    getAllUser();
  }, []);

  useEffect(() => {
    if (searchProduct !== "") {
      Router.push(`/transfer?search=${searchProduct}`);
    }
    if (searchProduct.length === 0) Router.push(`/transfer`);
  }, [searchProduct]);

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
                  <Image
                    className={` ${styles["menu"]}`}
                    src={grid1}
                    alt="gbr"
                  />
                  <span 
                  onClick={nav1}
                  className={` ${styles["spanpD"]}`}>Dashboard</span>
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
                  <span
                    onClick={handleLogout}
                    className={` ${styles["spanp"]}`}
                  >
                    Top Up{" "}
                  </span>
                </p>
                <p className={` ${styles["p2"]}`}>
                  <Image
                    className={` ${styles["menu"]}`}
                    src={people}
                    alt="gbr"
                  />{" "}
                  <span 
                  onClick={nav2}
                  className={` ${styles["spanp"]}`}>Profile </span>
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
            <div 
            className={`col-8 ${styles["main-wrap"]}`}
            >
              <div className={`container ${styles["trans-wrap"]}`}>
                <div className="row">
                  <div className="col">
                    <p className={` ${styles["trans"]}`}> Search Receiver</p>
                    <div
                    className={`container ${styles["search-wrap"]}`}
                    >
                    <input
                      onChange={debounce(updateChange, 2000)}
                      className={` ${styles["search"]}`}
                      type="text"
                      placeholder="🔎︎ Search receiver here"
                    />
                    </div>
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
                      {searchProduct === ""
                        ? pageData &&
                          pageData
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
                            })
                        : userData &&
                          userData
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
                  <div className="col">
                    <button className={`${styles["filter"]}`}>
                      -- Select Filter --
                    </button>
                  </div>
                  <div className={`${styles["pagination"]}`}>
                    <button
                      onClick={onHandlePlus}
                      className={
                        counter === totalPages
                          ? `${styles["next1"]}`
                          : `${styles["next"]}`
                      }
                      disabled={pageIndex === totalPages ? true : false}
                    >
                      Next
                    </button>
                    <button
                      disabled={counter === 1 ? true : false}
                      onClick={onHandleMin}
                      className={
                        counter === 1
                          ? `${styles["prev1"]}`
                          : `${styles["prev"]}`
                      }
                    >
                      Prev
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
