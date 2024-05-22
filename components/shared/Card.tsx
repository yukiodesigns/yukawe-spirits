import Image from "next/image";

const ProductCard = ({ image, title }) => {
    return (
      <div className="relative group overflow-hidden bg-gray-200 rounded-lg shadow-lg">
        <Image src={image} width={20} height={150} alt={title}  className="object-cover object-center opacity-50 group-hover:opacity-100 transition-opacity duration-300 w-40 h-56" />
        <div className="absolute bottom-0 left-0 pb-4 pl-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  