import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import CustomSelect from "../../components/customSelect/CustomSelect";
import s from "./Desctop.module.scss";
import InputFwt from "../../components/inputFwt/InputFwt";
import SelectFwt from "../../components/selectFwt/SelectFwt";

import cardPic1 from "../../assets/images/card/pic.png";
import cardPic2 from "../../assets/images/card/pic2.png";
import cardPic3 from "../../assets/images/card/pic3.png";
import cardPic4 from "../../assets/images/card/pic4.png";
import cardPic5 from "../../assets/images/card/pic5.png";
import cardPic6 from "../../assets/images/card/pic6.png";
import cardPic7 from "../../assets/images/card/pic7.png";
import cardPic8 from "../../assets/images/card/pic8.png";
import cardPic9 from "../../assets/images/card/pic9.png";
import PaginationFwt from "../../components/paginationFwt/PaginationFwt";
import RangeFwt from "../../components/rangeFwt/RangeFwt";

function Desctop() {
  const options = [
    { id: 1, name: "Salvador dali" },
    { id: 2, name: "Vincent van gogh" },
    { id: 3, name: "Claude monet" },
    { id: 4, name: "Victor vasnetsov" },
    { id: 5, name: "Salvador dali" },
    { id: 6, name: "Vincent van gogh" },
    { id: 7, name: "Claude monet" },
  ];
  const options2 = [
    { id: 1, name: "The Tate Gallery" },
    { id: 2, name: "Santa Maria delle Grazie" },
    { id: 3, name: "Santa Maria delle Grazie" },
    { id: 4, name: "Santa Maria delle Grazie" },
    { id: 5, name: "The Tate Gallery" },
    { id: 6, name: "The Tate Gallery" },
    { id: 7, name: "The Tate Gallery" },
  ];

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
              <SelectFwt placeholder={"Author"} options={options} />
            </li>
            <li className={s.filterItem}>
              {" "}
              <SelectFwt placeholder={"Location"} options={options2} />
            </li>
            <li className={s.filterItem}>
              {" "}
              <RangeFwt />
            </li>
          </ul>

          {/* <SelectFwt placeholder="Created" /> */}

          {/* <CustomSelect options={options} placeholder="Author" /> */}
          {/* <CustomSelect options={options2} placeholder="Location" /> */}
          {/* <CustomSelect placeholder="Created" /> */}
        </div>

        <div className={s.gallery__card}>
          <Card
            cardAlt={"The Persistence of Memory"}
            titleCard={"The Persistence of Memory"}
            cardPic={cardPic1}
            author={"Rembrandt"}
            created={"1642"}
            location={"The Rijksmuseum"}
          />
          <Card
            cardAlt={"The Starry Night"}
            titleCard={"The Starry Night"}
            cardPic={cardPic2}
            author={"Vincent van Gogh"}
            created={"1889"}
            location={"Museum of Modern Art"}
          />
          <Card
            cardAlt={"The Flying Carpet"}
            titleCard={"The Flying Carpet"}
            cardPic={cardPic3}
            author={"Viktor Mikhailovich Vasnetsov"}
            created={"1880"}
            location={"Museum"}
          />
          <Card
            cardAlt={"Impression, Sunrise"}
            titleCard={"Impression, Sunrise"}
            cardPic={cardPic4}
            author={"Claude Monet"}
            created={"1872"}
            location={"Musée Marmottan Monet"}
          />
          <Card
            cardAlt={"The Night Watch"}
            titleCard={"The Night Watch"}
            cardPic={cardPic5}
            author={"Rembrandt van Rijn"}
            created={"1642"}
            location={"Amsterdam Museum"}
          />
          <Card
            cardAlt={"Mont Sainte-Victoire"}
            titleCard={"Mont Sainte-Victoire"}
            cardPic={cardPic6}
            author={"Paul Cézanne"}
            created={"1904"}
            location={"Musée d'Orsay"}
          />
          <Card
            cardAlt={"Still Life with Compote and Glass"}
            titleCard={"Still Life with Compote and Glass"}
            cardPic={cardPic7}
            author={"Pablo Picasso"}
            created={"1914"}
            location={"Columbus Museum of Art"}
          />
          <Card
            cardAlt={"Arrangement in Grey and Black"}
            titleCard={"Arrangement in Grey and Black"}
            cardPic={cardPic8}
            author={"James McNeill Whistler"}
            created={"1871"}
            location={"Musée d'Orsay"}
          />

          <Card
            cardAlt={"The Last Supper"}
            titleCard={"The Last Supper"}
            cardPic={cardPic9}
            author={"Leonardo da Vinci"}
            created={"1495"}
            location={"Santa Maria delle Grazie"}
          />
        </div>
        <PaginationFwt />
      </div>
    </div>
  );
}

export default Desctop;
