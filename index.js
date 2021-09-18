'use strict'
{
    // IDを取得
    const all = document.getElementById('all');
    const doing = document.getElementById('doing');
    const done = document.getElementById('done');
    const inputTask = document.getElementById('input-task');
    const add = document.getElementById('add');

    add.addEventListener('click', () => {
        let taskName = inputTask.value;
        console.log(taskName);
        inputTask.value = ""; //inputの中身を空にする
    });
    
}