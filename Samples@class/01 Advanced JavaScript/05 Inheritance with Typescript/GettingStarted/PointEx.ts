module PaintApp {
    export class PointEx extends Point {
        z: number;

        constructor(x, y, z) {
            super(x, y);

            this.z = z;
        }

        dump() {
            super.dump();

            console.log(this.z);
        }
    }
}
