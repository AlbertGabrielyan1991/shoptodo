const products = '[{"id":1,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg","category":"Snack","description":"Seeds of Change Organic Quinoe Naturel","companyName":"NestFood","price":"$28.85","oldPrice":"$32.8"},{"id":2,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg","category":"Hodo Foods","description":"All Natural Italian-Style Chicken Meatballs","companyName":"Stouffer","price":"$52.85","oldPrice":"$55.8"},{"id":3,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg","category":"Snack","description":"Angie’s Boomchickapop Sweet & Salty","companyName":"StarKist","price":"$48.85","oldPrice":"$52.8"},{"id":4,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg","category":"Vegetables","description":"Foster Farms Takeout Crispy Classic","companyName":"NestFood","price":"$17.85","oldPrice":"$19.8"},{"id":5,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg","category":"Pet Foods","description":"Blue Diamond Almonds Lightly Naturel","companyName":"NestFood","price":"$23.85","oldPrice":"$25.8"},{"id":6,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg","category":"Hodo Foods","description":"Chobani Complete Vanilla Greek Bottle","companyName":"NestFood","price":"$54.85","oldPrice":"$55.8"},{"id":7,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg","category":"Meats","description":"Canada Dry Ginger Ale – 2 L Bottle","companyName":"NestFood","price":"$32.85","oldPrice":"$33.8"},{"id":8,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg","category":"Snack","description":"Encore Seafoods Stuffed Alaskan","companyName":"NestFood","price":"$35.85","oldPrice":"$37.8"},{"id":9,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg","category":"Coffes","description":"Gorton’s Beer Battered Fish Fillets","companyName":"Old El Paso","price":"$23.85","oldPrice":"$25.8"},{"id":10,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg","category":"Cream","description":"Haagen-Dazs Caramel Cone Ice Cream","companyName":"Tyson","price":"$22.85","oldPrice":"$24.8"},{"id":11,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg","category":"Snack","description":"Seeds of Change Organic Quinoe Naturel","companyName":"NestFood","price":"$28.85","oldPrice":"$32.8"},{"id":12,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg","category":"Hodo Foods","description":"All Natural Italian-Style Chicken Meatballs","companyName":"Stouffer","price":"$52.85","oldPrice":"$55.8"},{"id":13,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-3-1.jpg","category":"Snack","description":"Angie’s Boomchickapop Sweet & Salty","companyName":"StarKist","price":"$48.85","oldPrice":"$52.8"},{"id":14,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-4-1.jpg","category":"Vegetables","description":"Foster Farms Takeout Crispy Classic","companyName":"NestFood","price":"$17.85","oldPrice":"$19.8"},{"id":15,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-5-1.jpg","category":"Pet Foods","description":"Blue Diamond Almonds Lightly natural","companyName":"NestFood","price":"$23.85","oldPrice":"$25.8"},{"id":16,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-6-1.jpg","category":"Hodo Foods","description":"Chobani Complete Vanilla Greek Bottle","companyName":"NestFood","price":"$54.85","oldPrice":"$55.8"},{"id":17,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-7-1.jpg","category":"Meats","description":"Canada Dry Ginger Ale – 2 L Bottle","companyName":"NestFood","price":"$32.85","oldPrice":"$33.8"},{"id":18,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-8-1.jpg","category":"Snack","description":"Encore Seafoods Stuffed Alaskan","companyName":"NestFood","price":"$35.85","oldPrice":"$37.8"},{"id":19,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-9-1.jpg","category":"Coffes","description":"Gorton’s Beer Battered Fish Fillets","companyName":"Old El Paso","price":"$23.85","oldPrice":"$25.8"},{"id":20,"src":"http://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-10-1.jpg","category":"Cream","description":"Haagen-Dazs Caramel Cone Ice Cream","companyName":"Tyson","price":"$22.85","oldPrice":"$24.8"}]'


function fetchProducts() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(products)
        }, 300)

    }).then(res => JSON.parse(res))

}

function getProductList() {

    fetchProducts().then(product => {
        drawProduct(product)
    })

}


getProductList()

