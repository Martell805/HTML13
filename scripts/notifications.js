let note_menu = document.getElementsByClassName('note-menu')[0];
let note_list = document.getElementsByClassName('note-list')[0];
let note_counter = document.getElementsByClassName('note-counter')[0];
let counter = 0;

function deleteNotification(note_del){
    if (!note_del.parentElement.parentElement){
        return;
    }

    counter--;

    note_del.parentElement.remove();

    note_counter.innerHTML = "" + counter;
}

function addNotification(){
    counter++;

    let note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = '<p>Уведомление ' + counter + '</p>';
    note.style.display = "flex";
    note.style.justifyContent = "space-around";
    note.style.alignItems = "center";
    note.del_func = deleteNotification;

    let del_btn = document.createElement('div');
    del_btn.classList.add('note-del');
    del_btn.classList.add('button');
    del_btn.innerHTML = '&times';

    note.appendChild(del_btn);

    note_list.appendChild(note);

    note_counter.innerHTML = '' + counter;

    setTimeout(() => {deleteNotification(del_btn)}, 3000);
}

function onNoteMenuClick(event) {
    if (event.target === note_counter) {
        addNotification();
        return;
    }

    if (event.target.classList.contains('note-del')) {
        deleteNotification(event.target);
    }
}

note_menu.onclick = onNoteMenuClick;
