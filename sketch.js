// random icon
let rIcon, ran1, ran2;
// body color
let r1 = 255, g1 = 255, b1 = 255;
// eye color
let r2 = 0, g2 = 0, b2 = 0;
// eye positions
let lx = 280, ly = 450, rx = 320, ry = 450;

function preload() {
  rIcon = loadImage('question.png')
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(50);
  
// buttons
  fill(255);
  text("Hold any key while selecting hue", 390, 75);
  text("to randomize value and saturation", 390, 90);
  // body
  fill (255)
  text("Body Color", 20, 20);
  
  rectMode(CORNERS);
  fill(255, 255, 255);
  noStroke();
  rect(20, 30, 50, 60);
  
  rectMode(CORNERS);
  fill(255, 0, 0);
  noStroke();
  rect(60, 30, 90, 60);
  
  rectMode(CORNERS);
  fill(255, 255, 0);
  noStroke();
  rect(100, 30, 130, 60);
  
  rectMode(CORNERS);
  fill(0, 255, 0);
  noStroke();
  rect(140, 30, 170, 60);
  
  rectMode(CORNERS);
  fill(0, 255, 255);
  noStroke();
  rect(180, 30, 210, 60);
  
  rectMode(CORNERS);
  fill(0, 0, 255);
  noStroke();
  rect(220, 30, 250, 60);
  
  rectMode(CORNERS);
  fill(255, 0, 255);
  noStroke();
  rect(260, 30, 290, 60);
  
  rectMode(CORNERS);
  fill(0, 0, 0);
  noStroke();
  rect(300, 30, 330, 60);
  
  rectMode(CORNERS);
  fill (255);
  noStroke();
  rect(340, 30, 370, 60);
  
  tint(0);
  image(rIcon, 344, 34, 23, 23);
  
  // eyes
  fill (255)
  text("Eye Color", 20, 90);
  
  rectMode(CORNERS);
  fill(255, 255, 255);
  noStroke();
  rect(20, 100, 50, 130);
  
  rectMode(CORNERS);
  fill(255, 0, 0);
  noStroke();
  rect(60, 100, 90, 130);
  
  rectMode(CORNERS);
  fill(255, 255, 0);
  noStroke();
  rect(100, 100, 130, 130);
  
  rectMode(CORNERS);
  fill(0, 255, 0);
  noStroke();
  rect(140, 100, 170, 130);
  
  rectMode(CORNERS);
  fill(0, 255, 255);
  noStroke();
  rect(180, 100, 210, 130);
  
  rectMode(CORNERS);
  fill(0, 0, 255);
  noStroke();
  rect(220, 100, 250, 130);
  
  rectMode(CORNERS);
  fill(255, 0, 255);
  noStroke();
  rect(260, 100, 290, 130);
  
  rectMode(CORNERS);
  fill(0, 0, 0);
  noStroke();
  rect(300, 100, 330, 130);
  
  rectMode(CORNERS);
  fill (0);
  noStroke();
  rect(340, 100, 370, 130);
  
  tint(255);
  image(rIcon, 344, 104, 23, 23);
  
  // eye position
  fill (255)
  text("Eye Height", 20, 160);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(20, 170, 50, 200);
  
  fill (r2, g2, b2);
  noStroke();
  circle(35, 195, 10);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(60, 170, 90, 200);
  
  fill (r2, g2, b2);
  noStroke();
  circle(75, 190, 10);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(100, 170, 130, 200);
  
  fill (r2, g2, b2);
  noStroke();
  circle(115, 185, 10);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(140, 170, 170, 200);
  
  fill (r2, g2, b2);
  noStroke();
  circle(155, 180, 10);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(180, 170, 210, 200);
  
  fill (r1, g1, b1);
  noStroke();
  circle(195, 170, 15);
  
  fill (r2, g2, b2);
  noStroke();
  circle(195, 170, 10);
  
  rectMode(CORNERS);
  fill (r1, g1, b1);
  noStroke();
  rect(220, 170, 250, 200);
  
  tint(r2, g2, b2);
  image(rIcon, 224, 174, 23, 23);
  
  fill (255)
  text("Distance Between Eyes", 270, 160);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(270, 170, 300, 200);

  fill(r2, g2, b2);
  noStroke();
  circle(285, 185, 6);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(310, 170, 340, 200);
  
  fill(r2, g2, b2);
  noStroke();
  circle(322, 185, 6);
  
  fill(r2, g2, b2);
  noStroke();
  circle(328, 185, 6);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(350, 170, 380, 200);
  
  fill(r2, g2, b2);
  noStroke();
  circle(361, 185, 6);
  
  fill(r2, g2, b2);
  noStroke();
  circle(369, 185, 6);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(390, 170, 420, 200);

  fill(r2, g2, b2);
  noStroke();
  circle(400, 185, 6);
  
  fill(r2, g2, b2);
  noStroke();
  circle(410, 185, 6);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(430, 170, 460, 200);
  
  fill(r2, g2, b2);
  noStroke();
  circle(438, 185, 6);
  
  fill(r2, g2, b2);
  noStroke();
  circle(452, 185, 6);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(470, 170, 500, 200);

  fill(r2, g2, b2);
  noStroke();
  circle(476, 185, 6);
  
  fill(r2, g2, b2);
  noStroke();
  circle(494, 185, 6);
  
  rectMode(CORNERS);
  fill(r1, g1, b1);
  noStroke();
  rect(510, 170, 540, 200);
  
  fill(r2, g2, b2);
  noStroke();
  circle(513, 185, 6);
  
  fill(r2, g2, b2);
  noStroke();
  circle(537, 185, 6);
  
  rectMode(CORNERS);
  fill (r1, g1, b1);
  noStroke();
  rect(550, 170, 580, 200);
  
  tint(r2, g2, b2);
  image(rIcon, 554, 174, 23, 23);
  
  // random
  fill (255)
  text("Random!", 20, 230);
  
  rectMode(CORNERS);
  fill(r2, g2, b2);
  noStroke();
  rect(20, 240, 50, 270);
  
  tint(r1, g1, b1);
  image(rIcon, 24, 244, 23, 23);
  
  // body
  rectMode(CENTER);
  fill(r1, g1, b1);
  noStroke();
  rect(300, 450, 150, 150);
  
  // eye backgrounds
  fill (r1, g1, b1);
  noStroke();
  circle(lx, ly, 30);
  
  fill (r1, g1, b1);
  noStroke();
  circle(rx, ry, 30);
  
  // eyes
  fill (r2, g2, b2);
  noStroke();
  circle(lx, ly, 20);
  
  fill(r2, g2, b2);
  noStroke();
  circle(rx, ry, 20);
  
  // legs
  rectMode(CORNER);
  fill (r1, g1, b1);
  noStroke();
  rect(225, 525, 30, 40);
  
  rectMode(CORNER);
  fill (r1, g1, b1);
  noStroke();
  rect(345, 525, 30, 40);
}

