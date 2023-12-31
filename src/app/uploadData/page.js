import Product from '@/models/Products';
import User from '@/models/User';
import data from '../../../data';
import { redirect } from 'next/navigation';
async function uploadData() {
    await Product.deleteMany({})
    await User.deleteMany({})
    await Product.insertMany(data.products)
    await User.insertMany(data.users)
    redirect('/')
}
export default uploadData