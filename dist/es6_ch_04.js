"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chapter4 = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 연산자
 */
var Chapter4 =
/*#__PURE__*/
function () {
  function Chapter4() {
    _classCallCheck(this, Chapter4);
  }

  _createClass(Chapter4, [{
    key: "fnArr",
    value: function fnArr() {
      // 배열 원소 전부를 한번에 다른 리터널 배열 원소에 포함시켜 줍니다. 
      var arr = [1, 2, 3];
      var arr2 = [0, arr[0], arr[1], arr[2], 4];
      console.log(arr2);
      var arr3 = [0].concat(arr, [4]);
      console.log(arr3); // 배열 원소 전부를 한 번에 함수 인수에 전달합니다. 

      var foo = function foo(p1, p2, p3) {
        console.log(p1, p2, p3);
      };

      foo(arr[0], arr[1], arr[2]);
      foo.apply(void 0, arr); // 객체 속성을 전부를 한번에 다른 리터널 객체 속성에 포함시켜 줍니다. 

      var obj = {
        p1: 1,
        p2: 2
      };
      var obj2 = {
        p2: 20,
        p3: 30
      };
      obj2.p1 = obj.p1;
      obj2.p2 = obj.p2;
      console.log(obj2);

      var obj3 = _objectSpread({
        p2: 20,
        p3: 30
      }, obj);

      console.log(obj3); // 객체 속성 전부를 한번에 함수 인수에 전달합니다. 

      var foo2 = function foo2(p1, p2) {
        console.log(p1, p2);
      };

      foo.apply(void 0, _toConsumableArray(obj));
    }
  }, {
    key: "fnArr2",
    value: function fnArr2() {
      // let arr = [1,2,3]
      // let a = arr[0]
      // let b = arr[1]
      // let c = arr[2]
      // console.log(a,b,c)
      // let [a,b,c] = [1,2,3]
      // console.log(a,b,c)
      // // 일부 배열 원소는 생략할 수 있습니다. 
      // let [a, ,b] = [1,2,3]
      // console.log(a, b)
      // 배열 디스트럭쳐링 구문에 기본값 할당 
      // let [a=100, b=200, c=300] = [undefined,,1000];
      // console.log(a, b, c);
      // 배열 디스트럭쳐링 구문에 나마저 패턴(rest pattern) 적용 
      var a = 1,
          b = 2,
          c = [3, 4, 5, 6];
      console.log(a, b, c);
    }
  }, {
    key: "fnObj",
    value: function fnObj() {
      // let {a,b,c} = {a:100, b:200, c:300}
      // console.log(a, b, c)
      // 객체 디스터럭쳐링 변수와 같은 이름의 객체 속성이 없으면 undefinded가 할당 됩니다.
      // let {a,b,c} = {a:100, c:300}
      // console.log(a,b,c);
      // 객체 디스트럭쳐링 구문에 기본값 설정이 가능합니다. 
      var _a$c = {
        a: 100,
        c: undefined
      },
          _a$c$a = _a$c.a,
          a = _a$c$a === void 0 ? 1 : _a$c$a,
          _a$c$b = _a$c.b,
          b = _a$c$b === void 0 ? 2 : _a$c$b,
          _a$c$c = _a$c.c,
          c = _a$c$c === void 0 ? 3 : _a$c$c;
      console.log(a, b, c); // 함수 매개변수로 디스트럭쳐링 구문을 활용하고 기본값 할당

      var foo = function foo() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [100, 200],
            _ref2 = _slicedToArray(_ref, 3),
            a = _ref2[0],
            b = _ref2[1],
            _ref2$ = _ref2[2],
            c = _ref2$ === void 0 ? 300 : _ref2$;

        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          d: undefined,
          e: 500
        },
            _ref3$d = _ref3.d,
            d = _ref3$d === void 0 ? 400 : _ref3$d,
            e = _ref3.e;

        console.log(a, b, c, d, e);
      };

      foo();
    }
  }]);

  return Chapter4;
}();

exports.Chapter4 = Chapter4;