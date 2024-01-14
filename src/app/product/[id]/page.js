import Product from '@/models/products';
import ProductPage from '@/components/layout/ProductPage';
async function product({ params }) {
  const product = await Product.findOne({ slug: params.id });
  return <ProductPage product={JSON.parse(JSON.stringify(product))} />;
}
export default product;
