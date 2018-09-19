/* Select DOM items */
const menuBtn = document.querySelector('.menu-btn');
const menuItems = getDOMItems('.menu', ['', '-nav', '-branding', '-nav-item']);

/* Set initial state of menu */
toggleMenu.visible = false;
toggleMenu.rotation = 0;

/* add event listener to allow for action upon click */
menuBtn.addEventListener('click', toggleMenu);

/* With every call to this funciton, the menuButton will rotate an additional
 * 180 degrees. Also, the 'close'/'show' classes will be added or removed to 
 * the proper DOM elements */
function toggleMenu() {
    menuBtn.style.cssText += `transform: rotate(${toggleMenu.rotation += 180}deg);`;
    
    if (toggleMenu.visible = !toggleMenu.visible) {
        menuBtn.classList.add('close');
        menuItems.forEach(i => i.classList.add('show'));
    } else {
        menuBtn.classList.remove('close');
        menuItems.forEach(i => i.classList.remove('show'));
    }
}

/* I think this paradigm is useful */
function getDOMItems(base, suffixes) {
    let myList = [];

    for (var suffix of suffixes) {
        let myClass = base + suffix;
        let objs = document.querySelectorAll(myClass);
        objs.forEach(obj => {myList.push(obj)});
    }

    return myList
}
