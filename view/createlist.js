import data from '../view/data.json' assert { type: 'json'};
let count = 0;
let todo_list = document.getElementsByClassName('todo_list')[0];
data.forEach(item => {
    if(item.title){
        let list_item = document.createElement('div');
        list_item.className = 'item';

        // ========== CLIP IMAGES
        let img_div = document.createElement('div');
        img_div.className = 'img';
        let clipimg = document.createElement('img');
        (count%2==0? clipimg.setAttribute('src', './assets/media/paper-clip.png'): clipimg.setAttribute('src', './assets/media/binder-clip.png'));
        img_div.appendChild(clipimg);

        // =========== TITLE
        let h2 = document.createElement('h2');
        h2.innerHTML = item.title;
        let p = document.createElement('p');
        p.innerHTML = item.content;
        // ============ FORM ELEMENT
        let form = document.createElement('form');
        form.setAttribute('method', 'post')
        let edit_btn = document.createElement('button');
        edit_btn.innerHTML = 'EDIT';
        edit_btn.setAttribute('type','submit');

        let rmv_btn = document.createElement('button');
        rmv_btn.innerHTML = 'DELTE';
        rmv_btn.setAttribute('type','submit');
        rmv_btn.setAttribute('name',`'${item.id.toString()}'`);
        rmv_btn.setAttribute('value','delte');

        let done_btn = document.createElement('button');
        let done_img =  document.createElement('img');
        done_img.setAttribute('src', './assets/media/party.png');
        done_btn.appendChild(done_img);
        done_btn.setAttribute('type','submit');

        form.appendChild(edit_btn);
        form.appendChild(done_btn);
        form.appendChild(rmv_btn);

        // ALL APPENDING TO LIST_ITEM
        list_item.appendChild(img_div);
        list_item.appendChild(h2);
        list_item.appendChild(p);
        list_item.appendChild(form);
        // TODO LIST APPEND
        todo_list.appendChild(list_item);
        count++;
    }
});
console.log("its working");