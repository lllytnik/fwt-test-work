import BtnTheme from "../btnTheme/BtnTheme";
import "./Card.css";
import pic1 from "../../assets/images/card/pic.png";

function Card() {
  return (
    <article class="card">
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
    </article>
  );
}
export default Card;
