
const hreflink = document.querySelectorAll('.menu-link');
const myfield = document.getElementById('menu-toggle');
//Foreach loops through all of them
hreflink.forEach(menulink => {
    //Adds on click eventlistener to them
    menulink.addEventListener('click', function handleClick(event) {
        //close menu by unchecking box
        myfield.checked = false;

    });
});

//Changes menu icon if menu is open
const menuicon = document.querySelectorAll('.material-symbols-outlined');
myfield.addEventListener('click', function handleClick(event) {
    if (myfield.checked == 1){
        menuicon[0].innerHTML = "close";
    } else {
        menuicon[0].innerHTML = "menu";
    }
});