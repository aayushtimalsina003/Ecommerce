import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catelogApi";

export default function Catelog() {
  const { data, isLoading } = useFetchProductsQuery();

  if (isLoading || !data) return <div>Loading...</div>;

  return (
    <>
      <ProductList products={data} />
    </>
  );
}
