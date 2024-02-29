export type MenuItemProps = {
    data: {
      products: Burger[]
    };
  };

export type Burger = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    calorie: number;
    slug: string;
};