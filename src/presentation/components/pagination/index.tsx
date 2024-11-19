import * as React from "react";
import Pagination from "@mui/material/Pagination";

interface PaginationParams {
  count: number;
  page: number;
  handleChange: (_: React.ChangeEvent<unknown>, value: number) => void;
}

export default function PaginationControlled({
  count,
  page,
  handleChange,
}: Readonly<PaginationParams>) {
  return (
    <Pagination
      color="primary"
      count={count}
      page={page}
      onChange={handleChange}
    />
  );
}
