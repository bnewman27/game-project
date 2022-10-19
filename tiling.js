function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*175)
        }
    }
}


let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/starrystarrysky.jpg', 0, horizon, window.innerWidth/10, heightOfSky/100)
tile('assets/Grass_04.png', 0, 0, window.innerWidth/10, heightOfGrass/250)
