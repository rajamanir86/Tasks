((x) => {
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            console.log("odd number");
        }
    }
})([1,2,3]);