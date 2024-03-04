"use client";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  return (
    <section className="flex items-center pt-20">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-white">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-300">
            Sorry, we could not find this page.
          </p>
        </div>
      </div>
    </section>
  );
}