function getProductHTML(src, category, description, companyName, price, oldPrice, dataId) {
    return `
        <div class="product-wrap product">
                        <div class="product-cart-wrap">
                            <div class="product-img-wrap">
                                <img src="${src}" alt="Product">
                            </div>
                            <div class="product-detail-wrap">
                                <div class="product-category">
                                    <a href="">${category}</a>
                                </div>
                                <div class="product-description">
                                    <h2><a href="">${description}</a></h2>
                                </div>
                                <div class="company-name">
                                    <span>By <a href="">${companyName}</a></span>
                                </div>
                                <div class="product-card-bottom">
                                    <div class="product-price">
                                        <span>${price}</span>
                                        <span class="old-price">${oldPrice}</span>
                                    </div>
                                    <div class="add-cart">
                                        <a class="add" href="#" data-id = '${dataId}' ><i class="fa fa-shopping-cart" aria-hidden="true"></i>Add </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
`;
}

function addToCartHTML(item) {

    return `   <li>
                        <div class="shopping-cart-img">
                           <a href="shop-product-right.html"><img alt="Nest" src="${item.src}"></a>
                         </div>
                           <div class="shopping-cart-title">
                             <h4><a href="shop-product-right.html">${item.category}</a></h4>
                             <h4><span>${item.quantity}×</span>${item.total} </h4>
                           </div>
                              <div class="shopping-cart-delete">
                               <a href="javascript:void(0)"  data-id="${item.id}"><i class="fa fa-times" aria-hidden="true"></i></a>
                           </div>
                     </li> `

}

function drawProduct(product) {

    const productContent = document.getElementById("product-content")
    product.forEach((product) => {
        productContent.innerHTML += getProductHTML(product.src, product.category, product.description, product.companyName, product.price, product.oldPrice, product.id)
    })
    const add = document.getElementsByClassName('add');
    for (let i = 0; i < add.length; i++) {
        add[i].addEventListener("click", function () {
            addToCart.bind(this)(product)
        })

    }

}

let result = []

function addToCart(product) {

    const productContent = document.getElementById("cart")
    if (this !== window) {
        let attrId = Number(this.getAttribute("data-id"));

        result.push(product.filter((item) => {
            return item.id === attrId
        })[0])

        let epicResult = [...new Set(result)]
        epicResult.forEach((item) => {
            item.quantity = item.quantity ? item.id === attrId ? ++item.quantity : item.quantity : 1
            // item['quantity'] = item['quantity'] && item.id === attrId ? ++item['quantity']:1;
            item['total'] = item.quantity * item.price.replace("$", " ")
            return item

        })
        productContent.innerHTML = '';
        epicResult.forEach((elem, i) => {
            productContent.innerHTML += addToCartHTML(elem)

        })

        let totalContent = document.querySelector('#total > h4 > span')
        let quantityContent = document.querySelector('#quantity')
        totalContent.innerHTML = '';
        let sum = 0;
        let quantity = 0;
        for (const item of epicResult) {

            sum += item.total;
            quantity += item.quantity
        }
        totalContent.innerHTML = sum
        quantityContent.innerHTML = quantity

        const add = document.getElementsByClassName('shopping-cart-delete');
        for (let i = 0; i < add.length; i++) {
            add[i].addEventListener("click", function () {
                removeElementFu.bind(this)(epicResult)
            })
        }
    } else {
        result = product
        productContent.innerHTML = '';
        product.forEach((elem, i) => {
            productContent.innerHTML += addToCartHTML(elem)

        })


        let totalContent = document.querySelector('#total > h4 > span')
        let quantityContent = document.querySelector('#quantity')

        totalContent.innerHTML = '';
        let sum = 0;
        let quantity = 0;
        for (const item of result) {
            sum += item.total;
            quantity += item.quantity
        }
        totalContent.innerHTML = sum
        quantityContent.innerHTML = quantity


        const add = document.getElementsByClassName('shopping-cart-delete');
        for (let i = 0; i < add.length; i++) {
            add[i].addEventListener("click", function () {
                removeElementFu.bind(this)(product)
            })
        }
    }


    console.log(result)
}


function removeElementFu(epicResult) {
    let removeElementId = Number(this.childNodes[1].getAttribute("data-id"));
    let key = epicResult.map(function (e) {
        return e.id;
    }).indexOf(removeElementId);
    let remuveResult = epicResult
    remuveResult.splice(key, 1)
    addToCart(remuveResult)
}

function searchProduct() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const product = document.querySelectorAll(".product")
    const matches = document.querySelectorAll(".product > .product-cart-wrap > :nth-child(2) > .product-category a");
    for (i = 0; i < matches.length; i++) {
        let txtValue = matches[i].innerText;
        if (txtValue.slice(0, filter.length).toUpperCase() === filter) {
            product[i].style.display = "";
        } else {
            product[i].style.display = "none";
        }
    }
}

document.getElementById("myInput").addEventListener('keyup', searchProduct);




