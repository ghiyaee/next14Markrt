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
      return {msg:'ثبت آدرس انجام شد',address:JSON.parse(JSON.stringify(address))}
    }
    return {msg:'ثبت انجام نشد'}
  } catch (error) {
    console.log(error, 'this error at addressUser');
  }
}
async function handleFindAddress(data) {
  try {
    const address = await Address.findOne({ user_id: data })
    return {address:JSON.parse(JSON.stringify(address))}
  } catch (error) {
    console.log(error,'edit address');
  }
}
export { handleFindAddress, handelNewAddress };
