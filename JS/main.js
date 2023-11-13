// vars
const nav_email = document.querySelector('.navbar-email');
const dmenu = document.querySelector('.desktop-menu');
const menulogo = document.querySelector('.menu');
const mmenu = document.querySelector('.mobile-menu');
const cart_logo = document.querySelector('.navbar-shopping-cart');
const cart_menu = document.querySelector('.product-detail');
const cart_back = document.querySelector('.cart-back');
const cards_container = document.querySelector('.cards-container');
const AsideProduct = document.querySelector('.product-detail-window');
const ImageSideProduct = document.querySelector('.image-side-product');
const PriceSideProduct = document.querySelector('.price-side-product');
const NameSideProduct = document.querySelector('.name-side-product');
const DescriptionSideProduct = document.querySelector('.description-side-product');
const DivCloseProductDetail = document.querySelector('.product-detail-close');
// code

nav_email.addEventListener('click', toggle_menu_des);
menulogo.addEventListener('click', toggle_menu_mob);
cart_logo.addEventListener('click', toggle_cartmenu);
cart_back.addEventListener('click', toggle_cartmenu);
DivCloseProductDetail.addEventListener('click', toggle_DivCloseProductDetail);




// functions

function toggle_menu_des() {
    // Cerrar ventanas externas: (menu cart)
    cart_menu.classList.add('inactive');
    AsideProduct.classList.add('inactive');
    // Abrir el menu
    dmenu.classList.toggle('inactive');
}

function toggle_menu_mob() {
    // Cerrar ventanas externas: (menu cart)
    cart_menu.classList.add('inactive');
    AsideProduct.classList.add('inactive');
    // Abrir el menu
    mmenu.classList.toggle('inactive');
}

function toggle_cartmenu() {

    // Cerrar el menu mobile , desktop
    dmenu.classList.add('inactive');
    mmenu.classList.add('inactive');
    AsideProduct.classList.add('inactive');
   
    // Abrir el cart
    cart_menu.classList.toggle('inactive');
}

function toggle_DivCloseProductDetail() {
    // Cerrar el menu mobile , desktop
    // Abrir el cart
    AsideProduct.classList.toggle('inactive');
}

function runproduct(product_array){
    for (product of product_array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfodiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name

        productInfodiv.append(productPrice, productName);

        const productFigure = document.createElement('figure');
        const producFigureImg = document.createElement('img');
        producFigureImg.setAttribute('src', '/icons/bt_add_to_cart.svg');
       
        
        
        productFigure.append(producFigureImg);

        productInfo.append(productInfodiv, productFigure)

        productCard.append(img, productInfo)

        cards_container.append(productCard);

        let Product = productName.innerText;
        img.addEventListener('click', function() {
            run_sidewindow(Product, productlist);
        });
    }
}




function run_sidewindow(Product2,product_array){
    for (product of product_array) {
        if (product.name == Product2) {
            mmenu.classList.add('inactive');
            cart_menu.classList.add('inactive');
            dmenu.classList.toggle('inactive');
            AsideProduct.classList.toggle('inactive')
            ImageSideProduct.setAttribute('src', product.image);
            NameSideProduct.innerText = product.name;
            PriceSideProduct.innerText = '$' + product.price;
            DescriptionSideProduct.innerText = product.description;
        }
    }
}

// function run_windowproduct(Product1, product_array){
//     for (product of product_array) {
//         if (product.name == Product1) {

//         AsideProduct.classList.toggle('inactive');  

//         const productDetail = document.createElement('div');
//         productDetail.classList.add('product-detail-close');

//         const ImageClose = document.createElement('img');
//         ImageClose.setAttribute('src', "/icons/icon_close.png");
        
//         productDetail.appendChild(ImageClose);

//         const ImageProduct = document.createElement('img');
//         ImageProduct.setAttribute('src', product.image);

//         const productInfo = document.createElement('div');
//         productInfo.classList.add('product-info-window');

//         const productPrice = document.createElement('p');
//         productPrice.innerText = '$' + product.price;
//         const productName = document.createElement('p');
//         productName.innerText = product.name;
//         const productDescription = document.createElement('p');
//         productDescription.innerText = product.description;
//         const button = document.createElement('button');
//         button.classList.add('primary-button');
//         button.classList.add('add-to-cart-button');
//         const Imagenbutton = document.createElement('img');
//         button.appendChild(Imagenbutton)

//         productInfo.append(productPrice, productName, productDescription, button);
//         AsideProduct.append(productDetail, ImageProduct, productInfo);
//         }
//     }
// }

let productlist = [];
productlist.push({
    name: "Plants",
    price: 120.00,
    image: 'https://images.pexels.com/photos/17855166/pexels-photo-17855166/free-photo-of-edificio-arboles-plantas-urbano.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    description: 'Toadshade is an herbaceous, long-lived, woodland perennial wildflower with a broad distribution the central United'
});
productlist.push({
    name: "Pantalla",
    price: 316.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Bring the movie theater experience home with Samsung OLED. Combining 8.3 million self-lit pixels lets you discover the ultimate entertainment experience. With OLED Technology'
});
productlist.push({
    name: "Computer",
    price: 997.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Funda de computadora para juegos de EE. UU. ATX/'
});


runproduct(productlist);


// function toggle_menu_des() {

//     const isCartMenuClose = cart_menu.classList.contains('inactive');

//     if (isCartMenuClose == false) {
//         // Cerrar ventanas externas: (menu cart)
//         cart_menu.classList.add('inactive');
//     }
//     // Abrir el menu
//     dmenu.classList.toggle('inactive');
// }

// function toggle_menu_mob() {
    
//     const isCartMenuClose = cart_menu.classList.contains('inactive');

//     if (isCartMenuClose == false) {
//         // Cerrar ventanas externas: (menu cart)
//         cart_menu.classList.add('inactive');
//     }
//     // Abrir el menu
//     mmenu.classList.toggle('inactive');
// }

// function toggle_cartmenu() {

//     const isMobileMenuClosed = mmenu.classList.contains('inactive');
//     const isDesktopMenuClosed = dmenu.classList.contains('inactive');

//     if (isMobileMenuClosed == false || isDesktopMenuClosed == false) {
//         // Cerrar el menu mobile , desktop
//         dmenu.classList.add('inactive');
//         mmenu.classList.add('inactive');
//     }
    
//     // Abrir el cart
//     cart_menu.classList.toggle('inactive');
// }