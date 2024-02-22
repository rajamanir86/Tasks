let add = (x) => {
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            console.log(x[i]);
        }
    }
}

add([1,2,7,8,6,4,2,3]);