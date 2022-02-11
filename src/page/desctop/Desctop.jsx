import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import s from "./Desctop.module.scss";
import InputFwt from "../../components/inputFwt/InputFwt";
import SelectFwt from "../../components/selectFwt/SelectFwt";
import PaginationFwt from "../../components/paginationFwt/PaginationFwt";
import RangeFwt from "../../components/rangeFwt/RangeFwt";
import { Pagination } from "fwt-internship-uikit";

/* import cardPic1 from "../../assets/images/card/pic.png";
import cardPic2 from "../../assets/images/card/pic2.png";
import cardPic3 from "../../assets/images/card/pic3.png";
import cardPic4 from "../../assets/images/card/pic4.png";
import cardPic5 from "../../assets/images/card/pic5.png";
import cardPic6 from "../../assets/images/card/pic6.png";
import cardPic7 from "../../assets/images/card/pic7.png";
import cardPic8 from "../../assets/images/card/pic8.png";
import cardPic9 from "../../assets/images/card/pic9.png"; */
import axios from "axios";

function Desctop() {
  const [paintings, setPaintings] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const optionsAuthor = [
    { id: 1, name: "Salvador dali" },
    { id: 2, name: "Vincent van gogh" },
    { id: 3, name: "Claude monet" },
    { id: 4, name: "Victor vasnetsov" },
    { id: 5, name: "Salvador dali" },
    { id: 6, name: "Vincent van gogh" },
    { id: 7, name: "Claude monet" },
  ];
  const optionsLocation = [
    { id: 1, name: "The Tate Gallery" },
    { id: 2, name: "Santa Maria delle Grazie" },
    { id: 3, name: "Santa Maria delle Grazie" },
    { id: 4, name: "Santa Maria delle Grazie" },
    { id: 5, name: "The Tate Gallery" },
    { id: 6, name: "The Tate Gallery" },
    { id: 7, name: "The Tate Gallery" },
  ];

  const url = "https://test-front.framework.team";

  async function fetchHandler() {
    try {
      const paintingsRes = await axios.get(
        url + `/paintings?_page=${currentPage}&_limit=9`
      );
      const authorsRes = await axios.get(url + "/authors");
      const locationsRes = await axios.get(url + "/locations");
      const data = paintingsRes.data.map((p) => {
        const authorName =
          authorsRes.data.find((a) => a.id === p.authorId)?.name || "noname";
        const locationName =
          locationsRes.data.find((l) => l.id === p.locationId)?.location ||
          "no-location";
        return { ...p, authorName, locationName, imageUrl: url + p.imageUrl };
      });
      setPaintings(data);
      setTotalAmount(data.length);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchHandler();
  }, [currentPage]);

  if (!paintings) return <div>loading..</div>;

  return (
    <div className={s.container}>
      <div className={s.desctop}>
        <Header />
        <div className={s.innerFilter}>
          <ul className={s.filterList}>
            <li className={s.filterItem}>
              <InputFwt placeholder={"Name"} />
            </li>
            <li className={s.filterItem}>
              <SelectFwt placeholder={"Author"} options={optionsAuthor} />
            </li>
            <li className={s.filterItem}>
              <SelectFwt placeholder={"Location"} options={optionsLocation} />
            </li>
            <li className={s.filterItem}>
              <RangeFwt value={"Author"} />
            </li>
          </ul>
        </div>

        <div className={s.gallery__card}>
          {paintings.map((p) => (
            <Card
              key={p.id}
              cardAlt={p.name}
              titleCard={p.name}
              cardPic={p.imageUrl}
              author={p.authorName}
              created={p.created}
              location={p.locationName}
            />
          ))}
        </div>
        <Pagination
          className={"pagination"}
          pagesAmount={totalAmount}
          currentPage={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Desctop;
