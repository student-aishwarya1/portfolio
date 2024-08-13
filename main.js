
/*var tablinks= document.getElementByClassName("tab-links");
var tabcontents= document.getElementByClassName("tab-contents ");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

}
*/



document.addEventListener("DOMContentLoaded", function() {
    function opentab(tabName) {
        // Get all elements with class "tab-contents"
        var tabs = document.querySelectorAll('.tab-contents');
        
        // Hide all tab contents
        tabs.forEach(function(tab) {
            tab.classList.remove('active-tab');
        });
        
        // Remove "active-link" class from all tab links
        var tabLinks = document.querySelectorAll('.tab-links');
        tabLinks.forEach(function(link) {
            link.classList.remove('active-link');
        });
        
        // Show the clicked tab content
        var activeTab = document.getElementById(tabName);
        if (activeTab) {
            activeTab.classList.add('active-tab');
        }
        
        // Add "active-link" class to the clicked tab link
        var activeLink = document.querySelector('.tab-links[onclick="opentab(\'' + tabName + '\')"]');
        if (activeLink) {
            activeLink.classList.add('active-link');
        }
    }

    // Set default tab to be open (optional)
    opentab('skills'); // or 'experience', or 'education'

    // Attach event listeners to tab links
    var tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var tabName = this.getAttribute('onclick').split("'")[1];
            opentab(tabName);
        });
    });
});
document.getElementById('submitButton').addEventListener('click', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
    // Show the alert message
    alert('Data has been submitted');
});





