'use server'
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
    await address.save()
    if (address) {
      return {msg:'ثبت آدرس انجام شد'}
    }
    return {msg:'ثبت انجام نشد'}
  } catch (error) {
    console.log(error, 'this error at addressUser');
  }
}
export default handelNewAddress;
