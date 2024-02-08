const drop_area = document.querySelector('.drag-area');
const drag_text = drop_area.querySelector("header");

drop_area.addEventListener(
  'dragover', event=>{
    event.preventDefault();
    drop_area.classList.add('active');
    drag_text.textContent = 'Release to upload file';
  }
)

drop_area.addEventListener(
  'dragleave', event=>{
    event.preventDefault();
    drop_area.classList.remove('active');
    drag_text.textContent = 'Drag and drop files here';
  }
)
