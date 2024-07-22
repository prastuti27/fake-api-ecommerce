// src/components/ProductCard.tsx
import Typography from "./Typography";
import Button from "./Button";

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
}

const ProductCard = ({
  id,
  title,
  price,
  category,
  image,
}: ProductCardProps) => {
  const formattedPrice = `$${price}`;

  return (
    <div
      key={id}
      className="border p-4 rounded-3xl shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-600"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover mb-2" />
      <Typography variant="h2" content={title} className="line-clamp-2" />
      <Typography
        className="text-gray-700"
        variant="p"
        content={formattedPrice}
      />
      <Button className="bg-black text-white rounded-2xl text-xs mt-2">
        {category}
      </Button>
    </div>
  );
};

export default ProductCard;
