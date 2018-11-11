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
}