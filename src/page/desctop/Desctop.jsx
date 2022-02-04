import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import CustomSelect from "../../components/select/CustomSelect";
import s from "./Desctop.module.scss";
import Input from "../../components/input/Input";
import { Pagination } from "fwt-internship-uikit";

import cardPic1 from "../../assets/images/card/pic.png";
import cardPic2 from "../../assets/images/card/pic2.png";
import cardPic3 from "../../assets/images/card/pic3.png";
import cardPic4 from "../../assets/images/card/pic4.png";
import cardPic5 from "../../assets/images/card/pic5.png";
import cardPic6 from "../../assets/images/card/pic6.png";
import cardPic7 from "../../assets/images/card/pic7.png";
import cardPic8 from "../../assets/images/card/pic8.png";
import cardPic9 from "../../assets/images/card/pic9.png";

function Desctop() {
  const options = [
    { value: "Salvador dali", label: "Salvador dali" },
    { value: "Vincent van gogh", label: "Vincent van gogh" },
    { value: "Claude monet", label: "Claude monet" },
    { value: "Victor vasnetsov", label: " Victor vasnetsov" },
    { value: "Salvador dali", label: "Salvador dali" },
    { value: "Vincent van gogh", label: "Vincent van gogh" },
    { value: "Claude monet", label: "Claude monet" },
  ];
  const options1 = [
    { value: "The Tate Gallery ", label: "The Tate Gallery" },
    { value: "Santa Maria delle Grazie", label: "Santa Maria delle Grazie" },
    { value: "Santa Maria delle Grazie", label: "Santa Maria delle Grazie" },
    { value: "Santa Maria delle Grazie", label: "Santa Maria delle Grazie" },
    { value: "The Tate Gallery", label: "The Tate Gallery" },
    { value: "The Tate Gallery", label: "The Tate Gallery" },
    { value: "The Tate Gallery", label: "The Tate Gallery" },
  ];
  return (
    <div className={s.container}>
      <div className={s.desctop}>
        <Header />
        <div className={s.innerFilter}>
          <Input />
          <CustomSelect options={options} placeholder="Author" />
          <CustomSelect options={options1} placeholder="Location" />
          <CustomSelect placeholder="Created" />
        </div>

        <div className={s.gallery__card}>
          <Card
            cardAlt={"The Persistence of Memory"}
            titleCard={"The Persistence of Memory"}
            cardPic={cardPic1}
          />
          <Card
            cardAlt={"The Starry Night"}
            titleCard={"The Starry Night"}
            cardPic={cardPic2}
          />
          <Card
            cardAlt={"The Flying Carpet"}
            titleCard={"The Flying Carpet"}
            cardPic={cardPic3}
          />
          <Card
            cardAlt={"Impression, Sunrise"}
            titleCard={"Impression, Sunrise"}
            cardPic={cardPic4}
          />
          <Card
            cardAlt={"The Night Watch"}
            titleCard={"The Night Watch"}
            cardPic={cardPic5}
          />
          <Card
            cardAlt={"Mont Sainte-Victoire"}
            titleCard={"Mont Sainte-Victoire"}
            cardPic={cardPic6}
          />
          <Card
            cardAlt={"Still Life with Compote and Glass"}
            titleCard={"Still Life with Compote and Glass"}
            cardPic={cardPic7}
          />
          <Card
            cardAlt={"Arrangement in Grey and Black"}
            titleCard={"Arrangement in Grey and Black"}
            cardPic={cardPic8}
          />

          <Card
            cardAlt={"The Last Supper"}
            titleCard={"The Last Supper"}
            cardPic={cardPic9}
          />
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Desctop;
