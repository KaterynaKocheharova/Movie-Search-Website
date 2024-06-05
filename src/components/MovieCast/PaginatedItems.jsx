import { useState } from "react";
import MovieCastList from "../MovieCastList/MovieCastList";
import ReactPaginate from "react-paginate";
import MovieCast from "./MovieCast";

export default function PaginatedItems({ itemsPerPage, castData }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = castData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(castData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % castData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <MovieCastList currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
