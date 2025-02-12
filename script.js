const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')


    bar.addEventListener('click',()=>{
      nav.classList.add('active');

    })

    close.addEventListener('click',()=>{
      nav.classList.remove('active');

    })

    const para1 = document.getElementById("para1");
      
    animate(para1);
      
    function animate(element) {
        let elementWidth = element.offsetWidth;
        let parentWidth = element.parentElement.offsetWidth;
        let flag = 0;
      
        setInterval(() => {
            element.style.marginLeft = --flag + "px";
      
            if (elementWidth == -flag) {
                flag = parentWidth;
            }
        }, 10);
    }
    const products = [
      { id: 1, name: "Product 1", price: 10.99 },
      { id: 2, name: "Product 2", price: 20.99 },
      // Add more products here
    ];
    
    // Function to display products on the home page
    function displayProducts() {
      const productContainer = document.querySelector(".featured-products");
      productContainer.innerHTML = "";
    
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
    
        const productName = document.createElement("h3");
        productName.textContent = product.name;
    
        const productPrice = document.createElement("p");
        productPrice.textContent = "$" + product.price.toFixed(2);
    
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", () => addToCart(product));
    
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(addToCartButton);
    
        productContainer.appendChild(productCard);
      });
    }
    
    // Sample cart data (in a real application, you might store this data in the server/database)
    let cartItems = [];
    
    // Function to add products to the cart
    function addToCart(product) {
      cartItems.push(product);
      updateCartCount();
    }
    
    // Function to update the cart count in the UI
    function updateCartCount() {
      const cartCount = document.querySelector(".cart-count");
      cartCount.textContent = cartItems.length;
    }
    
    // Event listener for the document ready state
    document.addEventListener("DOMContentLoaded", () => {
      // Display products on the home page
      displayProducts();
    
      // Update the cart count in the UI
      updateCartCount();
    });