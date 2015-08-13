module PaintApp {
    export class Point {
        private x: number;
        private y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;

            setTimeout(() => {
                this.x = 123;
            }, 1000);

            var arr = [1,2,3];

            var arr2 = arr.map(n => n * n);

            var arr2 = arr.map(function (n) {
                return n * n;
            });
        }

        dump() {
            console.log(this.x + ", " + this.y);
        }
    }
}