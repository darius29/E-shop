export const revalidate = 0;

import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/ProductCard";
import getProducts, { IProductParamas } from "@/actions/getProducts";
import NullData from "./components/NullData";

type HomeProps = {
  searchParams: IProductParamas;
};
export default async function Home({ searchParams }: HomeProps) {
  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <NullData title='Oops! No products found. Click "all" to clear filters' />
    );
  }

  // function shuffleArray(array: any) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], [array[i]]];
  //   }

  //   return array;
  // }

  // const shuffledProducts = shuffleArray(products);

  // console.log("shuffledProducts", shuffledProducts);

  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any, i: number) => {
            // console.log("product!!!!!!!!!!!", product);
            return (
              <ProductCard
                key={i}
                data={product}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
}
