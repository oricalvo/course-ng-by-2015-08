function Point(x, y) {

    var lastModifiedDate;

    return {
        dump: function () {
            console.log(x + ", " + y);
        },
        //move: function (dx, dy) {
        //    x += dx;
        //    y += dy;
        //},
    };

}

var pt1 = Point(5, 10);
var pt2 = Point(10, 20);

pt1.dump();
pt2.dump();

console.log(pt1.dump == pt2.dump);
