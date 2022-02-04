import BtnTheme from "../btnTheme/BtnTheme";
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
              <span class={s.infoItemActive}>Author:</span> Rembrandt
            </li>
            <li class={s.infoItem}>
              <span class={s.infoItemActive}>Created:</span> 1642
            </li>
            <li class={s.infoItem}>
              <span class={s.infoItemActive}>Location:</span> The Rijksmuseum
            </li>
          </ul>
        </div>
      </div>
    </article>

    /* <article class="card">
      <div class="card__thumb">
        <img src={pic1} />
      </div>
      <div class="card__wrap">
        <h2 class="card__title">The Persistence of Memory</h2>
        <ul class="card__description info">
          <li class="info__item">
            <span class="info__item-active">Author:</span> Rembrandt
          </li>
          <li class="info__item">
            <span class="info__item-active">Created:</span> 1642
          </li>
          <li class="info__item">
            <span class="info__item-active">Location:</span> The Rijksmuseum
          </li>
        </ul>
      </div>
    </article> */
  );
}
export default Card;
