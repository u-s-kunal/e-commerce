
document.getElementById("clickHere").addEventListener("click", addProduts);

function addProduts() {
    console.log("clicked")

    MypriceList = document.getElementById("MypriceList").innerHTML =
        `<div class="container price-list-small  ">

        <div class=" col-6 col-lg-6 ">
            <div class="col-12 col-lg-10 text-start">
                <p>Eyebrows</p>
                <small>10 min</small>
            </div>
        </div>
        <div class="col-3 col-lg-3 ">
            <p> &#8377; 200</p>
        </div>
    </div>

    <br>
    <!-- total price will show here  -->
    <div class="d-flex justify-content-around border-top py-1">
        <b>Total</b>
        <div> <b> &#8377; 200</b></div>
    </div>`

}
