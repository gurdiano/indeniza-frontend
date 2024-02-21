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
    sendFiles(files);
  }
);

file_input.addEventListener('change', () => {
  const files = file_input.files;
  sendFiles(files);
});

function create_mother (){
  const div_mother = document.createElement('div')
  div_mother.classList.add('el-0')

  file_list.appendChild(div_mother)
  return div_mother
}

function create_body (mother, file){
  const fileName = file.name;
  const div_child_0 = document.createElement('div')
  const div_child_1 = document.createElement('div')

  div_child_0.classList.add('custom-icon-3');
  div_child_1.classList.add('el-1')
  div_child_1.textContent = fileName;

  mother.appendChild(div_child_0)
  mother.appendChild(div_child_1)
}

function create_progress (mother) {
  const div_child_2 = document.createElement('div')
  div_child_2.classList.add('custom-container-6')
  div_child_2.innerHTML = '<progress class= "custom-progress-bar" value="" max="100"></progress>'
  mother.appendChild(div_child_2)

  return div_child_2
}

function create_close_icon (mother) {
  const div_child_3 = document.createElement('div')
  div_child_3.classList.add('custom-content-0')
  mother.appendChild(div_child_3)

  return div_child_3
}

function sendFiles (files){
    // file_list.innerHTML = ''
    for(var i  = 0; i < files.length ; i++){
        let xhr = new XMLHttpRequest()
        let formData = new FormData()

        const div_mother = create_mother ()
        const div_body = create_body (div_mother, files[i])
        const div_progress = create_progress (div_mother)
        const div_icon = create_close_icon (div_mother)
        const progress = div_progress.querySelector('progress')

        formData.append('file', files[i])
        xhr.open('POST', 'http://localhost:1212/upload', true)
        
        xhr.upload.onprogress = function (event){
            progress.value = (event.loaded / event.total) * 100
        }

        xhr.onload = function (){
          if (xhr.status == 200){
              progress.classList.add('expanded-content-0')
              div_icon.classList.add('custom-icon-4')
          } 
        }

        xhr.send(formData)
    }
}