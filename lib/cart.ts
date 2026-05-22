export type CartItem = {
  id: string;
  type: "box" | "extra";
  name: string;
  price: number;
  emoji: string;
  qty: number;
};

export type CartState = {
  items: CartItem[];
};
