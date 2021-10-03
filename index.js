'use strict'
{
    // http://www.fineblue206.net/archives/460
    // IDを取得
    const all = document.getElementById('all');
    const doing = document.getElementById('doing');
    const done = document.getElementById('done');
    const inputTask = document.getElementById('input-task');
    const add = document.getElementById('add');
    const table = document.getElementById('targetTable');
    const tbody = document.getElementById('tbody');

    // 
    let i = 0;

    // デフォルトで持っているタスク配列
    let tasks = [];

    const addTasks = () => {
        let taskName = inputTask.value; //追加したいタスク
        let addedTask = tasks.push({id: i, comment: taskName});
        return {a: taskName, b: addedTask};
    };

    //追加をクリック、配列に追加して、表に追加する
    add.addEventListener('click', () => {

        // let taskName = inputTask.value; //追加したいタスク
        // inputTask.value = ""; //inputの中身を空にする
        // tasks.push({id: i, comment: taskName});//tasks配列の最後に追加
        let obj = addTasks();

        // tbodyの中にtrを追加→tdを追加→inputでボタンを生成
        // appendCHildがどこに生成されるか分かってない
        // まず、tr
        const newTr = document.createElement('tr');
        tbody.appendChild(newTr);
        // そして、td、左から、
        const tableID = document.createElement('td');
        tableID.innerHTML = i;
        tbody.appendChild(tableID);
        // タスク名
        const tableTask = document.createElement('td');
        tableTask.innerHTML = obj.a;
        tbody.appendChild(tableTask);
        //ボタンを２つ追加
        // 作る
        const nowButton = document.createElement('button');
        nowButton.innerHTML = '作業中';
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '削除';
        // 追加
        tbody.appendChild(nowButton);
        tbody.appendChild(deleteButton);


         // IDのカウント用の変数
         i++;
        //  空にする
        inputTask.value = "";
    });
}