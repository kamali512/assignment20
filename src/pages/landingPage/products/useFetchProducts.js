import { useEffect, useState } from "react";

export function useCardapi() {
  const [pro, setProduct] = useState([{}]);

  async function fetchProducts() {
    let apiRes = await fetch("https://fakestoreapi.com/products");
    let product = await apiRes.json();
    setProduct(product);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return [pro];
}
