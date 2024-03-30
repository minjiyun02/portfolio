document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class 'hidden'
    var hiddenElements = document.querySelectorAll('.hidden');
  
    // Function to check if an element is in the viewport
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to check if elements are in the viewport and fade them in
    function fadeInElements() {
      hiddenElements.forEach(function(element) {
        if (isInViewport(element)) {
          element.classList.add('fade-in');
        }
      });
    }
  
    // Initial check on page load
    fadeInElements();
  
    // Event listener for scroll to check if elements are in viewport and fade them in
    window.addEventListener('scroll', function() {
      fadeInElements();
    });

    function openPDF() {
      window.open(document.getElementById('resume-link').getAttribute('href')); 
    }
  });