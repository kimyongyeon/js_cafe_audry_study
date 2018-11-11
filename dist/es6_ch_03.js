"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chapter3 = void 0;

require("babel-polyfill");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 내장객체 
 */
var Chapter3 =
/*#__PURE__*/
function () {
  function Chapter3() {
    _classCallCheck(this, Chapter3);
  }

  _createClass(Chapter3, [{
    key: "fnIterator",
    value: function fnIterator() {
      var _iterator;

      var _marked =
      /*#__PURE__*/
      regeneratorRuntime.mark(gen);

      // 직접작성한코드 
      var iterator = (_iterator = {
        i: 0
      }, _defineProperty(_iterator, Symbol.iterator, function () {
        // 람다 표현식 표현 불가 
        return this;
      }), _defineProperty(_iterator, "next", function next() {
        // 람다 표현식 표현 불가 
        return this.i < 3 ? {
          value: this.i++,
          done: false
        } : {
          value: undefined,
          done: true
        };
      }), _iterator);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator2 = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator2.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          console.log(value);
        } // npm uninstall babel-cli
        // npm install @babel/cli -g : 최신버전 설치, 만약 전역으로 설치했을때는 아래의 의존성 파일들도 모두 전역으로 설치 요망.
        // npm install --save-dev @babel/core @babel/preset-env 
        // npm install --save-dev babel-polyfill
        // polyfill 추가해야함.

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      function gen() {
        return regeneratorRuntime.wrap(function gen$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return 1;

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _marked, this);
      }

      var genr = gen();
      genr.next();
    }
  }, {
    key: "fnMap",
    value: function fnMap() {
      var obj = {};

      var f = function f() {};

      var map = new Map();
      map.set(obj, 100);
      console.log(map.size);
      map.set(f, 200);
      console.log(map.size);
      map.set('a', 100).set('b', 200);
      console.log(map.size);
      var mapIter = map.entries(); // 이터레이터 반환 

      map.forEach(function (v, key) {
        console.log(v, key);
      });
      console.log(map.has('a'));
      var mapKey = map.keys(); // 키 열거 가능한 이터레이터 

      console.log(mapKey.next());
      var mapValue = map.values(); // value를 열거 가능한 이터레이터 

      var mapIter2 = map[Symbol.iterator](); // entries()와 같은 반환 

      map.clear();
      console.log(map.size);
    }
  }, {
    key: "fnSet",
    value: function fnSet() {
      // let set = new Set([1,2,3,4,5])
      // console.log(set)
      // set.add(2)
      var set = new Set();
      set.add(100);
      set.add(200);
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator3 = set[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator3.next()).done); _iteratorNormalCompletion2 = true) {
          var value = _step2.value;
          console.log(value);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      console.log(set.size);
      set.clear();
      console.log(set.size);
      var setEnt = new Set('abcdef');
      var setIter = setEnt.entries(); // 이터레이터 반환 

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator4 = setIter[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator4.next()).done); _iteratorNormalCompletion3 = true) {
          var _value = _step3.value;
          console.log(_value);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator4.return != null) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      setEnt.forEach(function (v, k) {
        return console.log(v, k);
      });
      console.log(setEnt.has('a'));
      var keys = set.keys();
      var values = set.values();
      var iters = set[Symbol.iterator]();
    }
  }, {
    key: "fnWeakMap",
    value: function fnWeakMap() {
      var obj = {};
      var weakMap = new WeakMap();
      weakMap.set(obj, 100);
      console.log(weakMap.get(obj));
    }
  }, {
    key: "fnWeakSet",
    value: function fnWeakSet() {
      var obj = {};
      var weakSet = new WeakSet();
      weakSet.add(obj);
      console.log(weakSet.has(obj));
    }
  }]);

  return Chapter3;
}();

exports.Chapter3 = Chapter3;