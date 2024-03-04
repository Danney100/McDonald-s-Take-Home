import MenuItems from "@/components/MenuItems";

export default async function Home() {
  const data = await getData();

  return <MenuItems data={data} />;
}

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/data/products.json`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
