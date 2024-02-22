
let rotate = function (x, y) {
    a = x
    n = y
    for (let i = 1; i <= n; i++) {
        b= a[0];
        a.shift();
        a.push(b);
    }
    console.log(a);

}

rotate([1,2,3,4,5,6,7,8,9,10], 3);