import s from "./Card.module.scss";

function Card(props) {
  return (
    <article className={s.card}>
      <img
        className={s.cardImg}
        src={props.cardPic}
        alt={props.card}
        onError={(e) => {
          /* e.currentTarget.src = "/images/nonePic.png"; */
          e.currentTarget.src = "../../assets/images/card/nonePic.png";
        }}
      />
      <div className={s.content}>
        <h2 className={s.cardTitle}>{props.titleCard}</h2>
        <div className={s.cardDescription}>
          <ul className={s.info}>
            <li className={s.infoItem}>
              <span className={s.infoItemActive}>Author:</span> {props.author}
            </li>
            <li className={s.infoItem}>
              <span className={s.infoItemActive}>Created:</span> {props.created}
            </li>
            <li className={s.infoItem}>
              <span className={s.infoItemActive}>Location:</span>{" "}
              {props.location}
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
export default Card;
