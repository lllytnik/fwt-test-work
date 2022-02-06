import { Select } from "fwt-internship-uikit";
import "./SelectFwt.scss";

function SelectFwt(props) {
  return (
    <div className="select__wrap">
      <Select
        className={Select}
        disabled={false}
        options={props.options}
        value={props.placeholder}
        onChange={(x) => x}
      />
    </div>
  );
}
export default SelectFwt;
