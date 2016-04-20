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
    var screenWidth = 250;
    var screenHeight = 250;

    // References
    var canvas = document.getElementById("canvas");
    canvas.setAttribute("width", screenWidth.toString());
    canvas.setAttribute("height", screenHeight.toString());

    // Create Stage
    var stage = new createjs.Stage(canvas);

    var helloLabel = null;

    var website = null;

    var viewHere = null;

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


        if ((helloLabel.x >= screenWidth - 20) || (helloLabel.x <= 160)) {
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

        helloLabel = new createjs.Text("See Work", "40px Consolas", "white");
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.9;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        helloLabel.x = screenWidth * 0.7;
        helloLabel.y = screenHeight * 0.3;
        stage.addChild(helloLabel);


        website = new createjs.Text("New Front End Projects", "19px Consolas", "yellow");
        website.regX = website.getMeasuredWidth() * 0.9;
        website.regY = website.getMeasuredHeight() * 0.5;
        website.x = screenWidth * 0.85;
        website.y = screenHeight * 0.6;
        stage.addChild(website);

        viewHere = new createjs.Text("View Here", "35px Consolas", "yellow");
        viewHere.regX = viewHere.getMeasuredWidth() * 0.9;
        viewHere.regY = viewHere.getMeasuredHeight() * 0.5;
        viewHere.x = screenWidth * 0.8;
        viewHere.y = screenHeight * 0.8;
        stage.addChild(viewHere);



        button.on("click", function() {
            if(helloLabel.text === "Clicked!") {
                helloLabel.text = "View";
            } else {
                helloLabel.text = "Viewing Portfolio";
                window.location.replace("http://comp1073-a4-ad.azurewebsites.net/school-projects.html");
            }
            
            helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
            helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
        });

        button.on('mouseover', function() {
            button.alpha = 0.2;
        })

        button.on('mouseout', function() {
            button.alpha = 0.45
        })
        button.alpha = 0.5;
    }

    window.onload = init;


})();

