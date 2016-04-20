// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    
    var request = new XMLHttpRequest();
    request.open('GET', '../paragraphs.json', true);
    request.addEventListener('readystatechange', function() {
         if (request.readyState === 4){
             
             var paragraph = {};
             paragraph = JSON.parse(request.responseText);
             
             
             var aboutParagraphs = []; // New Array
             aboutParagraphs = paragraph.aboutParagraphs;
             
             var aboutParagraphsLength = aboutParagraphs.length;
             
             for (var par = 0; par < aboutParagraphsLength; par++) {
                var output = "";
                aboutParagraphs[par].sayHello = function() {
                output += aboutParagraphs[par].paragraphs;
                    }
 
             

            for(var key in aboutParagraphs[par]) {
                
                if (key === "paragraphs") {
                 output += "<ul>";   
                for(var index=0; index < aboutParagraphs[par].paragraphs.length; index++) {
                output += "<li>" + aboutParagraphs[par].paragraphs[index] + "</li>";
                 }  
                output += "</ul>";   
 
                 
            }
            else if (key === "sayHello") {
                aboutParagraphs[par].sayHello();
                console.log('hello');
            }
            else {
                
                output += aboutParagraphs[par][key];
                
        } // else if
        
        
        } // For in

        var paragraphString = "paragraph1" + (par + 1);
        var paragraph = document.getElementById(paragraphString);
        paragraph.innerHTML = output;
    
        }
        }
        
    });


request.send();

})();

