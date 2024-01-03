import ListProducts from '../components/layout/ListProducts';
import Hero from '../components/layout/Hero';
import SearchBr from '@/components/layout/SearchBr';
import Slider from '@/components/layout/Slider';
import Category from '@/components/layout/Category';
export default async function Home() {
  return (
    <>
      <SearchBr />
      <Hero>
        <Slider />
        <Category />
        <ListProducts />
      </Hero>
    </>
  );
}