function mousePressed() {
  // body color
  if (mouseX >= 20 && mouseX <= 50 && mouseY >= 30 && mouseY <= 60) {
    if (keyIsPressed) {
      ran1 = random(127, 255);
      
      r1 = ran1;
      g1 = ran1;
      b1 = ran1;
    }
    else {
      r1 = 255;
      g1 = 255;
      b1 = 255;
    }
  }
  if (mouseX >= 60 && mouseX <= 90 && mouseY >= 30 && mouseY <= 60) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r1 = ran1;
      g1 = ran2;
      b1 = ran2;
    }
    else {
      r1 = 255;
      g1 = 0;
      b1 = 0;
    }
  }
  if (mouseX >= 100 && mouseX <= 130 && mouseY >= 30 && mouseY <= 60) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r1 = ran1;
      g1 = ran1;
      b1 = ran2;
    }
    else {
      r1 = 255;
      g1 = 255;
      b1 = 0;
    }
  }
  if (mouseX >= 140 && mouseX <= 170 && mouseY >= 30 && mouseY <= 60) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r1 = ran2;
      g1 = ran1;
      b1 = ran2;
    }
    else {
      r1 = 0;
      g1 = 255;
      b1 = 0;
    }
  }
  if (mouseX >= 180 && mouseX <= 210 && mouseY >= 30 && mouseY <= 60) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r1 = ran2;
      g1 = ran1;
      b1 = ran1;
    }
    else {
      r1 = 0;
      g1 = 255;
      b1 = 255;
    }
  }
  if (mouseX >= 220 && mouseX <= 250 && mouseY >= 30 && mouseY <= 60) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r1 = ran2;
      g1 = ran2;
      b1 = ran1;
    }
    else {
      r1 = 0;
      g1 = 0;
      b1 = 255;
    }
  }
  if (mouseX >= 260 && mouseX <= 290 && mouseY >= 30 && mouseY <= 60) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r1 = ran1;
      g1 = ran2;
      b1 = ran1;
    }
    else {
      r1 = 255;
      g1 = 0;
      b1 = 255;
    }
  }
  if (mouseX >= 300 && mouseX <= 330 && mouseY >= 30 && mouseY <= 60) {
    if (keyIsPressed) {
      ran1 = random(0, 127);
      
      r1 = ran1;
      g1 = ran1;
      b1 = ran1;
    }
    else {
      r1 = 0;
      g1 = 0;
      b1 = 0;
    }
  }
  
  // eye color
  if (mouseX >= 20 && mouseX <= 50 && mouseY >= 100 && mouseY <= 130) {
    if (keyIsPressed) {
      ran1 = random(127, 255);
      
      r2 = ran1;
      g2 = ran1;
      b2 = ran1;
    }
    else {
      r2 = 255;
      g2 = 255;
      b2 = 255;
    }
  }
  if (mouseX >= 60 && mouseX <= 90 && mouseY >= 100 && mouseY <= 130) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r2 = ran1;
      g2 = ran2;
      b2 = ran2;
    }
    else {
      r2 = 255;
      g2 = 0;
      b2 = 0;
    }
  }
  if (mouseX >= 100 && mouseX <= 130 && mouseY >= 100 && mouseY <= 130) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r2 = ran1;
      g2 = ran1;
      b2 = ran2;
    }
    else {
      r2 = 255;
      g2 = 255;
      b2 = 0;
    }
  }
  if (mouseX >= 140 && mouseX <= 170 && mouseY >= 100 && mouseY <= 130) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r2 = ran2;
      g2 = ran1;
      b2 = ran2;
    }
    else {
      r2 = 0;
      g2 = 255;
      b2 = 0;
    }
  }
  if (mouseX >= 180 && mouseX <= 210 && mouseY >= 100 && mouseY <= 130) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r2 = ran2;
      g2 = ran1;
      b2 = ran1;
    }
    else {
      r2 = 0;
      g2 = 255;
      b2 = 255;
    }
  }
  if (mouseX >= 220 && mouseX <= 250 && mouseY >= 100 && mouseY <= 130) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r2 = ran2;
      g2 = ran2;
      b2 = ran1;
    }
    else {
      r2 = 0;
      g2 = 0;
      b2 = 255;
    }
  }
  if (mouseX >= 260 && mouseX <= 290 && mouseY >= 100 && mouseY <= 130) {
    if (keyIsPressed) {
      ran1 = random(1, 255);
      ran2 = random(0, (ran1-1));
      
      r2 = ran1;
      g2 = ran2;
      b2 = ran1;
    }
    else {
      r2 = 255;
      g2 = 0;
      b2 = 255;
    }
  }
    if (mouseX >= 300 && mouseX <= 330 && mouseY >= 100 && mouseY <= 130) {
    if (keyIsPressed) {
      ran1 = random(0, 127);
      
      r2 = ran1;
      g2 = ran1;
      b2 = ran1;
    }
    else {
      r2 = 0;
      g2 = 0;
      b2 = 0;
    }
  }
  
  // eye position
  if (mouseX >= 20 && mouseX <= 50 && mouseY >= 170 && mouseY <= 200) {
    ly = 510;
    ry = 510;
  }
  if (mouseX >= 60 && mouseX <= 90 && mouseY >= 170 && mouseY <= 200) {
    ly = 480;
    ry = 480;
  }
  if (mouseX >= 100 && mouseX <= 130 && mouseY >= 170 && mouseY <= 200) {
    ly = 450;
    ry = 450;
  }
  if (mouseX >= 140 && mouseX <= 170 && mouseY >= 170 && mouseY <= 200) {
    ly = 410;
    ry = 410;
  }
  if (mouseX >= 180 && mouseX <= 210 && mouseY >= 170 && mouseY <= 200) {
    ly = 375;
    ry = 375;
  }
  
  if (mouseX >= 260 && mouseX <= 290 && mouseY >= 170 && mouseY <= 200) {
    lx = 300;
    rx = 300;
  }
  if (mouseX >= 300 && mouseX <= 330 && mouseY >= 170 && mouseY <= 200) {
    lx = 310;
    rx = 290;
  }
  if (mouseX >= 340 && mouseX <= 370 && mouseY >= 170 && mouseY <= 200) {
    lx = 320;
    rx = 280;
  }
  if (mouseX >= 380 && mouseX <= 410 && mouseY >= 170 && mouseY <= 200) {
    lx = 330;
    rx = 270;
  }
  if (mouseX >= 420 && mouseX <= 450 && mouseY >= 170 && mouseY <= 200) {
    lx = 340;
    rx = 260;
  }
  if (mouseX >= 460 && mouseX <= 490 && mouseY >= 170 && mouseY <= 200) {
    lx = 350;
    rx = 250;
  }
  if (mouseX >= 500 && mouseX <= 530 && mouseY >= 170 && mouseY <= 200) {
    lx = 360;
    rx = 240;
  }
  
  // random
  if (mouseX >= 340 && mouseX <= 370 && mouseY >= 30 && mouseY <= 60) {
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
  }
  if (mouseX >= 340 && mouseX <= 370 && mouseY >= 100 && mouseY <= 130) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }
  if (mouseX >= 220 && mouseX <= 250 && mouseY >= 170 && mouseY <= 200) {
    ly = random(375, 510);
    ry = ly;
  }
  if (mouseX >= 550 && mouseX <= 580 && mouseY >= 170 && mouseY <= 200) {
    sb = random(60);
    lx = 300 + sb;
    rx = 300 - sb;
  }
  if (mouseX >= 20 && mouseX <= 50 && mouseY >= 240 && mouseY <=  270) {
    sb = random(60);
    lx = 300 + sb;
    rx = 300 - sb;
    
    ly = random(375, 510);
    ry = ly;
    
    r1 = random(255);
    g1 = random(255);
    b1 = random(255);
    
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
  }
}