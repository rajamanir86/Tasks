let median = function(a, b) {
    c = a.concat(b);
    d = a.length;
    e = b.length;
    n = d + e;
    if (n % 2 == 0) {
        var z = n / 2;
        var x = c[z];
        var y = c[z - 1];
        var ans = (x + y) / 2;
        console.log(ans);
    }
    else
    {
        var z = Math.floor(n / 2);
        console.log(c[z]);
    }
}


median([1,2,3], [4,5,6,7]);