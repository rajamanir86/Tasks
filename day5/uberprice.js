class Uber {
    constructor(name, traveldistance, reachtimeout, triptype) {
        this.name = name;
        this.traveldistance = traveldistance;
        this.reachtimeout = reachtimeout;
        this.triptype = triptype;

    }
    totalPriceNoraml() {
        console.log( this.traveldistance * 10); // 1 kilometers 10 rupees
    }   
    
    totalPricerush() {
        console.log( this.traveldistance * 20); // 1 kilometers 20 rupees
    }
    totalPrice() {
        if (this.triptype === "shared") {
            if (this.reachtimeout <= 20) {
                this.totalPriceNoraml();
            } else {
                this.totalPricerush();
            }    

        } else {
            if (this.reachtimeout <= 10) {
                this.totalPriceNoraml();
            } else {
                this.totalPricerush();
            }  
        }
    }
}

let uber1 = new Uber("Uber", 10, 16, "normal");
let uber2 = new Uber("Uber2", 10, 16, "shared");

uber1.totalPrice();
uber2.totalPrice();

