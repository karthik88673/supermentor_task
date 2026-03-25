import { useState } from "react";
import products from "./products";
import ProductCard from "./ProductCard";

function ProductList() {

  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (p) => p.category === category
        );

  return (
    <div>

      <h2>Filter Products</h2>

      <select
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Footwear</option>
      </select>

      <div style={{ display: "flex" }}>

        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
          />
        ))}

      </div>

    </div>
  );
}

export default ProductList;