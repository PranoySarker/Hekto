

// Featured product
var swiper = new Swiper(".featured-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// felter products
let products = {
    data: [
        {
            productName: "Comfort Handy Craft",
            category: "best_seller",
            price1: "$42",
            price2: "$65",
            image: "./images/image 1166.png"
        },
        {
            productName: "Comfort Handy Craft",
            category: "featured",
            price1: "$42",
            price2: "$65",
            image: "./images/image 15.png"
        },
        {
            productName: "Comfort Handy Craft",
            category: "special_offer",
            price1: "$42",
            price2: "$65",
            image: "./images/image 1168.png"
        },
        {
            productName: "Comfort Handy Craft",
            category: "best_seller",
            price1: "$42",
            price2: "$65",
            image: "./images/image 23.png"
        },
        {
            productName: "Comfort Handy Craft",
            category: "featured",
            price1: "$42",
            price2: "$65",
            image: "./images/image 332.png"
        },
        {
            productName: "Comfort Handy Craft",
            category: "special_offer",
            price1: "$42",
            price2: "$65",
            image: "./images/image 3.png"
        },
    ]
}

//card

for (let i of products.data) {
    let latestCardWrapper = document.createElement('div');
    //add class to card
    latestCardWrapper.classList.add("latest-card-wrapper", i.category);


    latestCardWrapper.innerHTML = `
            <div class="latest-card">
                <div class="latest-img">
                <img src="${i.image}" alt="" class="">
                </div>
            </div>
            <div class="latest-card-text">
                    <div class="latest-text-left">
                       <p>${i.productName}</p>
                        <hr>
                    </div>
                  <div class="latest-text-right">
                     <p>${i.price1}</p>
                     <p class="latest-price">${i.price2}</p>
                   </div>
            </div>
`
    document.getElementById('products').appendChild(latestCardWrapper)
}

// filter product by category
function filterProduct(value) {
    let menus = document.querySelectorAll("menu");

    menus.forEach((menu) => {
        // check if value equals innerText
        if (value.toUpperCase() == menu.innerText.toUpperCase()) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });
    //select all card
    let elements = document.querySelectorAll('.latest-card-wrapper')

    elements.forEach((element) => {
        if (value == 'new_arrival') {
            element.classList.remove('hide');
        }
        else {
            if (element.classList.contains(value)) {
                element.classList.remove('hide');
            }
            else {
                element.classList.add('hide');
            }
        }
    })
}

// initailaly display all product
window.onload = () => {
    filterProduct('new_arrival');
}
