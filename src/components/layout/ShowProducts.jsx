'use server';
import Product from '@/models/products';


const handelAllProducts = async () => {
  try {
    const products = await Product.find();
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log(error);
  }
};
export {  handelAllProducts};
