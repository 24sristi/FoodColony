let dishes = document.querySelectorAll(".item");
let cartbtn = document.querySelector(".cart");
let all = document.querySelector(".dish1");
let burger = document.querySelector(".dish2");
let pizza = document.querySelector(".dish13");
let salad = document.querySelector(".dish4");
let cupcake = document.querySelector(".dish5");
let desert = document.querySelector(".dish6");
let tea = document.querySelector(".dish7");
let drink = document.querySelector(".dish8");
let item = document.querySelectorAll(".item");
let order = [];
window.addEventListener("load",function(){
    
    for(let i=0;i<dishes.length;i++){
        let checkbtn =  dishes[i].querySelector(".added");
       checkbtn.addEventListener("click",async function(){

            if(checkbtn.innerHTML == "✓"){
                let name = dishes[i].querySelector(".itemName").innerHTML;
                let amt = dishes[i].querySelector(".amt").innerHTML;
                order = order.filter((x)=>{
                    return x.name!=name && x.amt!=amt;
                })
                checkbtn.innerHTML = "+";
            }else{
                order.push({"name":dishes[i].querySelector(".itemName").innerHTML, "img":dishes[i].querySelector(".img img").getAttribute("src"),"amt":dishes[i].querySelector(".amt").innerHTML})
                checkbtn.innerHTML = "✓";
            }   
        })
    }
    cartbtn.addEventListener("click",async function(){
        let details = await axios.post("https://foodcolony.herokuapp.com/order/cart/add",{
            "cart":order
        });
        window.location.href = "/cart"
    })

    $(document).ready(function(){
        $('.dish').click(function(){
            const value = $(this).attr('data-filter');
            if(value == 'all'){
                $('.item').show('1000');
            }else{
                $('.item').not('.'+value).hide('1000');   
                $('.item').filter('.'+value).show('1000');   
            }
        })
    })

})
