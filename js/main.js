let button = document.querySelectorAll('.btn');
let videoSlider = document.querySelectorAll('.videos-slider');
button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      e.preventDefault();
      const filter = e.target.dataset.filter;
      videoSlider.forEach((item)=>{
        
            if(filter==='all'){
            item.style.display='none'
            }
        else{
            if(item.classList.contains(filter)){
                
                item.style.display='block'
                document.querySelector('.slider').style.display = 'none'
            }else{
               
                 item.style.display='none'
                 document.querySelector('.slider').style.display = 'none'
            }
        }
      })
        
    })
})
videoSlider.forEach((item)=>{
    item.style.display='none'
})
