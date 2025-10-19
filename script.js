// This is a wrapper that waits for the entire HTML document to be loaded and ready before running any JavaScript.
document.addEventListener('DOMContentLoaded', () => {

    // This object will hold references to important UI elements.
    const ui = {
        // document.querySelectorAll('.page') finds all elements with the class 'page' and returns them as a list.
        pages: document.querySelectorAll('.page')
    };

    /**
     * This is the most important function you will write to unblock your team.
     * It handles showing one page while hiding all the others.
     * @param {string} pageId The id of the page div to show (e.g., 'home-page').
     */
    function showPage(pageId) {
        // Loop through all the page divs...
        ui.pages.forEach(page => {
            // ...and remove the 'active' class to hide them.
            page.classList.remove('active');
        });

        // Find the one specific page we want to show...
        const activePage = document.getElementById(pageId);
        if (activePage) {
            // ...and add the 'active' class to it.
            activePage.classList.add('active');
        }
    }

    /**
     * This is the main function that kicks off our application.
     */
    function initApp() {
        // When the app starts, we want to show the homepage.
        showPage('home-page'); 
    }
    
    // Run the initialization function to start the app.
    initApp();
});