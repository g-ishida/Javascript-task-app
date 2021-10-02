// 他のエンジニアが似た様な実装しているやつを真似・参考にする
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

  


    // デフォルトで持っているタスク配列
    let tasks = [
        //{id:0, comment:'', status:}
    ];

    let i = 0;
    //追加をクリック、配列に追加して、表に追加する
    add.addEventListener('click', () => {

        let taskName = inputTask.value; //追加したいタスク
        inputTask.value = ""; //inputの中身を空にする
        // statuキーには作業中ボタンと完了ボタンを追加
        tasks.push({id: i, comment: taskName});//tasks配列の最後に追加

        console.log(tasks[i]); //後で削除

        // クリックでボタンを追加
        // 作業中ボタン
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '削除';
        const nowButton = document.createElement('button');
        nowButton.innerHTML = '作業中';
        
        
        // 表の処理
        // tbodyの中にtrを追加→tdを追加→inputでボタンを生成
        // appendCHildがどこに生成されるか分かってない
        const newTr = document.createElement('tr');
        tbody.appendChild(newTr);



         // IDのカウント用の変数
         i++;        
    });


   



    
}