const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');  
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header .container');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    const scroll_position = window.scrollY; // Get the vertical scroll position
    const header = document.querySelector('.header'); // Update selector as per your structure
  
    if (scroll_position > 250) {
      header.style.backgroundColor = '#29232c'; // Change to black when scrolled
    } else {
      header.style.backgroundColor = 'transparent'; // Reset to transparent when at the top
    }
  });

  function handleClick(skill) {
    alert(`You clicked on ${skill}`);
}

