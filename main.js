let additem = document.getElementById("userContentInput");
let allcontent = document.getElementById("home");
let searchitem = document.getElementById("searchInput");

let allitem = []
if (localStorage.getItem("toDOLIST") != null) {
    allitem = JSON.parse(localStorage.getItem("toDolist"));
    displayItems();
}
function item() {
    allitem.push(additem.value);
    localStorage.setItem("toDolist", JSON.stringify(allitem));
    displayItems();

}

function displayItems() {
    let cartona = "";
    for (let i = 0; i < allitem.length ; i++) {
        cartona = cartona + `<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content:${allitem[i]} </p>
      <i class="fa-sharp fa-solid fa-trash" onclick="deletitems(${i})"></i>
    </div>
`
    }
    allcontent.innerHTML = cartona;
}

function deletitems(ind) {
    allitem.splice(ind , 1)
    localStorage.setItem("toDolist", JSON.stringify(allitem) );
      displayItems();

}
searchitem.addEventListener("input" , function( e ) {
    searchInput(e.target.value)

})

function searchInput(searchvalue){
 let cartona = "";
    for (let i = 0; i < allitem.length ; i++) {
        if(allitem[i].tolowercase().includes(searchvalue.tolowercase()) ){
        cartona = cartona + `<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content:${allitem[i]} </p>
      <i class="fa-sharp fa-solid fa-trash" onclick="deletitems(${i})"></i>
    </div>
`
    }
   
}
  allcontent.innerHTML = cartona;
}
