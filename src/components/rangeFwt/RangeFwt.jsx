import { Range } from "fwt-internship-uikit";
import "./RangeFwt.scss";

function RangeFwt(props) {
  return (
    <div className="range__wrap">
      <Range placeholder={props.placeholder} className={Range} />
    </div>
  );
}
export default RangeFwt;
