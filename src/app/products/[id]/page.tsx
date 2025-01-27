"use client"

import ProductDetail from "../../components/ProductDetail";
import RelatedProducts from "../../components/RelatedProducts";

const product = {
  id: 1,
    name: "Sun Conure chicks",
    price: "15000 PKR",
    image: "/images/sun.jpg"
};

const relatedProducts = [
  {
    id: 2,
    name: "African Grey Parrots Chicks",
    price: "60000 PKR",
    image: "/images/grey1.jpg",
    description:"african grey parrots chicks in silver colors age around 3 months on hand feed."
  },
  {
    id: 3,
    name: "Raw alexndarine Parrots",
    price: "60000 PKR",
    image: "/images/raw2.jpg",
    description:"captive breeder pair of alexndarine , age around 2 years in jambo size."
  },
  
];

export default function ProductDetails() {
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
      <h2 className="text-2xl font-bold mt-8 mb-4">Related Products</h2>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}
