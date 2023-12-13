/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const product=[
    { 
        img:'img/1g.jpg',
        title:'Denim Skirt With Raw Hems',
        price:13.01
    },
    { 
        img:'img/2g.jpg',
        title:'Straight Jean With Print',
        price:17.21
    },
    {
        img:'img/3g.jpg',
        title:'Knitted cardigan With Zipper',
        price:15.37
    },
    {
        img:'img/4g.jpg',
        title:'Crop Tank Top',
        price:6.80
    },
    {
        img:'img/b1.jpg',
        title:'Wide Leg Cargo Trousers',
        price:20.96
    },
    {
        img:'img/b2.jpg',
        title:'Loose Fit Shirt With Pockets',
        price:18.86
    },
    {
        img:'img/b3.jpg',
        title:'T-shirt With Print',
        price:9.51
    },
    {
        img:'img/b4.jpg',
        title:'Nylon Vest With Cargo Pockets',
        price:13.96
    },
];

var showProduct = document.getElementById('showProduct'); 
var productData = '';

product.map((e,i)=>{
    productData +=` <div class="col mb-5">
                        <div class="card h-100">
                            <!-- Product image-->
                            <img class="card-img-top" src="${e.img}" alt="..." />
                            
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product price-->
                                    $${e.price}
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${e.title}</h5>
                                    
                                </div>
                            </div>
                        </div>
                    </div>`;
});

showProduct.innerHTML= productData;