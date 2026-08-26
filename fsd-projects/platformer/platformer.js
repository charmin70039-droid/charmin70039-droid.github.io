$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(15, 11, 19)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms

    createPlatform(450, 100, 100, 300,"yellow");
    createPlatform(200,650,20,100,"lime");
    createPlatform(300,550,5,5,"lime");
    createPlatform(0,460,200,10,"lime")
    createPlatform(0,250,200,10,"lime");
    createPlatform(0,100,10,600,"lime");
    createPlatform(300,330,5,5, "lime");
    createPlatform(510,200,50,10,"lime");
    createBadPlatform(100,360,10,100)
    createBadPlatform(200,450,5,5)
    createPlatform(400,150,50,10)
    createPlatform(510,310,50,10,"lime")
    createBadPlatform(590,400,15,700)
    createBadPlatform(654,400,15,200)
    createBadPlatform(400,150,10,50)
    createBadPlatform(300,10,10,25)



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
