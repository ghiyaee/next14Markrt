import CategorySlice from "@/components/layout/CategorySlice";
 async function applePage({searchParams}) {
   return <CategorySlice searchParams={searchParams} />;
}
export default applePage