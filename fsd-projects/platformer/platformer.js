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

    createPlatform(0,200,10,600,"black");
    createPlatform(300,330,5,200, "black");
    createPlatform(300,425,50,5,"black")
    createPlatform(300,525,80,5,"black")
    createPlatform(510,310,50,10,"black")
    createBadPlatform(589,400,15,800)
    createBadPlatform(653,100,15,470)
    createBadPlatform(400,200,10,50)
    createCollectable("database", 1350,700,0.5,.07)
    createPlatform(200,725,70,10,"black")
    createBadPlatform(100,730,1200,10)
    createBadPlatform(0,600,50,10)
    createPlatform(400,650,25,5,"black")
    createPlatform(0,100,50,300,"black")
    createPlatform(660,400,300,10,"black")
    createPlatform(600,720,200,10,"black")
    createPlatform(668,400,10,150,"black")
    createPlatform(800,500,10,250,"black")
    createPlatform(750,650,50,10,"black")
    createPlatform(0,0,1400,90,"black")
    createPlatform(668,550,50,10,"black")
    createCannon("right",750,3000);
    createCannon("top",150,300)
    createCannon("top",677,1200)
    createPlatform(900,500,10,300,"black")
    createPlatform(900,720,300,20,"black")
    createBadPlatform(1000,650,7,100)
    createBadPlatform(1100,650,7,100)
    createCannon("top", 1100,1200)
    createPlatform(600,1400,50,10,"black")



    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
