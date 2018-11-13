import "babel-polyfill"
/**
 * 내장객체 
 */
export class Chapter3 {
    fnIterator() {
        // 직접작성한코드 
        let iterator = {
            i:0,
            [Symbol.iterator]: function(){ // 람다 표현식 표현 불가 
                return this;
            },
            next: function() { // 람다 표현식 표현 불가 
                return (this.i < 3) ? {value:this.i++, done:false} : {value:undefined, done:true}
            }
        }
        for(let value of iterator) {
            console.log(value)
        }
        // npm uninstall babel-cli
        // npm install @babel/cli -g : 최신버전 설치, 만약 전역으로 설치했을때는 아래의 의존성 파일들도 모두 전역으로 설치 요망.
        // npm install --save-dev @babel/core @babel/preset-env 
        // npm install --save-dev babel-polyfill
        // polyfill 추가해야함.
        function* gen() {
            yield 1
        }
        let genr = gen()
        genr.next()
       
    }

    fnMap() {
        let obj = {}
        let f = function(){};
        let map = new Map()
        map.set(obj, 100 )
        console.log(map.size)

        map.set(f, 200)
        console.log(map.size)

        map.set('a',100).set('b',200)
        console.log(map.size)

        let mapIter = map.entries() // 이터레이터 반환 
        map.forEach((v, key) => {
            console.log(v, key)
        }) 

        console.log(map.has('a'))

        let mapKey = map.keys() // 키 열거 가능한 이터레이터 
        console.log(mapKey.next()) 
        let mapValue = map.values() // value를 열거 가능한 이터레이터 

        let mapIter2 = map[Symbol.iterator](); // entries()와 같은 반환 

        map.clear()
        console.log(map.size)
    }

    fnSet() {
        // let set = new Set([1,2,3,4,5])
        // console.log(set)
        // set.add(2)

        let set = new Set()
        set.add(100)
        set.add(200)
        for (let value of set) {
            console.log(value)
        }
        console.log(set.size)
        set.clear()
        console.log(set.size)

        let setEnt = new Set('abcdef');
        let setIter = setEnt.entries(); // 이터레이터 반환 
        for (let value of setIter) {
            console.log(value)
        }
        setEnt.forEach((v, k) => console.log(v, k))

        console.log(setEnt.has('a'))

        let keys = set.keys()
        let values = set.values()
        let iters = set[Symbol.iterator]();


    }

    fnWeakMap() {
        let obj = {}
        let weakMap = new WeakMap()
        weakMap.set(obj, 100)
        console.log(weakMap.get(obj))
    }

    fnWeakSet() {
        let obj = {}
        let weakSet = new WeakSet()
        weakSet.add(obj)
        console.log(weakSet.has(obj))
    }

    fnSymbol() {
        // 문제 만들기
        let arr = [1,2,3]
        console.log(arr.length)
        arr.length = 100 // 내장 속성을 덮어 씌워졌다.
        console.log(arr.length)

        // 문제점 해결
        const length = Symbol('length'); // 심볼선언
        arr[length] = 100;
        console.log(arr[length]) // 결과는 100
        console.log(arr.length) // 결과는 3, 내장 속성이 그대로다 
        
        // 문제점 제시 
        arr.prop = 100
        for (let i in arr ) {
            console.log(i) // 결과는 0,1,2,prop
        }

        // 문제 해결
        // let = prop = Symbol('prop')
        // arr[prop] = 100
        // for (let i in arr) {
        //     console.log(i)
        // }

    }

    fnPromise() {
        var cnt = 0
        setTimeout(() => {
            cnt++; // cnt 1증가
        }, 1000)

        console.log(cnt) // 결과는 0 (지연 함수안의 구문보다 먼저 실행됨)

        // 지연 함수의 결과를 전달받기 위해 가독성이 떨어짐
        var cnt = 0
        setTimeout(()=> {
            receiveCount(cnt++) 
        }, 1000)
        var receiveCount = ($cnt) => {
            cnt = $cnt;
            console.log(cnt) // 결과는 1
        }
        // promise 
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
        let promise2 = new Promise((r1, r2) => {
            setTimeout(()=> {
                r1('success');

            }, 1000)
        })
        promise2.then((val)=> {
            console.log(val)
        })

        // 거절
        let promise3 = new Promise((r1, r2) => {
            setTimeout(()=>{
                r2('Failed')
            }, 1000)
        })
        promise3.then((val)=> console.log(val)) // 거절이 되었으므로 호출되지 않음.
        promise3.catch((reason) => console.log(reason)) // 이행 거절시 catch 메서드 인수를 통해 거절 이유를 전달받음.

        // Promise.all(iterable)
        // 한꺼번에 여러 promise 생성자의 이행 결과를 모아 전달
        let p1 = new Promise((r1, r2) => {
            setTimeout(() => {
                r1('p1 fulfilled')
            }, 2000) // 2초 뒤 실행
        })
        let p2 = new Promise((r1, r2) => {
            setTimeout(() => {
                r1('p2 fulfilled')
            }, 1000) // 2초 뒤 실행
        })
        let iterable = [p1, p2]
        Promise.all(iterable).then((value)=> { // Promise.all 메서드를 호출하고, 인자 iterable을 전달
            console.log(value) // 결과는 ['p1 fulfilled', 'p2 fulfilled']
        }, (reason) => { // 모두 이행이므로 호출되지 않음.
            console.log(reason)
        })
        // Promise.race(iterable) 메서드는 여러 Promise 생성자를 경합하여 가장 빠른 Promise 생성자의 이행 결과를 전달합니다.
        let p3 = new Promise((r1, r2) => {
            setTimeout(() => {
                r1('p3 fulfilled')
            }, 2000) // 2초 뒤 실행
        })
        let p4 = new Promise((r1, r2) => {
            setTimeout(() => {
                r1('p4 fulfilled')
            }, 1000) // 2초 뒤 실행
        })
        // let iterable = [p3, p4]
        // Promise.race(iterable).then((value)=> { // Promise.all 메서드를 호출하고, 인자 iterable을 전달
        //     console.log(value) // 결과는 'p2 fulfilled' 
        // }, (reason) => { // 모두 이행이므로 호출되지 않음.
        //     console.log(reason)
        // })
    }

