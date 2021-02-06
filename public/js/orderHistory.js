let orders = document.querySelectorAll(".item");

window.addEventListener("load", function () {

    for (let i = 0; i < orders.length; i++) {
        let removeBtn = orders[i].querySelector(".completed");
        removeBtn.addEventListener("click", async function () {
            let completedOrder = await axios.post("https://foodcolony.herokuapp.com/order/deleteOrder", { "_id": orders[i].getAttribute("orderId") })
            console.log(completedOrder);
            if (completedOrder.data.message) {
                window.location.reload();
            }
        })

    }

})