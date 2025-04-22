var circle_function = {
    area: function(r) {
        var pi = 3.14, a;
        a = pi * r * r;
        console.log("area of circle is :"+a);
    },

    circumference: function(r) {
        var pi =3.14, c;
        c = 2 *pi * r;
        console.log("circumference of circle :"+c);
    }
};

module.exports = circle_function