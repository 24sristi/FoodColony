let addName = document.querySelector("#addItemName");
let amt = document.querySelector("#addItemAmt");
let dish = document.querySelector("#addItemPic");
let details = document.querySelector("#addItemDetails");
let addbtn = document.querySelector(".addBtn");
let dishes = document.querySelectorAll(".item");
let sub = document.querySelector("#addItemSub")


window.addEventListener("load", function(){

    addbtn.addEventListener("click", async function(e){
        e.preventDefault();
        let file = dish.files[0];
            let formData = new FormData();
        formData.append("name" , addName.value);
        formData.append("Amount" , amt.value);
        formData.append("Image" , file);
        formData.append("Details" , details.value);
        formData.append("category",sub.value);
        let obj = await axios.post("https://foodcolony.herokuapp.com/dishes/add" , formData);
        console.log(obj);
        if(obj.data.message){
            window.location.reload();
        }
    })
     for(let i=1;i<dishes.length;i++){
         let removeBtn = dishes[i].querySelector(".removeBtn");

         removeBtn.addEventListener("click", async function(){
             let deletedDish = await axios.post("https://foodcolony.herokuapp.com/dishes/deleteDish",{"_id":dishes[i].getAttribute("dishId")})
             if(deletedDish.data.message){
                window.location.reload();
            }
         })

     }   

})