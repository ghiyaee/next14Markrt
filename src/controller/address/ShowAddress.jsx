'use server';
import Address from '@/models/addressUser';
async function handelNewAddress(data) {
  try {
    const address = new Address({
      ostan: data.ostan,
      city: data.city,
      street: data.street,
      codePost: data.codePost,
      tell: data.tell,
      mobile: data.mobile,
      user_id: data.userConnect[0]._id,
    });
    await address.save();
    if (address) {
      return {
        msg: 'ثبت آدرس انجام شد',
        address: JSON.parse(JSON.stringify(address)),
      };
    }
    return { msg: 'ثبت انجام نشد' };
  } catch (error) {
    console.log(error, 'this error at addressUser');
  }
}
async function handleFindAddress(data) {
  try {
    const address = await Address.findOne({ user_id: data });
    return { address: JSON.parse(JSON.stringify(address)) };
  } catch (error) {
    console.log(error, 'edit address');
  }
}
async function handelUpdateAddress(data) {
  const { userConnect, ostan, city, tell, mobile, street, codePost } = data;
  try {
    await Address.updateMany(
      { user_id: userConnect[0]._id },
      {
         $set: {
          ostan: ostan,
          city: city,
          tell: tell,
          mobile: mobile,
          codePost: codePost,
          street: street,
        },
      }
    );
    return{msg:'تغییرات آدرس انجام شد'}
  } catch (error) {
    console.log(error);
  }
}
export { handleFindAddress, handelNewAddress, handelUpdateAddress };
