let names = [];

Array.prototype.distinct = () => {
    const result = Array.from(new Set(names.map(s => s.name)))
    .map(nm => {
        return {
            id: names.find(s => s.name === nm).id,
            name: nm
        }
    });
    return result;
};

let Index = {
  init: () => {
    // console.log("index start");
  },
  btnCreate: e => {
    e.preventDefault();
    // console.log("btnCreate called");

    // let nameArray = names.map(i => {
    //     let m = Index.setSringToJsonData(i);
    //     return m.name;
    // });
    // console.log(nameArray);

    Index.models.name = document.getElementById("viewName").value;
    Index.models.id = Index.uuid();
    // localstorage에 저장할때만 아래와 같이 사용하면 됨.
    // names.push(Index.setJsonDataToString(Index.models));
    names.push(Index.models);

    console.log(`
            ${JSON.stringify(names.distinct())}
    `);

    // 숙제: Set처리하는 방법 알아보기
    // let setNames = new Set(names);
    // names = Array.from(setNames);
    // names = [];
    // let newNames = Index.filterNames(names, Index.models.name); // 1차
    // let newNames = Index.filterNewNames(names); // 2차 
    let newNames = names.distinct(); // 3차
    delete names;
    names = newNames;
    // 숙제: 아래와 같이 구현 할수 있도록 연구해 보기 바람.
    // let names2 = names.distinct().list();
    // console.log(">>>>>>>>>>>>>>> " + names);
    Index.draw();
  },
  filterNewNames: (names) => { // 새로운 ES6 문법을 이용한 distinct 방식 
      const result = Array.from(new Set(names.map(s => s.name)))
      .map(nm => {
          return {
              id: names.find(s => s.name === nm).id,
              name: nm
          }
      });
      return result;
  },
  filterNames: (names, inputName) => { // 예전 방식 
    // 숙제: filter, map으로 처리하는 방법 알아보기
    // let resultFilterNames = names.map(i => {
    //     let model = Index.setSringToJsonData(i);
    //     if (model.name == inputName) {
    //         continue;
    //     }
    // });
    let resultFilterNames = [];
    let doubleCount = 0;
    for (name of names) {
      let model = Index.setSringToJsonData(name);
      // console.log(">>>>>>>>>>>>>> for of model: " + model.name);
      if (model.name == inputName) {
        doubleCount++;
      }
      if (doubleCount > 1) {
        continue;
      }
      let newModel = {
        id: model.id,
        name: model.name
      };
      // console.log(">>>>>>>>>>>>> for of newModel: " + newModel);
      resultFilterNames.push(Index.setJsonDataToString(newModel));
    }
    return resultFilterNames;
  },
  btnSave: e => {
    e.preventDefault();
    // console.log("db 저장합니다. ");
  },
  btnTotalClear: e => {
    e.preventDefault();
    // console.log("전체삭제");
    names = [];
    Index.draw();
  },
  btnStart: e => {
    e.preventDefault();
    // console.log("복불복 시작");
  },
  setJsonDataToString: data => JSON.stringify(data),
  setSringToJsonData: data => JSON.parse(data),
  uuid: () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4());
  },
  btnRowRemove: (e, id) => {
    // console.log("한행 삭제: " + id);
    let filterNames = names
      .filter(i => {
        let model = Index.setSringToJsonData(i);
        return model.id != id;
      })
      .map(i => i);
    // console.log("filterNames: " + filterNames);
    delete names;
    names = filterNames;
    Index.draw();
  },
  btnRowEdit: (e, model) => {
    console.log("한행 수정");
  },
  btnRowComplete: e => {
    console.log("한행 완료");
  },
  draw: () => {
    // console.log("draw");
    // console.log(Index.models);
    // console.log(names);
    let tbodyHtml = "";
    names.map(i => {
    //   let model = Index.setSringToJsonData(i);
      tbodyHtml += `
        <tr>
            <td>${i.id}</td>
            <td>${i.name}</td>
            <td>
                <button onclick="Index.btnRowRemove(event, '${i.id}');">삭제</button>
                <button onclick="Index.btnRowEdit(event, ${JSON.stringify(i)});">수정</button>
                <button onclick="Index.btnRowComplete(event, ${JSON.stringify(i)});">완료</button>
            </td>
        </tr>
        `;
    });
    // let tbodyHtml = `
    //     <tr>
    //         <td>${Index.models.id}</td>
    //         <td>${Index.models.name}</td>
    //     </tr>
    // `;
    document.querySelector("#historyList > tbody").innerHTML = tbodyHtml;
  },
  dao: {
    // localStorage
    findByOne: where => {
      console.log("한행을 찾습니다.");
    },
    findByAll: where => {
      console.log("여러행을 찾습니다.");
    },
    update: where => {
      console.log("한행을 수정 합니다.");
    },
    insert: model => {
      console.log("한행을 추가 합니다.");
    },
    delete: where => {
      console.log("한 행을 삭제 합니다.");
    }
  },
  models: {
    id: "",
    name: ""
  }
};
