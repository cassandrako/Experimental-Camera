let myData; 
let picArr = [];

let dalle_img = [];
let images = [];
let numRows = 4;
let numCols = 3;
let imgWidth = 200;
let imgHeight = 200;

let img1, img2, img3;

function preload(){
    myData = loadJSON('file.json');
    // img1 = loadImage('img/DalleGeneration1.png');
    // img2 = loadImage('img/DalleGeneration2.png');
    // img3 = loadImage('img/DalleGeneration3.png');
    img1 = loadImage('img/DalleGeneration1.png');
  console.log(img1); // Check if the image is loaded correctly
    for (let i = 1; i <= 12; i++) {
      images[i] = loadImage(`img/DalleGeneration${i}.png`);
    }
  }


  function setup() {
    // noCanvas();
    createCanvas(windowWidth/2, windowHeight*2);

  for(let i=0; i<myData.images_results.length; i++){
    picArr.push(createImg(myData.images_results[i].thumbnail));
  }
  // dalle_img.push(img1, img2, img3);
}

function draw(){
  // image(dalle_img[0], 20, 0, 300, 300);
  // image(dalle_img[1], 20, 300, 300, 300);
  // image(dalle_img[2], 20, 700, 300, 300);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      let index = i * numCols + j + 1;
      let x = j * imgWidth;
      let y = i * imgHeight;
      image(images[index], x+20, y+10, imgWidth, imgHeight);
    }
  }
}

