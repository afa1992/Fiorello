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