let backBtn = document.querySelector(".header i");
let amt = document.querySelectorAll("h3")[1].innerHTML;
let checkoutBtn = document.querySelector(".checkout");
let names = document.querySelectorAll(".N");
window.addEventListener("load",function(){
    backBtn.addEventListener("click",function(){
        window.location.href = "/menu"
    })
    checkoutBtn.addEventListener("click",async function(){
        try{
            let dishes =" ";
            for(let i=0;i<names.length;i++){
                dishes= dishes +names[i].innerHTML.trim()+", ";
            }
            let order = await axios.post("https://foodcolony.herokuapp.com/order/add" , {amount:amt,dishes:dishes});
            alert("Order Confirmed")
            window.location.href = "/menu"
            

        }catch(err){
            console.log(err);
        }
    })

})