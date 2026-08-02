import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const BasketEmpty = () => {
  return (
    <div className="flex items-center gap-5 flex-col my-10">
      <ShoppingCart />
      <h1 className="text-2xl font-bold">Sepetiniz Boş</h1>
      <p className="text-zinc-700 text-lg">
        Henüz sepete bir ürün eklemediniz.{" "}
        <Link to="/" className="text-blue-500 hover:underline">
          Restoran'lara Gözat
        </Link>
      </p>
    </div>
  );
};

export default BasketEmpty;
