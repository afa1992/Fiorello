// $('.product').isotope({
//     itemSelector:'.itembox',
//     layoutMode:'fitrows'
// });
// $('.list').click(function(){
//     $('.list').removeClass('active');
//     $(this).addClass('active');
    
//     var selector=$(this).attr('data-filter');
//     $('.product').isotope({
//         filter: selector
//     });
//     return false;
// });

var $grid = $('#product-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  var $grid = $('#product-list').isotope({
    // options
  });
  // filter items on button click
  $('.categories').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });





  const BtnSubmit = document.getElementById('submit');
  const BtnType = document.getElementById('email');
  const TelBox = document.getElementById('netice');
const Box = document.getElementById('result');

if(BtnSubmit){
    BtnSubmit.addEventListener('click',(e)=>{
        e.preventDefault()
        if(BtnType.value.trim()==''){
            TelBox.innerHTML = `The field is required.`;
            TelBox.style.display='block';
        }
        else{
            Box.innerHTML=`Thank you for your message. It has been sent.`;
            Box.style.display='block';
            TelBox.style.display='none';

        }
    })
}

const Clck=document.querySelector('.open ')
const Drop=document.querySelector('.nav_box')
const Cls=document.querySelector('.close_btn')

if(Drop){ 
    Clck.addEventListener('click',()=>{
        Drop.style.display='block'
     
    })

 
}

if(Cls){
    Cls.addEventListener('click',()=>{
        Drop.style.display='none'   
        
    })

 
}







const Klk =document.querySelector('.bi-search');
const Green=document.querySelector('.search_box');
if (Klk) {
   
    Klk.addEventListener('click', (e) => { 
        e.preventDefault()

        if (Green.style.display === 'none') {
            Green.style.display = 'block';
        } else {
            Green.style.display = 'none';

        }


    })


}


const ToTop=document.querySelector('.to_top');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset>200){
        ToTop.classList.add('active');
    }
    else{
        ToTop.classList.remove('active');
    }
})




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



const Kati=document.querySelector('.categories')

const List=document.querySelector('.kater')

if (Kati) {
   
    Kati.addEventListener('click', (e) => { 
        e.preventDefault()

        if (List.style.display === 'none') {
            List.style.display = 'block';
        } else {
            List.style.display = 'none';

        }


    })


}

// const Src =document.querySelector('.search')
// const Bx =document.querySelector('.search_box')


// const slider=document.querySelector('input')
// const value=document.querySelector('.value')

// value.textContent = slider.value;

// slider.oninput=function(){
//     value.textContent=this.value;
   
// }


const rangeInput=document.querySelectorAll('.range input');
const priceInput=document.querySelectorAll('.field input');
const progress=document.querySelector('.slider .progress');

rangeInput.forEach(input=>{
    input.addEventListener('input',()=>{
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

       
        
        priceInput[0].value=minVal;
        priceInput[1].value=maxVal;
        
        
    })
})