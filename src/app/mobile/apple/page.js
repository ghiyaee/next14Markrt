import CategorySlice from "@/components/layout/CategorySlice";
import Product from "@/models/Products";
async function applePage({ searchParams }) {
   let products;
  try {
    products = await Product.find({ brand: searchParams.value });
  } catch (error) {
    console.error('error singel product', error)
  }
   return <CategorySlice  products={products} />;
}
export default applePage