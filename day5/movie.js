class Movie {
    constructor( title , studio, rating = 'PG') {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


    getPG() {
        console.log(`Movie name ${this.title} is rating ${this.rating}`);
    }
}

// let circle = new Circle();
// let circle = new Circle(4.5);
let movie1 = new Movie("Casino Royale","Eon Productions", "PG­13");
let movie2 = new Movie("leo", "cc");
movie2.getPG();
movie1.getPG();