var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var PaintApp;
(function (PaintApp) {
    var PointEx = (function (_super) {
        __extends(PointEx, _super);
        function PointEx(x, y, z) {
            _super.call(this, x, y);
            this.z = z;
        }
        PointEx.prototype.dump = function () {
            _super.prototype.dump.call(this);
            console.log(this.z);
        };
        return PointEx;
    })(PaintApp.Point);
    PaintApp.PointEx = PointEx;
})(PaintApp || (PaintApp = {}));
//# sourceMappingURL=PointEx.js.map