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
const handelProduct = async (id) => {
  try {
    const product = await Product.findOne({ _id: id });
    return { product: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    console.log(error);
  }
};

const handelEditProduct = async (data) => {
  console.log(data);
  try {
    const product = await Product.findOneAndUpdate(
      { _id: data.id },
      {
        $set: {
          price: data.price,
          countInStock: data.countInStock,
          model: data.model,
          name: data.name,
        },
      }
    );
    if (!product) {
      return { msg: 'تغییرات اعمال نشد' };
    }
    return { msg: 'تغییرات اعمال شد' };
  } catch (error) {
    console.log(error);
  }
};
const handelNewProduct = async (data) => {
  try {
    const product = new Product({
      name: data.name,
      slug: data.slug,
      model: data.model,
      price: data.price,
      brand: data.brand,
      img: data.img,
      rating: data.rating,
      description: data.description,
      countInStock: data.countInStock,
    });
    await product.save();
    if (product) {
      return { msg: 'ثبت با موفقیت انجام شد' };
    }
    return { msg: 'مشکلی در ثبت ایجادشده بررسی کنید' };
  } catch (error) {
    console.log(error);
  }
};
export {
  handelAllProducts,
  handelProduct,
  handelEditProduct,
  handelNewProduct,
};
