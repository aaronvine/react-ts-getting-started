"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function () {
        return React.createElement("div", null,
            "Hello ",
            this.props.name);
    };
    return HelloWorld;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelloWorld;
