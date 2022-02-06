import { Pagination } from "fwt-internship-uikit";
import s from "./PaginationFwt.module.scss";

function PaginationFwt() {
  return (
    <div>
      <Pagination
        className={s.PaginationPage}
        pagesAmount={3}
        currentPage={1}
        onChange={(x) => x}
      />
    </div>
  );
}
export default PaginationFwt;
