const circle = {
    radius: 26,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);