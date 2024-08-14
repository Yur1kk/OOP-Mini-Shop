class Product {
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
              <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}">
                <div class = "product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
                </div>
              </div>
              `;
    return prodEl;
  }
}

class ProductList {
  products = [
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
  ];

  constructor() {}
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
