import Product from '@/models/products';
import ProductPage from '@/components/layout/ProductPage';
async function product({ params }) {
  try {
    const product = await Product.findOne({ slug: params.id });
    return <ProductPage product={JSON.parse(JSON.stringify(product))} />;
  } catch (error) {
    console.log(error);
  }
  
}
export default product;
