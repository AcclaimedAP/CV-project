//Gets all links in menu
const hreflink = document.querySelectorAll('.menu-link');

//Foreach loops through all of them
hreflink.forEach(menulink => {
    //Adds on click eventlistener to them
    menulink.addEventListener('click', function handleClick(event) {
        //close menu by unchecking box
        myfield.checked = false;


    });
});