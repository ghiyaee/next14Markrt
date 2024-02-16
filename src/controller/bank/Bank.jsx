'use server';
import InfoBank from '@/models/infoBank';
const bank = async (data) => {
  const { inputs, userConnect, manyTotal } = data;
  try {
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
          newDate.cash -= manyTotal;
          newDate.user_id = userConnect[0]._id;
          await newDate.save();
          return { msgOk: 'پرداخت با موافقیت انجام شد', cash: true };
        }
        if (newDate.cash < manyTotal) {
          return { msgNot: 'متاسقانه کسرموجودی دارید', cash: false };
        }
  } catch (error) {
     console.log(error);
  }

};
export default bank;
