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
      user_id: data.id,
    });
  } catch (error) {
    console.log(error, 'this error at addressUser');
  }
  return <div>ShowAddress</div>;
}
export default handelNewAddress;
