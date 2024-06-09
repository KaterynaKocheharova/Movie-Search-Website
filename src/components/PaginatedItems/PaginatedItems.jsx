import { useState } from "react";
import ReactPaginate from "react-paginate";
import css from "./PaginatedItems.module.css";

export default function PaginatedItems({
  itemsPerPage,
  data,
  RenderComponent,
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <RenderComponent currentItems={currentItems} />
      {data.length > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          containerClassName={css["pagination-list"]}
          pageClassName={css["pagination-item"]}
          pageLinkClassName={css["page-link"]}
          activeClassName={css["active-pagination-item"]}
          activeLinkClassName={css["active-pagination-link"]}
          previousClassName={css["previous-button"]}
          nextClassName={css["next-button"]}
          previousLinkClassName={css["prev-link"]}
          nextLinkClassName={css["next-link"]}
          disabledClassName={css["disabled-btn"]}
          disabledLinkClassName={css["disabled-link"]}
        />
      )}
    </>
  );
}
