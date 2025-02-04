import { Grid2, Typography, Container, Paper } from "@mui/material";
import ProductList from "./ProductList";
import { useFetchFiltersQuery, useFetchProductsQuery } from "./catelogApi";
import Filters from "./Filters";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import AppPagination from "../../app/shared/components/AppPagination";
import { setPageNumber } from "./catelogSlice";

export default function Catelog() {
  const productParams = useAppSelector((state) => state.catelog);
  const { data, isLoading } = useFetchProductsQuery(productParams);
  const { data: filtersData, isLoading: filtersLoading } =
    useFetchFiltersQuery();
  const dispatch = useAppDispatch();

  if (isLoading || !data || filtersLoading || !filtersData)
    return <Typography>Loading products...</Typography>;

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid2 container spacing={4}>
        <Grid2 size={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Filters filtersData={filtersData} />
          </Paper>
        </Grid2>
        <Grid2 size={9}>
          {data.items && data.items.length > 0 ? (
            <>
              <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                <AppPagination
                  metadata={data.pagination}
                  onPageChange={(page: number) => {
                    dispatch(setPageNumber(page));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              </Paper>
              <ProductList products={data.items} />
            </>
          ) : (
            <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="h5" color="text.secondary">
                No results found for the selected filters
              </Typography>
            </Paper>
          )}
        </Grid2>
      </Grid2>
    </Container>
  );
}
