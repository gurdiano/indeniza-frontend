const drop_area = document.querySelector('.drag-area');
const drag_text = drop_area.querySelector("header");
const file_input = document.getElementById('file-input');
const file_list = document.getElementById('file-list'); 

drop_area.addEventListener(
  'dragover', event=>{
    event.preventDefault();
    drop_area.classList.add('active');
    drag_text.textContent = 'Release to upload file';
  }
);

drop_area.addEventListener(
  'dragleave', event=>{
    event.preventDefault();
    drop_area.classList.remove('active');
    drag_text.textContent = 'Drag and drop files here';
  }
);

drop_area.addEventListener(
  'drop', event=>{
    event.preventDefault();
    drop_area.classList.remove('active');
    drag_text.textContent = 'Drag and drop files here';

    const files = event.dataTransfer.files;
    handleFiles(files);
  }
);

file_input.addEventListener('change', () => {
  const files = file_input.files;
  handleFiles(files);
});

function handleFiles(files) {
  file_list.innerHTML = '';

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