    fnProxy() {
        // let proxy = new Proxy(target, handler);
        let target = {}
        let handler = {
            set: (target, key, value, receiver) => {
                console.log(key, value)
                return Reflect.set(target, key, value, receiver)
            }
        }
        // let proxy = new Proxy(target, handler)
        // proxy.name = 'my proxy'
        // console.log(target)
        let foo = () => {}
        foo.prototype.a = 100
        foo.prototype.b = 200
        let obj = new foo() // new 연산자를 수행하여 프로토타입 속성을 참조한 객체를 생성 
        let proxy = new Proxy(obj, { // Proxy 객체를 생성하고 타켓 객체를 참조 
            setPrototypeOf: (target, proto) => { // 트랩설정 
                let bool = Reflect.setPrototypeOf(target, proto); // 전달된 프로토타입 객체를 타켓 객체에 설정 
                console.log(bool) // 결과 true 
                return bool;
            },
            getPrototypeOf: (target) => { // 트랩설정 
                // 객체에 등록된 프로토타입 속성을 얻으려 할 때 이를 가로채 진행여부를 결정한다. 
                console.log('트랩호출')
                return Reflect.getPrototypeOf(target) // 타켓의 프로토타입 속성을 반환 
            }
        })
        let proto = proxy.__proto__; // 객체의 프로토타입 속성을 얻기 
        let p = Object.setPrototypeOf(proxy, {a: 200, b:300})
        console.log(p.__proto__)
        console.log(proto) // 결과는 객체의 프로토타입(a:100, b:200)
        // 결과: 
        // 트랩호출
        // {a: 100, b:200}

        let obj2 = {}
        let proxy2 = new Proxy(obj2, {
            isExtensible: (target) => {
                return Reflect.isExtensible(target) // 트랩설정 
            },
            preventExtensions: (target) => {
                return Reflect.preventExtensions(target) // Object.preventExtensions 동작을 가로챌 트랩 
            },
            defineProperty: (target, prop, desc) => { // 트랩설정 
                Reflect.defineProperty(target, prop, desc) // 속성 추가를 진행 
                return true // 속성 추가 여부를 반환 
            },
            getOwnPropertyDescriptor: (target, prop) => {
                return Reflect.getOwnPropertyDescriptor(target, prop);
            }
        })
        // Object.preventExtensions(proxy2) // 객체에 새로운 속성이 추가되지 못하도록 설정 
        // let bool = Object.isExtensible(proxy2) // 객체에 새로운 속성이 추가 가능여부 확인 
        // console.log(bool)

        Object.defineProperty(proxy2, 'key', { // 객체에 설명자 (desciptor)가 있는 속성 추가 
            enumerable: false,
            configurable: false,
            writable: false,
            value: 'static'
        })
        console.log("+===========================+")
        console.log(proxy2)

        let desc = Object.getOwnPropertyDescriptor(proxy2, 'key') // 객체에 설명자가 있는 속성 얻기 
        console.log("+===========================+")
        console.log(desc)

        let obj3 = {a:100, b:300}
        let proxy3 = new Proxy(obj3, { // 트랩설정 
            has:(target, prop) => { // 속성 존재여부 결과를 반환 
                let result = Reflect.has(target, prop);
                return result;
            }
        })
        let bool2 = 'a' in proxy3 // in 연산자로 객체에 속성 존재여부 확인 
        console.log("+===========================+")
        console.log(bool2)

        // get은 되지 않았음, set만 되나?
        let obj4 = {};
        let proxy4 = new Proxy(obj4, {
            set:(target, prop, value, receive) => {
                target[prop] = value
                return true;
            }
        })
        proxy4.a = 100
        console.log(proxy4.a)

        let obj5 = {a:100}
        let proxy5 = new Proxy(obj5, {
            deleteProperty:(target, prop) => {
                Reflect.deleteProperty(target, prop)
                return true;
            }
        })
        let val = delete proxy5.a
        console.log(val)
    }
}