let uniq = function (x) {
    b = []
    for (let i = 0; i < x.length; i++) {
        if (b.includes(x[i]) != true) {
            b.push(x[i]);
        }  
            //console.log(a[i]);
    }
    console.log(b);
}

uniq(["a", 1, 1, "a", "c", 2, 3])
