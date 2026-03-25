function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        width: "150px"
      }}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductCard;