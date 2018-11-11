"use strict";

var _es6_ch_ = require("./es6_ch_02");

var _es6_ch_2 = require("./es6_ch_03");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// npm install --save-dev babel-preset-es2015
var IndexEs6 =
/*#__PURE__*/
function () {
  function IndexEs6() {
    _classCallCheck(this, IndexEs6);

    this.name = "";
    this.id = 0;
    var chapter3 = new _es6_ch_2.Chapter3(); // chapter3.fnIterator();
    // chapter3.fnMap();

    chapter3.fnSet();
  }

  _createClass(IndexEs6, [{
    key: "init",
    value: function init() {
      console.log("index_es6 start");
    }
  }, {
    key: "btnCreate",
    value: function btnCreate() {}
  }, {
    key: "filterNames",
    value: function filterNames() {}
  }, {
    key: "btnSave",
    value: function btnSave(e) {}
  }, {
    key: "btnTotalClear",
    value: function btnTotalClear(e) {}
  }, {
    key: "btnStart",
    value: function btnStart(e) {}
  }, {
    key: "setJsonDataToString",
    value: function setJsonDataToString(data) {}
  }, {
    key: "setSringToJsonData",
    value: function setSringToJsonData(data) {}
  }, {
    key: "uuid",
    value: function uuid() {}
  }, {
    key: "btnRowRemove",
    value: function btnRowRemove(e, id) {}
  }, {
    key: "btnRowEdit",
    value: function btnRowEdit(e, model) {}
  }, {
    key: "btnRowComplete",
    value: function btnRowComplete(e) {}
  }, {
    key: "draw",
    value: function draw() {}
  }, {
    key: "dao",
    value: function dao() {}
  }]);

  return IndexEs6;
}();

var index = new IndexEs6();