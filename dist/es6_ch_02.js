"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chapter2 = void 0;

function _templateObject() {
  var data = _taggedTemplateLiteral(["A\uC640 B\uB458\uC911 ", ", ", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 기본문법 
 */
var Chapter2 =
/*#__PURE__*/
function () {
  function Chapter2() {
    _classCallCheck(this, Chapter2);

    console.log("Chapter1 called");
  }

  _createClass(Chapter2, [{
    key: "fnLetVar",
    value: function fnLetVar() {
      var name = "1234";
      {
        var _name = "hello";
      }
      console.log(name); // ?

      for (var i = 0; i < 10; i++) {
        setTimeout(function (i) {
          // 비동기인 setTimeout 함수 콜백이 공유돼 실행시점이 반복문보다
          // 늦어 변수의 값이 모두 9
          console.log(i); // 모두 9
        }, 100);
      }

      for (var _i = 0; _i < 10; _i++) {
        setTimeout(function (i) {
          console.log(i); // 0 ~ 9
        }, 100);
      }

      var a = 100; // let a = 200 // 에러 
      // 함수 끌어올림(hosting) 안됨. 

      foo();

      var foo = function foo() {};

      console.log(aa);
      var aa = 100;
      console.log(bb);
      var bb = 20; // const MY_NAME; // 초기값 설정 안해서 error 
      // const MY_NAME = "kim"
      // MY_NAME = "Lee" // 재선언 불가 
    }
  }, {
    key: "fnIter",
    value: function fnIter() {
      // String iteration
      var str = '가나다';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var value = _step.value;
          console.log(value); // 가, 나, 다 하나씩 출력 
        } // @@iterator 메서드

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var iterator = str[Symbol.iterator]();
      iterator.next();
      iterator.next();
      iterator.next();
      iterator.next();
      iterator.next(); // 이터레이터는 본인이 구현 가능
      // let iterator = {
      //     i: 1,
      //     next: () => {
      //         return (this.i < 4) ? { value: this.i++, done: false } : {value: undefined, done: true };
      //     }
      // }
      // Array iteration

      var arr = [10, 20, 30];

      for (var _i2 = 0; _i2 < arr.length; _i2++) {
        var _value = arr[_i2];
        console.log(_value);
      }
    }
  }, {
    key: "fnForOf",
    value: function fnForOf() {
      var str = "for of문";
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = str[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var value = _step2.value;
          console.log(value);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "fnTaggedTemplate",
    value: function fnTaggedTemplate() {
      // 함수형`문자열1 ${표현식} 문자열2 ${표현식}`;
      var tagged = function tagged(str, a, b) {
        var bigger;
        a > b ? bigger = 'A' : bigger = 'B';
        return str[0] + bigger + '가 더 큽니다.';
      };

      var a = 100;
      var b = 100;
      var str = tagged(_templateObject(), a, b);
      console.log(str);
    }
  }, {
    key: "fnTypeArray",
    value: function fnTypeArray() {
      // 버퍼
      var buffer = new ArrayBuffer(16);
      console.log(buffer.byteLength); // 뷰 

      var view = Unit32Array(buffer);
      console.log(view);
    }
  }]);

  return Chapter2;
}();

exports.Chapter2 = Chapter2;