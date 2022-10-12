let filteredProducts = [...products];
// console.log(filteredProducts);

const container = document.querySelector(".products-container");

const displayProducts = ()=>{
    // if statement
     if(filteredProducts.length< 1){
        container.innerHTML = `<h6> sorry no products matched ur search</h6>`;
        return;
     }
    container.innerHTML=filteredProducts.map(({id,title,image,price})=>{
      return ` <article class="product" data-id "${id}">
          <img src="${image}"
            class="product-img img" alt="" />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
          </footer>
        </article>`;
    }).join(" ")
};
displayProducts();

const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup" , ()=>{
 const inputValue = searchInput.value;
 filteredProducts = products.filter((product)=>{
 return product.title.toLowerCase().includes(inputValue);
 });
 displayProducts();
});
// filters buttons 
const buttonDom = document.querySelector(".companies");

const displayButtons=()=>{const buttons= ["all" , ...new Set(products.map((product)=>
product.company
))]
console.log(buttons);
buttonDom.innerHTML = buttons.map((item)=>{
    return `<button class="company-btn" data-id = ${item}>${item}</button>`;
}).join(" ");}

displayButtons();

buttonDom.addEventListener("click",(e)=>{
  const el = e.target;
  if(el.classList.contains("company-btn")){
    if(el.dataset.id ==="all"){filteredProducts = [...products]}
  
  else{
    filteredProducts = products.filter((item)=>{
       return item.company===el.dataset.id;
    })
  }
}
searchInput.value = " ";
displayProducts()
;})
