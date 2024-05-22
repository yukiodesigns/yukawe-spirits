import ProductCard from './Card';

const ProductsGrid = () => {
  const products = [
    { id: 1, title: 'Product 1', image: '/product1.jpg' },
    { id: 2, title: 'Product 2', image: '/product2.jpg' },
    { id: 3, title: 'Product 3', image: '/product3.jpg' },
    { id: 4, title: 'Product 4', image: '/product4.jpg' },
    { id: 5, title: 'Product 5', image: '/product5.jpg' },
    { id: 6, title: 'Product 6', image: '/product6.jpg' },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-1 gap-y-4 md:gap-2">
      {products.map((product) => (
        <ProductCard key={product.id} title={product.title} image={product.image} />
      ))}
    </div>
  );
};

export default ProductsGrid;
