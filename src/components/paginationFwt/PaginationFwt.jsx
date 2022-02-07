import { Pagination } from "fwt-internship-uikit";
import "./PaginationFwt.scss";

function PaginationFwt() {
  return (
    <Pagination
      className={"pagination"}
      pagesAmount={3}
      currentPage={1}
      onChange={(x) => x}
    />
  );
}
export default PaginationFwt;
