class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      "A Pillow",
      "https://cdn.thewirecutter.com/wp-content/media/2023/01/bedpillows-2048px-9987.jpg?auto=webp&quality=75&width=1024",
      "A soft pillow!",
      19.99
    ),
    new Product(
        "A Carpet",
        "https://m.media-amazon.com/images/I/81GyZXnRB5L._AC_UF894,1000_QL80_.jpg",
        "A carpet which you might like or not.",
        89.99
      ),
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const prodEl = document.createElement("li");
      prodEl.className = "product-item";
      prodEl.innerHTML = `
            <div>
              <img src="${prod.imageUrl}" alt="${prod.title}">
              <div class = "product-item__content">
              <h2>${prod.title}</h2>
              <h3>\$${prod.price}</h3>
              <p>${prod.description}</p>
              <button>Add to Cart</button>
              </div>
            </div>
            `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
