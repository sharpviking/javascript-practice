function Circle(radius) {
    this.radius = radius;

    Circle.prototype.draw = function () {
        console.log('draw')
    }
}

const c1 = new Circle(1);
const c2 = new Circle(2)

Circle.prototype.toString = function () {
    return `circle with radius` + this.radius;
}