/* Select DOM items */
const menuBtn = document.querySelector('.menu-btn');

let menuSingleItems = ['', '-nav', '-branding'];
let menuListItems = ['-nav-item'];
const menuItems = getDOMItems('.menu', menuSingleItems, menuListItems);
console.log(menuItems);


/* Set initial state of menu */
let showMenu = false;

/* add event listener to allow for action upon click */
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menuItems.forEach(i => i.classList.add('show'));
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menuItems.forEach(i => i.classList.remove('show'));
        showMenu = false;
    }
}

function getDOMItems(base, singles, multiples) {
    let myList = [];

    for (var classSuffix of singles) {
        let myClass = base + classSuffix;
        myList.push(document.querySelector(myClass));
        // console.log("Adding class ~" + myClass + "~ to menuItems");
    }

    for (var classSuffix of multiples) {
        let myClass = base + classSuffix;
        let myItems = document.querySelectorAll(myClass);
        myItems.forEach(item => {myList.push(item)});
    }

    return myList
}
