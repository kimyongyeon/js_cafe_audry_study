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
  }, {
    key: "fnSymbol",
    value: function fnSymbol() {
      // 문제 만들기
      var arr = [1, 2, 3];
      console.log(arr.length);
      arr.length = 100; // 내장 속성을 덮어 씌워졌다.

      console.log(arr.length); // 문제점 해결

      var length = Symbol('length'); // 심볼선언

      arr[length] = 100;
      console.log(arr[length]); // 결과는 100

      console.log(arr.length); // 결과는 3, 내장 속성이 그대로다 
      // 문제점 제시 

      arr.prop = 100;

      for (var i in arr) {
        console.log(i); // 결과는 0,1,2,prop
      } // 문제 해결
      // let = prop = Symbol('prop')
      // arr[prop] = 100
      // for (let i in arr) {
      //     console.log(i)
      // }

    }
  }, {
    key: "fnPromise",
    value: function fnPromise() {
      var cnt = 0;
      setTimeout(function () {
        cnt++; // cnt 1증가
      }, 1000);
      console.log(cnt); // 결과는 0 (지연 함수안의 구문보다 먼저 실행됨)
      // 지연 함수의 결과를 전달받기 위해 가독성이 떨어짐

      var cnt = 0;
      setTimeout(function () {
        receiveCount(cnt++);
      }, 1000);

      var receiveCount = function receiveCount($cnt) {
        cnt = $cnt;
        console.log(cnt); // 결과는 1
      }; // promise 
      // let cnt = 0
      // let promise = new Promise((res, rej) => {
      //     setTimeout(()=> {
      //         cnt++
      //         res(cnt)
      //     })
      // })
      // promise.then(($cnt) => {
      //     cnt = $cnt
      //     console.log(cnt)
      // })
      // 성공


      var promise2 = new Promise(function (r1, r2) {
        setTimeout(function () {
          r1('success');
        }, 1000);
      });
      promise2.then(function (val) {
        console.log(val);
      }); // 거절

      var promise3 = new Promise(function (r1, r2) {
        setTimeout(function () {
          r2('Failed');
        }, 1000);
      });
      promise3.then(function (val) {
        return console.log(val);
      }); // 거절이 되었으므로 호출되지 않음.

      promise3.catch(function (reason) {
        return console.log(reason);
      }); // 이행 거절시 catch 메서드 인수를 통해 거절 이유를 전달받음.
      // Promise.all(iterable)
      // 한꺼번에 여러 promise 생성자의 이행 결과를 모아 전달

      var p1 = new Promise(function (r1, r2) {
        setTimeout(function () {
          r1('p1 fulfilled');
        }, 2000); // 2초 뒤 실행
      });
      var p2 = new Promise(function (r1, r2) {
        setTimeout(function () {
          r1('p2 fulfilled');
        }, 1000); // 2초 뒤 실행
      });
      var iterable = [p1, p2];
      Promise.all(iterable).then(function (value) {
        // Promise.all 메서드를 호출하고, 인자 iterable을 전달
        console.log(value); // 결과는 ['p1 fulfilled', 'p2 fulfilled']
      }, function (reason) {
        // 모두 이행이므로 호출되지 않음.
        console.log(reason);
      }); // Promise.race(iterable) 메서드는 여러 Promise 생성자를 경합하여 가장 빠른 Promise 생성자의 이행 결과를 전달합니다.

      var p3 = new Promise(function (r1, r2) {
        setTimeout(function () {
          r1('p3 fulfilled');
        }, 2000); // 2초 뒤 실행
      });
      var p4 = new Promise(function (r1, r2) {
        setTimeout(function () {
          r1('p4 fulfilled');
        }, 1000); // 2초 뒤 실행
      }); // let iterable = [p3, p4]
      // Promise.race(iterable).then((value)=> { // Promise.all 메서드를 호출하고, 인자 iterable을 전달
      //     console.log(value) // 결과는 'p2 fulfilled' 
      // }, (reason) => { // 모두 이행이므로 호출되지 않음.
      //     console.log(reason)
      // })
    }
  }, {
    key: "fnProxy",
    value: function fnProxy() {
      // let proxy = new Proxy(target, handler);
      var target = {};
      var handler = {
        set: function set(target, key, value, receiver) {
          console.log(key, value);
          return Reflect.set(target, key, value, receiver);
        } // let proxy = new Proxy(target, handler)
        // proxy.name = 'my proxy'
        // console.log(target)

      };

      var foo = function foo() {};

      foo.prototype.a = 100;
      foo.prototype.b = 200;
      var obj = new foo(); // new 연산자를 수행하여 프로토타입 속성을 참조한 객체를 생성 

      var proxy = new Proxy(obj, {
        // Proxy 객체를 생성하고 타켓 객체를 참조 
        setPrototypeOf: function setPrototypeOf(target, proto) {
          // 트랩설정 
          var bool = Reflect.setPrototypeOf(target, proto); // 전달된 프로토타입 객체를 타켓 객체에 설정 

          console.log(bool); // 결과 true 

          return bool;
        },
        getPrototypeOf: function getPrototypeOf(target) {
          // 트랩설정 
          // 객체에 등록된 프로토타입 속성을 얻으려 할 때 이를 가로채 진행여부를 결정한다. 
          console.log('트랩호출');
          return Reflect.getPrototypeOf(target); // 타켓의 프로토타입 속성을 반환 
        }
      });
      var proto = proxy.__proto__; // 객체의 프로토타입 속성을 얻기 

      var p = Object.setPrototypeOf(proxy, {
        a: 200,
        b: 300
      });
      console.log(p.__proto__);
      console.log(proto); // 결과는 객체의 프로토타입(a:100, b:200)
      // 결과: 
      // 트랩호출
      // {a: 100, b:200}

      var obj2 = {};
      var proxy2 = new Proxy(obj2, {
        isExtensible: function isExtensible(target) {
          return Reflect.isExtensible(target); // 트랩설정 
        },
        preventExtensions: function preventExtensions(target) {
          return Reflect.preventExtensions(target); // Object.preventExtensions 동작을 가로챌 트랩 
        },
        defineProperty: function defineProperty(target, prop, desc) {
          // 트랩설정 
          Reflect.defineProperty(target, prop, desc); // 속성 추가를 진행 

          return true; // 속성 추가 여부를 반환 
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, prop) {
          return Reflect.getOwnPropertyDescriptor(target, prop);
        }
      }); // Object.preventExtensions(proxy2) // 객체에 새로운 속성이 추가되지 못하도록 설정 
      // let bool = Object.isExtensible(proxy2) // 객체에 새로운 속성이 추가 가능여부 확인 
      // console.log(bool)

      Object.defineProperty(proxy2, 'key', {
        // 객체에 설명자 (desciptor)가 있는 속성 추가 
        enumerable: false,
        configurable: false,
        writable: false,
        value: 'static'
      });
      console.log("+===========================+");
      console.log(proxy2);
      var desc = Object.getOwnPropertyDescriptor(proxy2, 'key'); // 객체에 설명자가 있는 속성 얻기 

      console.log("+===========================+");
      console.log(desc);
      var obj3 = {
        a: 100,
        b: 300
      };
      var proxy3 = new Proxy(obj3, {
        // 트랩설정 
        has: function has(target, prop) {
          // 속성 존재여부 결과를 반환 
          var result = Reflect.has(target, prop);
          return result;
        }
      });
      var bool2 = 'a' in proxy3; // in 연산자로 객체에 속성 존재여부 확인 

      console.log("+===========================+");
      console.log(bool2); // get은 되지 않았음, set만 되나?

      var obj4 = {};
      var proxy4 = new Proxy(obj4, {
        set: function set(target, prop, value, receive) {
          target[prop] = value;
          return true;
        }
      });
      proxy4.a = 100;
      console.log(proxy4.a);
      var obj5 = {
        a: 100
      };
      var proxy5 = new Proxy(obj5, {
        deleteProperty: function deleteProperty(target, prop) {
          Reflect.deleteProperty(target, prop);
          return true;
        }
      });
      var val = delete proxy5.a;
      console.log(val);
    }
  }]);

  return Chapter3;
}();

exports.Chapter3 = Chapter3;