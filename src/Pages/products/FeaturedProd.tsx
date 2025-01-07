import React from 'react';
import { Link } from 'react-router-dom';
import { products, Product } from './product'; // Ensure this is the correct path

const FeaturedProduct: React.FC = () => {
  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 4); // Pick 3 random products

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-center mb-6 font-riss">Featured Products</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-4 p-5">
        {randomProducts.map((product: Product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Product Image */}
            <Link to={`/product/${product.id}`}>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </Link>

            {/* Product Details */}
            <div className="p-2">
              <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <p className="text-sm font-semibold text-red-500 mt-1">
                ₦{product.price.toLocaleString()}
                {product.originalPrice && (
                  <span className="text-gray-500 text-xs line-through ml-2">
                    ₦{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
