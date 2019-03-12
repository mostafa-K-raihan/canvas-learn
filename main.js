let circleCount = 100;
let colorCount = 50;
let speedFactor = 5;

let canvas = document.querySelector("canvas");
let canvas_context = canvas.getContext('2d');
canvas.height = window.innerHeight/3 * 2;
canvas.width = window.innerWidth/3*2;

let createColors = (n) => {
    let colorArrays = [];
    for(let i=0;i<n;i++) {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;
        let o = Math.random() ;
        colorArrays.push(
            {
                r, g, b, o
            }
        )
    }
    return colorArrays;
} 
let colors = createColors(colorCount);

let createCircles = (n) => {
    let circleArray = [];
    for(let i=0;i<n;i++){
        // let randomValue = ;
        let radius = Math.random() * 15 +  15;
        let x = Math.random() * (canvas.width - 2*radius) + radius;
        let y = Math.random() * (canvas.height - 2*radius) + radius;
        
        let dx = (Math.random() - .5)*speedFactor;
        let dy = (Math.random() - .5)*speedFactor;

        let circle = new Circle(x, y, radius, colors[Math.floor(Math.random()*colors.length)], dx, dy);
        circleArray.push(circle);
    }
    return circleArray;
}


let circles = createCircles(circleCount);

const animate = ()=>{
    requestAnimationFrame(animate);
    canvas_context.clearRect(0,0,canvas.width, canvas.height);
    circles.forEach(circle=>{
        circle.update(canvas, canvas_context); 
    })
}

animate();