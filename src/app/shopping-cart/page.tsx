"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeItemFromCart } from "@/store/slices/cartSlice";
import Image from "next/image";

export default function Page() {
  const productDetailData = useAppSelector((store) => store.cart.cartItems);
  const dispatch = useAppDispatch();

  const deleteCartItemHandler = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <section className="flex flex-col p-8 min-h-screen items-center justify-between">
      <div className="bg-zinc-800 w-full h-full rounded-2xl p-8 flex flex-col gap-4 max-w-7xl justify-center">
        <div className=" w-full flex flex-col gap-2 items-center justify-between">
          <div className="px-4 py-8 flex flex-col gap-4">
            <h5 className="text-5xl text-center font-bold tracking-tight">
              {"Shopping Cart"}
            </h5>
          </div>
          {productDetailData?.length ? (
            <div className="mt-20 w-full">
              {productDetailData?.map((el, i: number) => {
                return (
                  <div
                    key={i}
                    className="flex border-b border-gray-500 justify-between px-16 py-4 items-center text-xl"
                  >
                    <div className="flex items-center gap-8">
                      <div className="h-28 relative w-28">
                        <Image
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-full"
                          src={el.image}
                          alt="burger"
                        />
                      </div>
                      <span>{`${el.name} (${el.quantity})`}</span>
                    </div>
                    <div className="flex items-start gap-6">
                      <span>${el.price * el.quantity}</span>
                      <Image
                        onClick={() => deleteCartItemHandler(el.id)}
                        src="/trash.svg"
                        width={25}
                        height={25}
                        alt="trash"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <span>Sorry! No content to display.</span>
          )}
        </div>
      </div>
    </section>
  );
}
