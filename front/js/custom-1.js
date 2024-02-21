const icon = {
  'fa-chevron-right' : 'fa-chevron-down',
  'fa-chevron-down' : 'fa-chevron-right',
}

function t_content(card) {
  var expandedContent = card.nextElementSibling;
  expandedContent.classList.toggle('expanded-content-1');

  const arrow = card.querySelector('#arrow-drop');

  if(arrow){
    const current_icon = arrow.classList[1];
    arrow.classList.remove(current_icon);
    arrow.classList.add(icon[current_icon]);
  }
} 

const btn_sidebar_t = document.getElementById('sidebarToggle');
const body_s = document.querySelector('#page-top');
const sidebar = document.querySelector('#accordionSidebar')



btn_sidebar_t.addEventListener(
  'click', event=>{
    const body_current = body_s.classList.value;
    const sidebar_current = sidebar.classList[5];
    localStorage.setItem('body', body_current);
    localStorage.setItem('sidebar', sidebar_current);
  }
);

document.addEventListener('DOMContentLoaded', event=>{
  const body_state = localStorage.getItem('body')
  const sidebar_state = localStorage.getItem('sidebar')

  if(body_state != null || body_state != undefined){
    body_s.classList.add(body_state)
  }
  if(sidebar_state != null || sidebar_state != undefined){
    sidebar.classList.add(sidebar_state)
  }
});
