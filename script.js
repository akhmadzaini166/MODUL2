const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let editMode = null;

// Fungsi untuk menambahkan tugas baru
function tambahTugas() {
    const taskText = input.value.trim();
    if (taskText === '') return;

    if (editMode) {
        editMode.firstChild.textContent = taskText;
        batalEdit();
    } else {
        const newTask = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        newTask.appendChild(taskSpan);

        const editButton = document.createElement('button');
        editButton.textContent = 'Ubah';
        editButton.classList.add('edit-btn');
        editButton.addEventListener('click', () => ubahTugas(newTask));
        newTask.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Hapus';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => hapusTugas(newTask));
        newTask.appendChild(deleteButton);

        todoList.appendChild(newTask);
    }

    input.value = '';
}

// Fungsi untuk menghapus tugas
function hapusTugas(tugas) {
    todoList.removeChild(tugas);
}

// Fungsi untuk mengubah tugas
function ubahTugas(tugas) {
    if (editMode) batalEdit();
    input.value = tugas.firstChild.textContent;
    tugas.classList.add('editing');
    editMode = tugas;
    addButton.textContent = 'Simpan';
}

// Batalkan mode edit
function batalEdit() {
    if (editMode) {
        editMode.classList.remove('editing');
        editMode = null;
        addButton.textContent = 'Tambah';
    }
}

// Event listener untuk menambahkan tugas
addButton.addEventListener('click', tambahTugas);
