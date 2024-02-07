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
  console.log(data);
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
    console.log(error, 'this a error check codes');
  }
};
const hamdelDeleteProduct = async (id) => {
  try {
    const product = await Product.findByIdAndDelete({ _id: id });
    const products = await Product.find();
    return { products: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log(error, 'this is delete but error');
  }
};
const handeldesCountInStock = async (id) => {
  const productId = id.product_id ? id.product_id._id : id;
  const product = await Product.findById(productId);
  if (product.countInStock > 0) {
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      { $inc: { countInStock: -1 } },
      { new: true }
    );
  }
};
const handelIncCountInstock = async (id) => {
  const product = await Product.findOneAndUpdate(
    { _id: id.product_id ? id.product_id._id : id },
    { $inc: { countInStock: 1 } },
    { new: true }
  );
};
export {
  handelAllProducts,
  handelProduct,
  handelEditProduct,
  handelNewProduct,
  hamdelDeleteProduct,
  handeldesCountInStock,
  handelIncCountInstock,
};
