const shared_bg = document.querySelector('.article__footer');

let open = false;

function shared(){
  open = !open;
  if(open){
    shared_bg.classList.add('on');
    shared_bg.classList.remove('off');
  }else{
    shared_bg.classList.remove('on');
    shared_bg.classList.add('off');
  }
}