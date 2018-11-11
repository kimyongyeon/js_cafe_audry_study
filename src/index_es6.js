import { Chapter1 } from './es6_ch_01';

// npm install --save-dev babel-preset-es2015
class IndexEs6 {
    constructor() {
        this.name = "";
        this.id = 0;

        const chapter1 = new Chapter1();
        chapter1.fnIterator();

    }
    init() {
        console.log("index_es6 start");
    }
    btnCreate() {}
    filterNames() {}
    btnSave(e) {}
    btnTotalClear(e) {}
    btnStart(e) {}
    setJsonDataToString(data) {}
    setSringToJsonData(data) {}
    uuid() {}
    btnRowRemove(e, id) {}
    btnRowEdit(e, model) {}
    btnRowComplete(e) {}
    draw() {}
    dao() {}

}

let index = new IndexEs6()