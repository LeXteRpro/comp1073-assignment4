
//   // Anonymous function with named alias
// (function(){
// "use strict";
//     // Instantiate new xhr object
//     var request = new XMLHttpRequest();
//     request.open('GET', '../paragraphs.json', true);
//     request.addEventListener('readystatechange', function() {
          
          
          
//      if (request.readyState === 4) {   
             
//         // Read the JSON Object
//         var about = {};
        
//         about = JSON.parse(request.responseText);
            
//         // Local Paragraph Array
//         var paragraphArray = [];
        
//         // Read the paragraph array from the JSON object
//         paragraphArray = about.paragraphs;
        
//         // Store length into a variable
//         var paragraphArrayLength = paragraphArray.length;
        
//         for (var number = 0; number < paragraphArrayLength; number++) {
//             // Create reference to each HTML paragraph element
//             var paragraph = document.getElementById("paragraph" + (number + 1) );
            
//             // Set Inner HTML of paragraph to string
//             paragraph.innerHTML = paragraphArray[number];
//         }
      
    
//     }
    
//    });
    
//     request.send();

//     // //Scroll Down to Portfolio section 
// // $("#portfolio-link").click(function() {
// //     $('html, body').animate({
// //         scrollTop: $("#portfolio-doc").offset().top
// //     }, 500);
// // });

// // //Scroll Down to Contact section 
// // $("#contact-link").click(function() {
// //     $('html, body').animate({
// //         scrollTop: $("#cta").offset().top
// //     }, 500);
// // });
    
// })();
