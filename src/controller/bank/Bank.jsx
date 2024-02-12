'use server';
import InfoBank from '@/models/infoBank';
const bank = async (data) => {
  const { inputs, userConnect, manyTotal } = data;
    const newDate = await InfoBank.findOne();
  if (
    Number(inputs.input1) === newDate.input1 &&
    Number(inputs.input2) === newDate.input4 &&
    Number(inputs.input5) === newDate.input5 &&
    Number(inputs.input6) === newDate.input6 &&
    Number(inputs.input7) === newDate.input7 &&
    Number(inputs.input8) === newDate.input8 &&
    newDate.cash >= manyTotal
  ) {
      newDate.cash -= manyTotal
      newDate.user_id = userConnect[0]._id
      await newDate.save()
     return{cash:'خرید شما با موفقیت انجام شد'}
    }
    if (newDate.cash < manyTotal) {
        return { cash: 'متاسفانه کسر موجودی دارید' };
    }
};
export default bank;
