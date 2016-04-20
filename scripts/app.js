/// <reference path="../typings/tsd.d.ts" />

// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    // Load the navbar dynamically via jQuery and Ajax
    var header = $('#mainHeader').load("partials/nav.html", function() {
        var bodyid = $('body').attr('id');
        switch (bodyid.toString()) {
            case "index":
                $('#indexLink').attr("class", "active");
                break;
            case "projects":
                $('#projectsLink').attr("class", "active");
                break;
            case "contact":
                $('#contactLink').attr("class", "active");
                break;
        }
    });

    //CreateJS Section

    // Global Variables
    var screenWidth = 468;
    var screenHeight = 200;

    // References
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth.toString());
    canvas.setAttribute("height", screenHeight.toString());

    // Create Stage
    var stage = new createjs.Stage(canvas);

    var helloLabel = null;
    var helloLabelMove = 1;

    var button = null;
    var buttonMove = 0;

    function init() {
        console.log("Testing");
 
        stage.enableMouseOver(20);

        // Frame Rate
        createjs.Ticker.framerate = 60;
        
        // listen for Frame Ticker
        createjs.Ticker.on("tick", animationLoop);

        main();
    }

    // Run every Frame
    function animationLoop() {
        

        helloLabel.x += helloLabelMove;
        button.x += buttonMove;


        if ((helloLabel.x >= screenWidth) || (helloLabel.x <= 270)) {
            helloLabelMove *= -1;
        }
        
        // Refresh
        stage.update();
    }

    function main() {
        console.log("Testing");
        button = new createjs.Bitmap('../Assets/images/pick-me.jpg');
        button.regX = button.getBounds().width * 0.5;
        button.regY = button.getBounds().height * 0.5;
        button.scaleX = 1;
        button.scaleY = 1;
        button.x = screenWidth * 0.5;
        button.y = screenHeight * 0.5;
        stage.addChild(button);

        helloLabel = new createjs.Text("See Work", "30px Consolas", "white");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.9;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = screenWidth * 0.7;
        helloLabel.y = screenHeight * 0.5;
        stage.addChild(helloLabel);

        button.on("click", function() {
            if(helloLabel.text === "Clicked!") {
                helloLabel.text = "View";
            } else {
                helloLabel.text = "Viewing Portfolio";
                window.location.replace("http://google.com");
            }
            
            helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
            helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        });

        button.on('mouseover', function() {
            button.alpha = 0.5;
        })

        button.on('mouseout', function() {
            button.alpha = 1;
        })
    }

    window.onload = init;


})();

