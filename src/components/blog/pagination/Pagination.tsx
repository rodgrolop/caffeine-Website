import { default as Grid } from "@mui/material/Unstable_Grid2";
import { Link } from "wouter-preact";
import { default as MUIPagination } from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import type { VNode } from "preact";
import { styles } from "./styles";

type PaginationProps = {
  pathname: string;
  meta: {
    page: number;
    pageCount: number;
  };
};

const Pagination = ({ meta, pathname }: PaginationProps): VNode => {
  const { page, pageCount } = meta;
  return (
    <Grid
      container
      xs={12}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={styles.paginationContainer}
    >
      <MUIPagination
        count={pageCount}
        color="secondary"
        page={page}
        boundaryCount={1}
        renderItem={(item) => (
          <Link href={`${pathname}?page=${item.page}`}>
            <PaginationItem {...item} />
          </Link>
        )}
      />
    </Grid>
  );
};

export default Pagination;
