
// Animation
// window.addEventListener("load", () => {
//     document.querySelector(".js-preloader").classList.add("loaded");
//     document.querySelector(".js-preloader-slide").addEventListener("animationed", () => {
//         document.querySelector(".js-preloader").style.display = "none";

//         AOS.init({
//         once: true,
//         duration: 1500

//         });

//     });

    
// });


// Animation
window.addEventListener("load", () => {
    document.querySelector(".js-preloader").classList.add("loaded");
    document.querySelector(".js-preloader-slide").addEventListener("animationend", () => {
        const preloader = document.querySelector(".js-preloader");
        preloader.style.display = "none";
        preloader.parentElement.style.background = "var(--bg-black)"; 
        AOS.init({
            once: true,
            duration: 1500
        });
    });
});



//nav toggler ==================

function nav() {
    // Define a function called 'nav'.
    const navToggler = document.querySelector(".js-header-toggle");
    // Find the HTML element with the class 'js-header-toggle' and store it in 'navToggler'.
    const nav = document.querySelector(".js-header-nav");
    // Find the HTML element with the class 'js-header-nav' and store it in 'nav'.
    
    // Attach a click event listener to 'navToggler' that triggers the 'toggleNav' function when clicked.
    navToggler.addEventListener("click", toggleNav);

    // Define the 'toggleNav' function.
    function toggleNav() {
        // Toggle the "active" class on the 'navToggler' element.
        navToggler.classList.toggle("active");
        // Toggle the "open" class on the 'nav' element.
        nav.classList.toggle("open");
        
        // Check if the 'nav' element has the "open" class.
        if (nav.classList.contains("open")) {
            // If it does, set the CSS 'overflow' property of the body to "hidden" to prevent scrolling.
            document.body.style.overflow = "hidden";
        } else {
            // If it doesn't have the "open" class, remove the 'overflow' property to allow scrolling.
            document.body.style.removeProperty("overflow");
        }
    }

    // Add click event listeners to all 'a' (anchor) elements within the 'nav'.
    nav.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", toggleNav);
    });
}

// Call the 'nav' function to initiate its functionality.
nav();



// Video Popup ==================

function video() {
    // Define a function called 'video'.
    const btns = ['.js-video-popup-close', '.js-about-play-btn'];
    // Create an array 'btns' with CSS class selectors for buttons.
    const popup = document.querySelector(".js-video-popup");
    // Find the HTML element with the class 'js-video-popup' and store it in 'popup'.
    const iframe = popup.querySelector('.js-video-popup-iframe');
    // Find the iframe within the 'popup' element and store it in 'iframe'.
    const src = iframe.src;
    // Store the initial 'src' attribute of the iframe.

    btns.forEach((btn) => {
        // Loop through each element in the 'btns' array.
        document.querySelector(btn).addEventListener("click", () => {
            // Find the HTML element with the current class selector ('btn') and attach a click event listener.
            if (popup.classList.contains("open")) {
                // Check if the 'popup' element has the class 'open'.
                console.log('Popup is closed');
                // Print a message to the console indicating the popup is closed.
                popup.classList.remove("open");
                // Remove the 'open' class from the 'popup' to close it.
                iframe.src = "";
                // Set the 'src' attribute of the iframe to an empty string (clearing the source).
            }
            else {
                console.log('Popup is open');
                // Print a message to the console indicating the popup is open.
                popup.classList.add('open');
                // Add the 'open' class to the 'popup' to open it.
                if (iframe.getAttribute("src") == "") {
                    iframe.src = src;
                }
                // If the 'iframe' source is empty, set it to the stored 'src'.
            }
        });
    });
}
// call the function
video();





// accordion =================


function accordion(ele) {
    
    const accordion = document.querySelector(ele)

    accordion.addEventListener("click", ({target}) => {

        if (!target.closest(".js-accordion-btn")) {
            return;
        }

        const btn = target.closest (".js-accordion-btn")
        // console.log(btn); 
        const item = btn.parentElement.parentElement;
        const body = btn.parentElement.nextElementSibling;
        // console.log(body);

        if(target.closest(".active")) {
            slideUp() 
            return
        }


        if (accordion.querySelector(".active") ) {
            slideUp();
        }
        item.classList.add("active")
        body.style.height = body.scrollHeight + "px"
        function slideUp () {
            accordion.querySelector(".active").lastElementChild.style.height = "0";
            accordion.querySelector(".active").classList.remove("active")
        }
    });
}
accordion(".js-accordion");