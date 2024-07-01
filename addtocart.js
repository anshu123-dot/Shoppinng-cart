
const product = [
    {
        id: 0,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACQg4JAQzPsQlD8H7q9Qc6GFHeLx8457hnZZDm5x3Fj2Pn1vBAYw0flG3vqEVnD2bHad55hhV8ZpTmWu5Ix_adlkRTR44yuSJBKfgL87LMLOZeg87Osh32b7IRyby2nIEOEzP85JdEKKTbBxyNqjB-1kLYqN4XYh8ESdq8ANZm3bv_8ahupiMD6fUar96hbuYwmx-MIeEK9dIdN6fNqSb9J5vo4luQo1o-jzF8Q2ye6VTzxn2xtdo9DjER88SBWDIHgsjSqID80Z2XF-dkfnMDcA-TRxfqaPibIHJdJQfOExsjGDD9zzvXDMUchhY77A_XmEQ8LPA40DFGA8W69yDcouCxK1PuqHRIKy6nLKqMwU7i2T3Pij5jSEOrjoGUIkrcnjZI8sLLtb6XyGpFFvKapY/p.jpeg',
        title: '250D DSLR Camera',
        price: 900,
    },
    {
        id: 1,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACSr0wXuPKtxZnj3_PhZx8VvWUThrYdXzPizorgpLilRcL8DSToW6By6pSXeoh04Cf5uT6i9EUaZS3zDU6jWnUY_eWU3QQ4s6bR0KtYdOOl4NhDCodxB5AksL7lovEszrHXjyI7xPJtp9Y-7O96LlZ1F8vcy_wRTk0_-eICtsLSyYXaoKusjYBtAHkGHZ7iUK2TyfE5By75uG1_ygYyxpEu7uVKTImR7tI3S4FKG4XXrt7wHBJ94v_LTwsoc9c77-vPECPe3hQTCVs0FWbNPryFaB3Xu8k-Hvf7d1i4xXD2TOEY2NEZL8qA_VwY9i8HfA7X6F3CwMV77NEdLCr4S89BgigQt4GAia2xiyvXjT5yPyfuUPSCunRH3-XqSVk0PgkmcGyDBBkmvl0tJ4iD6A94T/p.jpeg',
        title: 'Air Pods Pro',
        price: 90,
    },
    {
        id: 2,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACTFI3fqqKv3EDcJmQcVCgtBiCx2Zq43Bh1k2U9x38hgIDVkjMPm2TBNS3k9Fhnr_Mb8hErAiIf1kHZExjwfXYFdoZ4j6dRSxJyvAWpF-Rqqufysm_x_qhPE5WrBWS0gQ_KYVq8asZXC5TZnvx6TBpn6kPY6ICG3ROtduBMMDoddmJHJEKVCj3HJBro8UOKtQuDGeQeiSnqs1Vhhk3uC4Oix_OhEPpoFfWstzUWxqBboFpYS6hJSz1St-kuXuMYO14o3_nJa5SybxgxzOukk9glQY2-VGGbuF_Mie0HbM8deEIOC9IXN1V-u-t7xNZwXjf-a-yNbR2dE7PEJOeZ47TA8WMZBMeP8rxBs8Toa-QGYNDGjMlkXJWAXF7SdHJfnF5pc0qXCZsPtXb-pf0dLC7GN/p.jpeg',
        title: 'Head Phones',
        price: 110,
    },
    {
        id: 3,
        image: 'https://uc2a7a1a59de334a813c04f0c974.previews.dropboxusercontent.com/p/thumb/ACQg1fhokq--UmfKnCNz40lt7t0kntkeD5urVjvnhwL_tGlANlyyfbi7UPxsyqwr9AsQ7i_1cGg7Tpt1IfqLsX9ifKVrwgUC3Y6syp22I0fKEydcA_WNqTLAZGOKg_RJyB0fZrC_kcsgGcFBe9EFFRVYG95-Ttq02EIGX2YhGrOwatUv189RHXFhyj5zkBdZKYR4bK4mXQId6_bYx-gogbyyaszkuC34KVyYd5xpWOZfSIPmApNaa2aZ_-38Wx4hkB6IZ-OJvS1Y5jvyGEomRw061kNJ_dFGqmd5uJBUzw4HNPlmBSL2pfGlE4O37rnQdukm045NU7nGjoVb55yjCZJ7DToGcKI9UeeLw5HIdwPJve_krZv0013MVPTnm_Bcw4b61kB4lc80tc6fyrJ3ldl5/p.jpeg',
        title: 'Foldable smart phones',
        price: 1300,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
function func(){
    var email = document.getElementById("username").value;
    var email = document.getElementById("password").value;
    if (email == 'alien234@gmail.com' && pass == 'alien123'){
        alert ("success full ! ")
        window.location.assign("addtocart.html")
    }
    else{
        alert("Wrong entry invalid")
     }
}