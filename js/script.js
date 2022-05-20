// Navbar Functionality
const navIcon = document.getElementById("icon");
const navList = document.getElementById("nav-list");

navIcon.addEventListener("click", (e) => {
  e.preventDefault();
  if (navIcon.classList.contains("fa-bars")) {
    navIcon.className = "fa-solid fa-2xl fa-xmark";
    navList.classList.add("show");
  } else {
    navIcon.className = "fa-solid fa-2xl fa-bars";
    navList.classList.remove("show");
  }
});

// All Products
const allProducts = [
  {
    title: "Product A",
    price: 20,
    category: "chinese",
    review: "",
  },
  {
    title: "Product B",
    price: 30,
    category: "continental",
    review: "",
  },
  {
    title: "Product C",
    price: 10,
    category: "chinese",
    review: "",
  },
  {
    title: "Product D",
    price: 50,
    category: "continental",
    review: "",
  },
  {
    title: "Product E",
    price: 70,
    category: "chinese",
    review: "",
  },
  {
    title: "Product F",
    price: 10,
    category: "continental",
    review: "",
  },
];

const allProductsContainer = document.getElementById("all-products");

// Function to display Products
const displayAllProducts = () => {
  allProductsContainer.innerHTML = allProducts
    .map(
      (product) =>
        `
        <li class="product-display-card">
            <img src="./assets/images/product.jpg" alt="Product">
            <p class="title">${product.title}</p>
            <small><span>Category</span><span>${product.category}</span></small>
            <small><span>Price</span><span>${product.price}</span></small>
        </li>
        `
    )
    .join("");
};

displayAllProducts();
