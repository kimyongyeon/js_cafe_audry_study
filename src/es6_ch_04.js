/**
 * 연산자
 */
export class Chapter4 {
    fnArr() {
        // 배열 원소 전부를 한번에 다른 리터널 배열 원소에 포함시켜 줍니다. 
        let arr = [1,2,3]
        let arr2 = [0, arr[0], arr[1], arr[2], 4]
        console.log(arr2 )

        let arr3 = [0, ...arr, 4]
        console.log(arr3)

        // 배열 원소 전부를 한 번에 함수 인수에 전달합니다. 
        let foo = (p1, p2, p3) => {
            console.log(p1, p2, p3)
        }
        foo(arr[0], arr[1], arr[2])
        foo(...arr)

        // 객체 속성을 전부를 한번에 다른 리터널 객체 속성에 포함시켜 줍니다. 
        let obj = {p1:1, p2:2}
        let obj2 = {p2:20, p3:30}
        obj2.p1 = obj.p1
        obj2.p2 = obj.p2
        console.log(obj2)

        let obj3 = {p2:20, p3:30, ...obj}
        console.log(obj3)

        // 객체 속성 전부를 한번에 함수 인수에 전달합니다. 
        let foo2 = (p1, p2) => {
            console.log(p1, p2)
        }
        foo(...obj)


    }

    fnArr2 () {
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
        let [a, b, ...c] = [1,2,3,4,5,6]
        console.log(a,b,c)

    }

    fnObj() {
        // let {a,b,c} = {a:100, b:200, c:300}
        // console.log(a, b, c)

        // 객체 디스터럭쳐링 변수와 같은 이름의 객체 속성이 없으면 undefinded가 할당 됩니다.
        // let {a,b,c} = {a:100, c:300}
        // console.log(a,b,c);

        // 객체 디스트럭쳐링 구문에 기본값 설정이 가능합니다. 
        let {a=1, b=2, c=3} = {a:100, c:undefined}
        console.log(a, b, c)

        // 함수 매개변수로 디스트럭쳐링 구문을 활용하고 기본값 할당
        let foo = ([a,b,c=300] = [100, 200], {d=400, e} = {d:undefined, e:500}) => {
            console.log(a,b,c,d,e)
        }
        foo()
    }
}