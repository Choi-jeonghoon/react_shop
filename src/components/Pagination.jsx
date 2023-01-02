import React from "react";
import Pagination from "react-bootstrap/Pagination";

const Paging = () => {
  return (
    <div style={{ display: "flex", justifyContent: "Center" }}>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item active>{10}</Pagination.Item>
        {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
        {/* <Pagination.Ellipsis /> */}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default Paging;
