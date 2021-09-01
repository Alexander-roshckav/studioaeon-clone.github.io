const mobileMenu = document.querySelector(".container-left")
const mobileMenuIcon = document.querySelector("#hamburger")


mobileMenuIcon.addEventListener("click", function() {
   
    if(mobileMenu.classList.contains("toggled-off")){
        mobileMenu.classList.remove("toggled-off")
        console.log("button clicked")
    }else{
        mobileMenu.classList.add("toggled-off")
        console.log("button clicked")
    }
});
