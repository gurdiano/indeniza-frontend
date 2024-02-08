const file_input = document.getElementById('file-input');
const file_list = document.getElementById('file-list');

file_input.addEventListener('change', updateFileList);

function updateFileList() {
    file_list.innerHTML = '';
    const files = file_input.files;

    for (let i = 0; i < files.length; i++) {
        const fileName = files[i].name;

        const div_mother = document.createElement('div');
        div_mother.classList.add('el-0');

        const div_child_0 = document.createElement('div');
        div_child_0.classList.add('custom-icon-3');

        const div_child_1 = document.createElement('div');
        div_child_1.classList.add('el-1');

        div_mother.appendChild(div_child_0);
        div_mother.appendChild(div_child_1);
        file_list.appendChild(div_mother);

        div_child_1.textContent = fileName;
    }
}