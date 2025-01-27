"use client"
import ProductListing from "./components/ProductListing";
import SearchBar from "./components/SearchBar";

const products = [
  {
    id: 1,
    name: "Sun Conure chicks",
    price: "15000 PKR",
    image: "/images/sun.jpg",
  },
  {
    id: 2,
    name: "African Grey Parrots Chicks",
    price: "60000 PKR",
    image: "/images/grey1.jpg",
  },
  {
    id: 3,
    name: "Raw alexndarine Parrots",
    price: "60000 PKR",
    image: "/images/raw2.jpg",
  },
  {
    id: 4,
    name: "Raw alexndarine chicks",
    price: "18000 PKR",
    image: "/images/raw1.jpg",
  },
  {
    id: 5,
    name: "African grey Parrots",
    price: "150000 PKR",
    image: "/images/grey2.jpg",
  },
];

export default function Home() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Add logic to filter products based on the query
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to Shaheen Birds Paradise</h1>
      <p className="text-xl text-gray-600 text-center mb-8">
        Buy Exotic and well trained Birds
      </p>
      <SearchBar onSearch={handleSearch} />
      <ProductListing products={products} />
    </div>
  );
}