"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var hello_world_1 = require("./hello-world");
ReactDOM.render(React.createElement(hello_world_1.default, { name: 'World' }), document.getElementById('root'));
