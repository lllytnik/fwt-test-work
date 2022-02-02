import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import s from "./Desctop.module.scss";
import { Select } from "fwt-internship-uikit";

function Desctop() {
  return (
    <div className={s.container}>
      <div className={s.desctop}>
        <Header />
        <Select />
        <div className={s.gallery__card}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Desctop;
