import { Chapter2 } from './es6_ch_02';
import { Chapter3 } from './es6_ch_03';

// npm install --save-dev babel-preset-es2015
class IndexEs6 {
    constructor() {
        this.name = "";
        this.id = 0;

        const chapter3 = new Chapter3();
        // chapter3.fnIterator();
        // chapter3.fnMap();
        chapter3.fnSet();

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