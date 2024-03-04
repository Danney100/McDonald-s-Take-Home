"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addItemToCart } from "@/store/slices/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Page({ params: { id } }: { params: { id: string } }) {
  const productDetailData = useAppSelector(
    (store) => store.menu.productDetailData
  );
  const { image, name, price } = productDetailData;

  const dispatch = useAppDispatch();

  const router = useRouter();

  const addToCartHandler = () => {
    toast.success(`“Added ${productDetailData?.name} to cart“`);
    dispatch(addItemToCart({ id, name, image, price }));
  };

  return (
    <section className="flex flex-col min-h-screen items-center justify-between">
      <div className="bg-zinc-800 w-full h-full rounded-2xl p-8 flex flex-col gap-4 max-w-7xl justify-center">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <Image src={"/arrow.svg"} width={30} height={30} alt="arrow-left" />
          <span>Go Back</span>
        </div>
        <div className="h-[60rem] w-full flex flex-col gap-2 items-center justify-between">
          <div className="max-w-4xl relative w-full h-full">
            <Image
              fill
              style={{ objectFit: "cover" }}
              sizes="100%"
              className="rounded-xl"
              src={productDetailData?.image}
              alt={"productDetailData"}
            />
          </div>
          <div className="px-4 py-8 flex flex-col gap-4">
            <h5 className="mb-8 text-5xl text-center font-bold tracking-tight">
              {productDetailData?.name}
            </h5>
            <p className="text-gray-300 font-bold">
              ${productDetailData?.price}
            </p>
            <p className="text-gray-300">{productDetailData?.description}</p>
            <p className="text-gray-300">
              Nutrition: {productDetailData?.calorie} calories
            </p>
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="text-white bg-gray-600 focus:outline-none  font-medium rounded-full text-3xl px-10 py-2.5"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
