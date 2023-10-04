import React from 'react';
import './pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {currentPage > 1 && <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>}
      {pageNumbers.slice(0, 10).map(number => (
        <button key={number} onClick={() => onPageChange(number)}>{number}</button>
      ))}
      {currentPage < totalPages && <button onClick={() => onPageChange(currentPage + 1)}>Next</button>}
    </div>
  );
};

export default Pagination;
