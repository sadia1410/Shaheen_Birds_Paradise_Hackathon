"use client"
import ProductListing from "../components/ProductListing";
import Category from "../components/Category";
import FilterPanel from "../components/FilterPanel";

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
    description:"african grey parrots chicks in silver colors age around 3 months on hand feed."
  },
  {
    id: 3,
    name: "Raw alexndarine Parrots",
    price: "60000 PKR",
    image: "/images/raw2.jpg",
    description:"captive breeder pair of alexndarine , age around 2 years in jambo size."
  },
  // Add other products here
];

const categories = ["Parrots", "Chicks"];

export default function ProductsPage() {
  const handleCategorySelect = (category: string) => {
    console.log("Selected category:", category);
    // Add logic to filter products by category
  };

  const handleFilterChange = (filters: unknown) => {
    console.log("Filters:", filters);
    // Add logic to filter products based on filters
  };

  // Call the function

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Category categories={categories} onSelectCategory={handleCategorySelect} />
          <FilterPanel onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:col-span-3">
          <ProductListing products={products} />
        </div>
      </div>
    </div>
  );
}
