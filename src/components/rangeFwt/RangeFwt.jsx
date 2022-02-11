import { Range } from "fwt-internship-uikit";
import "./RangeFwt.scss";

function RangeFwt(props) {
  return (
    <div className="range__wrap">
      <Range value={props.value} className="range">
        <form className="range__form form" action="">
          <input className="form__input" placeholder="from" type="number" />
          <span className="form__span"></span>
          <input className="form__input" placeholder="before" type="number" />
        </form>
      </Range>
    </div>
  );
}
export default RangeFwt;
