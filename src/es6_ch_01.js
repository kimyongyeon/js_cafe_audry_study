import "babel-polyfill"
export class Chapter1 {
    constructor() {
        console.log("Chapter1 called")
    }
    
    fnLetVar() {
        var name = "1234"
        {
            let name = "hello"
        }
        console.log(name); // ?
        
        for (var i=0; i<10; i++) {
            setTimeout(i => {
                // 비동기인 setTimeout 함수 콜백이 공유돼 실행시점이 반복문보다
                // 늦어 변수의 값이 모두 9
                console.log(i) // 모두 9
            }, 100);
        }

        for (let i=0; i<10; i++) {
            setTimeout(i => {
                console.log(i) // 0 ~ 9
            }, 100)
        }

        let a = 100
        // let a = 200 // 에러 

        // 함수 끌어올림(hosting) 안됨. 
        foo();
        let foo = () => {}
        
        console.log(aa);
        var aa = 100;

        console.log(bb);
        let bb = 20;

        // const MY_NAME; // 초기값 설정 안해서 error 
        // const MY_NAME = "kim"
        // MY_NAME = "Lee" // 재선언 불가 

    }

    fnIter() {
        // String iteration
        let str = '가나다'
        for (let value of str) {
            console.log(value) // 가, 나, 다 하나씩 출력 
        }

        // @@iterator 메서드
        let iterator = str[Symbol.iterator]();
        iterator.next();
        iterator.next();
        iterator.next();
        iterator.next();
        iterator.next();

        // 이터레이터는 본인이 구현 가능
        // let iterator = {
        //     i: 1,
        //     next: () => {
        //         return (this.i < 4) ? { value: this.i++, done: false } : {value: undefined, done: true };
        //     }
        // }

        // Array iteration
        let arr = [10, 20, 30]
        for (let value of arr) {
            console.log(value)
        }


    }

    fnForOf() {
        let str = "for of문"
        for (let value of str) {
            console.log(value);
        }
    }

    fnTaggedTemplate() {
        // 함수형`문자열1 ${표현식} 문자열2 ${표현식}`;
        let tagged = (str, a, b) => {
            let bigger;
            (a > b) ? bigger = 'A' : bigger = 'B';
            return str[0] + bigger + '가 더 큽니다.';
        }
        let a = 100;
        let b = 100;
        let str = tagged`A와 B둘중 ${a}, ${b}`;
        console.log(str);
    }

    fnTypeArray() {
        // 버퍼
        const buffer = new ArrayBuffer(16);
        console.log(buffer.byteLength);
        // 뷰 
        const view = Unit32Array(buffer)
        console.log(view)

    }

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
        // npm install @babel-cli -g : 최신버전 설치
        // npm install --save-dev @babel/core @babel/preset-env 
        // npm install --save-dev babel-polyfill
        // polyfill 추가해야함.
        function* gen() {
            yield 1
        }
        let genr = gen()
        genr.next()
       
    }

    
}