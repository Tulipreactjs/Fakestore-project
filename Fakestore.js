const mainContainer = document.querySelector(".main-container");
const nav = document.querySelector(".nav");
const categoryNav = document.querySelector(".navDiv-1");
const maxPriceContainer = document.querySelector(".maxPrice-container");
const canvasToggle = document.querySelector(".canvas-toggle");
const offCanvas = document.querySelector(".bi-x-lg");
const mobileNav = document.querySelector(".mobile-nav");
const topRatedContainer = document.querySelector(".topRated-div");
const ProductsContainer = document.getElementById("products-div");
const modal = document.getElementById("boot-strap-modal");

const getAllProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);
  const prices = data.map((item) => item.price);
  console.log(prices);
  const highPrice = Math.max(...prices);
  console.log(highPrice);

  ////Method 1
  const productWithMaxPrice = data.find((item) => item.price === highPrice);
  console.log(productWithMaxPrice);

  ////Method 2
  const maxPriceProduct = data.reduce((prevProduct, currentProduct) => {
    return prevProduct.price > currentProduct.price
      ? prevProduct
      : currentProduct;
  });
  console.log(maxPriceProduct);

  maxPriceContainer.innerHTML = `<div class="beside-maxprice"><h1 id="new">New</h1>
  <h1 class="tv-name">Samsung 49-Inch CHG9</h1><p>Electronics</p><button id="button" class="buy">Buy</button></div>
  <div class="image-container"><img src ="${maxPriceProduct.image}"/></div>`;

    let pressBtn = false;
  function changeColorOnClick() {
    const button = document.getElementById("button");
    const randomColor = getRandomColor();
    pressBtn = !pressBtn
    console.log(pressBtn)
    button.style.backgroundColor = randomColor;
    button.style.opacity = "0.7"
  }
  button.addEventListener("click", changeColorOnClick);
  changeColorOnClick();
  

  const rates = data.map((item) => item.rating.rate);
  console.log(rates);

  function topRated(rate) {
    const sortedRate = rate.sort((a, b) => b - a);
    const highestNumbers = sortedRate.slice(0, 3);
    return highestNumbers;
  }
  console.log(topRated(rates));

  const topRatedRates = topRated(rates);
  const topRatedProducts = data.filter((item) =>
    topRatedRates.includes(item.rating.rate)
  );
  console.log(topRatedProducts);
  const slicedTopRatedProducts = topRatedProducts.slice(0, 3);
  topRatedContainer.innerHTML = slicedTopRatedProducts
    .map(
      (item) =>
        `<div class="card d-flex " style="width: 18rem; margin:auto; padding-bottom:10px;"">
  <div class="card-body">
    <h5 class="card-title">${item.title.slice(0, 20)}</h5>
    <p class="card-text">${item.price}</p>
  </div> 
  <div class"product-img-div" style="width: 75%; height: 250px; margin:auto; padding-bottom:10px;"><img src="${
    item.image
  }" class="card-img-top" style="width: 100%; height: 100%;" alt="..."></div>
</div>`
    )
    .join("");

  ProductsContainer.innerHTML = data
    .map(
      (item) =>
        `<div class="card d-flex justify-content-center " style="width: 18rem; max-height: ;">
          <div class="card-body">
            <h5 class="card-title">${item.title.slice(0, 20)}</h5>
            <p class="card-text">${item.price}</p>
          </div>
          <div class"product-img-div" style="width: 75%; height: 250px; margin:auto; padding-bottom:10px;"><img src="${
            item.image
          }" class="card-img-top" style="width: 100%; height: 100%;" alt="..."></div>
          
        </div>`
    )
    .join("");
};

const getAllCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const categoryData = await res.json();
  console.log(categoryData);
  categoryNav.innerHTML = `<div class="navDiv-1"><a href="#"><i class="bi bi-shop"></i></a>
    ${categoryData
      .map((cat) => `<a class = 'cat-a' href="#">${cat}</a>`)
      .join("")}
    </div>`;
  modal.innerHTML = `<div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog ">
    <div class="modal-content">
    <div class="modal-header">
    <h1 class="modal-title fs-1" id="exampleModalLabel">
      FakeStore
    </h1>
    <button
      type="button"
      class=" btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body"><h1 class="fs">Categories</h1>${categoryData
    .map((cat) => `<a class = 'side-cat' href="#">${cat}</a>`)
    .join(" ")}
    </div>
  </div>
    </div>
  </div></div>
    
    
</div>`;

  //   modalToggle.addEventListener("click", function () {
  //     modalToggle.classList.toggle("bi-x-lg");
  //     mobileNav.classList.toggle("bi-x-lg");
  //     mobileNav.innerHTML = `<div class="side-cat"><h1>Categories</h1>
  //     ${categoryData
  //       .map((cat) => `<a class = 'side-cat' href="#">${cat}</a>`)
  //       .join("")}
  //     </div>`;
  //   });
};

// document.addEventListener("click", function (event) {
//   if (
//     !event.target.closest(".mobile-nav") &&
//     !event.target.closest(".modalT")
//   ) {
//     nav.classList.remove("bi-x-lg");
//     mobileNav.classList.remove("bi-x-lg");
//   }
// });

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


getRandomColor();
getAllProducts();
getAllCategories();