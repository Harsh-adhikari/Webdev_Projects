
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let seeMoreButtons = document.querySelectorAll('.see-more-btn');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});


// Loop through each button and add a click event listener
seeMoreButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Toggle the visibility of the extra details
        let extraDetails = this.previousElementSibling;
        if (extraDetails.style.display === 'none' || extraDetails.style.display === '') {
            extraDetails.style.display = 'block';
            this.textContent = 'See Less'; // Change button text
        } else {
            extraDetails.style.display = 'none';
            this.textContent = 'See More'; // Change button text back
        }
    });
});

//it will change the text color
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.info-link');
    
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#d6f50f'; // Change color on hover
            link.style.textDecoration = 'underline'; // Underline text on hover
            link.style.fontWeight = 'bold'; // Make text bold on hover
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'inherit'; // Revert color when not hovering
            link.style.textDecoration = 'none'; // Remove underline when not hovering
            link.style.fontWeight = 'normal'; // Revert font weight when not hovering
        });
    });
});
