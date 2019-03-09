function Circle (center_x, center_y, radius, color, dx, dy) {
    this.center_x = center_x;
    this.center_y = center_y;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;

    this.draw = (canvas_context) => {
        canvas_context.beginPath();
        canvas_context.arc(this.center_x, this.center_y, this.radius, 0, Math.PI* 2, false);
        canvas_context.strokeStyle = "rgba(" + this.color.r +", " + this.color.g + ", " + this.color.b + ", " + this.color.o + ")";
        
        canvas_context.fillStyle = "rgba(" + this.color.r +", " + this.color.g + ", " + this.color.b + ", " + this.color.o + ")";
        canvas_context.stroke();
        canvas_context.fill();
        
    }

    this.update = (canvas, canvas_context) => {
        if(this.center_x + this.radius > canvas.width 
            || this.center_x - this.radius < 0    
        ){
            this.dx = -this.dx;
        }

        if(this.center_y + this.radius > canvas.height
            || this.center_y - this.radius < 0
        ){
            this.dy = -this.dy;
        }


        this.center_x += this.dx;
        this.center_y += this.dy;
        this.draw(canvas_context);
    } 
}