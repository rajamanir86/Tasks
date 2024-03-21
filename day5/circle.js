class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    toString() {
        //console.log(`${this.radius}`);
        //console.log(`${this.color}`);
        console.log(`radius ${this.radius} is color ${this.color}`);
    }
    getArea() {
        return Math.PI * this.radius
    }
    getCircumference() {
        return 2 * Math.PI * this.radius
    }
}


let circle1 = new Circle(4.5, "yellow");

circle1.setRadius(6.45);
circle1.setColor("red");

console.log(circle1.toString());
console.log(circle1.getRadius());

console.log(circle1.getCircumference());

console.log(circle1.getArea());
