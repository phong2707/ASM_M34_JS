const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics",
    inStock: true,
  },
  { id: 2, name: "T-Shirt", price: 25, category: "Apparel", inStock: true },
  {
    id: 3,
    name: "Coffee Maker",
    price: 80,
    category: "Home Goods",
    inStock: false,
  },
  {
    id: 4,
    name: "Smartphone",
    price: 950,
    category: "Electronics",
    inStock: true,
  },
  { id: 5, name: "Book", price: 15, category: "Literature", inStock: true },
  { id: 6, name: "Mouse", price: 50, category: "Electronics", inStock: true },
  { id: 7, name: "Jeans", price: 75, category: "Apparel", inStock: true },
];
// 1
const productNames = products.map((product) => product.name);
console.log(productNames);
// 2
const b = products.filter(
  (product) => product.category === "Electronics" && product.inStock === true
);
console.log(b);
// 3
products.forEach((product) => {
  console.log(`Product ${product.name} costs ${product.price}`);
});
// 4
const tonggiatri = products
  .filter((product) => product.inStock === true)
  .reduce((total, product) => total + product.price, 0);
console.log(tonggiatri);
// 5
const lonHon1000 = products.some((product) => product.price > 1000);
console.log(lonHon1000);

// 6
const tatCaLonHon10 = products.every((product) => product.price > 10);
console.log(tatCaLonHon10);

// 7
const fiterApparel = products
  .filter((product) => product.category === "Apparel")
  .map((product) => (product.price * (100 - 10)) / 100);
console.log(fiterApparel);

// 8
const categoryTotals = products.reduce((totals, product) => {
  if (!totals[product.category]) {
    totals[product.category] = 0;
  }
  totals[product.category] += product.price;
  return totals;
}, {});
console.log(categoryTotals);
// 9
const minPriceProduct = products.filter((product) => product.inStock === true).reduce((minProduct, product) =>{
      if (product.price < minProduct.price) {
          return product;
      } else {
          return minProduct;
      }
    }
  );
console.log(minPriceProduct); 
// 10
const result = products
  .filter(product => product.price < 100)
  .map(product => `${product.name} - $${product.price}`)
  .join("; ");

console.log(result);
