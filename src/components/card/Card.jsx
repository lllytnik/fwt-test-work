import s from "./Card.module.scss";

function Card(props) {
  return (
    <article className={s.card}>
      <img className={s.cardImg} src={props.cardPic} alt={props.card} />
      <div className={s.content}>
        <h2 className={s.cardTitle}>{props.titleCard}</h2>
        <div className={s.cardDescription}>
          <ul class={s.info}>
            <li class={s.infoItem}>
              <span class={s.infoItemActive}>Author:</span> {props.author}
            </li>
            <li class={s.infoItem}>
              <span class={s.infoItemActive}>Created:</span> {props.created}
            </li>
            <li class={s.infoItem}>
              <span class={s.infoItemActive}>Location:</span> {props.location}
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
export default Card;
