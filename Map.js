let activePopups = [];

let n1, n2, n3, n4, n5;

n1 = 'hi'
n2 = 'name no.2'
n3 = 'bob'
n4 = 'jake'
n5 = 'blake'
console.log('Hello, World!');

/*
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Retrieve the values from the input fields
        n1 = document.getElementById('n1').value;
        n2 = document.getElementById('n2').value;
        n3 = document.getElementById('n3').value;
        n4 = document.getElementById('n4').value;
        n5 = document.getElementById('n5').value;
    });
});
*/

// Function to handle clicks outside of popups
function handleClickOutside(event) {
    // Check if the click target is a popup or its child
    if (!event.target.closest('.popup')) {
        // Hide and remove all popups
        activePopups.forEach(popup => {
            popup.classList.remove('show');
            popup.classList.add('hide');
            setTimeout(() => {
                popup.remove();
            }, 500); // Match this timeout with the transition duration
        });
        // Clear the array of active popups
        activePopups = [];
    }
}

// Add click event listener to document to handle outside clicks
document.addEventListener('click', handleClickOutside);


let x, y, popup;
x= -15
y = -15
// Add click event listener to the document for creating popups
function createPopup(event) {
    var container = document.getElementById('container');

    // Create a new popup element
    popup = document.createElement('div');
    popup.className = 'popup';

    popup.innerHTML = `
        <div class="title">Blue Team</div>
        <div>
            <button class="names" id = "name1">${n1} </button>
            <button class="names" id = "name2">${n2}</button>
        </div>
        <div>
            <button class="names" id = "name3">${n3}</button>
            <button class="names" id = "name4">${n4}</button>
        </div>
            <button class="names" id = "name5">${n5}</button>
        <div>
            <button onclick="appear1()" class="cross">&times;</button>
            <button onclick="appear2()" class="circle">&cir;</button>
        </div>
        `;

    // Set the position of the popup based on the click coordinates
    x = event.clientX;
    y = event.clientY;
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;

    // Append the popup to the container
    container.appendChild(popup);

    // Show the popup
    popup.classList.add('show');

    // Add popup to the activePopups array
    activePopups.push(popup);
}


    // Add click event listener to the document for creating popups
document.addEventListener('click', function(event) {
    // Create a new popup if clicking outside of an existing popup
    if (!event.target.closest('.popup')) {
        createPopup(event);
    }});

function choosen1() {
    document.getElementById("name1").style.backgroundColor = "lightblue";
}


function appear1() {
    var cross = document.createElement('div');
    cross.className = 'cross1';
    cross.style.left = `${x}px`; // Add 'px' for proper positioning
    cross.style.top = `${y}px`; // Add 'px' for proper positioning
    document.body.appendChild(cross);
    const goal = 'goalll'
    console.log(goal);
    popup.classList.add('hide');    
}

function appear2() {
    var circle = document.createElement('div');
    circle.className = 'circle1';
    circle.style.left = `${x}px`; // Add 'px' for proper positioning
    circle.style.top = `${y}px`; // Add 'px' for proper positioning
    document.body.appendChild(circle);
    const miss = 'missed'
    console.log(miss);
    popup.classList.add('hide');
}

if (appear1()) {
    console.log('MISSED');
} else if (appear2()){
    console.log('GOALLLL');
}
/*
function toggleColor() {
    const colorBox = document.getElementById('colorBox');
    if (colorBox.classList.contains('blue')) {
        colorBox.classList.remove('blue');
        colorBox.classList.add('red');
    } else {
        colorBox.classList.remove('red');
        colorBox.classList.add('blue');
    }
}
    */
