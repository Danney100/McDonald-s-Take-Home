import MenuItems from "@/components/MenuItems";

export default async function Home() {
  const data = await getData();

  return <MenuItems data={data} />;
}

async function getData() {
  const res = await fetch("https://burgerhub00.github.io/data/products.json");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
