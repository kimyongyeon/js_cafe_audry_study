import { Chapter2 } from './es6_ch_02';
import { Chapter3 } from './es6_ch_03';
import { Chapter4 } from './es6_ch_04';

// npm install --save-dev babel-preset-es2015
class IndexEs6 {
    constructor() {
        this.name = "";
        this.id = 0;

        const chapter4 = new Chapter4();
        // chapter3.fnIterator();
        // chapter3.fnMap();
        // chapter3.fnProxy();
        chapter4.fnObj();


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