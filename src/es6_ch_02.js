/**
 * 기본문법 
 */
export class Chapter2 {
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

    

    
}