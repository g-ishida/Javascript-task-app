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

        // 表の処理
        let addTableRow = () => {
            let row = table.insertRow(-1);

            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.innerHTML = i;
            cell2.innerHTML = taskName;
            cell3.innerHTML = 'ボタン';
        }

        addTableRow();


        // クリックでボタンを追加


        // IDのカウント用の変数
        i++;

        



        
        
    });


   



    
}