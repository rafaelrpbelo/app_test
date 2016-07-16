// JAVASCRIPT VERSION
//
// function inputfile() {
//   var inputs = document.querySelectorAll( '.inputfile' );
//   Array.prototype.forEach.call( inputs, function( input )
//   {
//     input.addEventListener( 'change', function( e )
//     {
//       var fileName = '';
//       if( this.files && this.files.length > 1 )
//         fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
//       else
//         fileName = e.target.value.split( '\\' ).pop();

//       if( fileName )
//         input.parentNode.querySelector('#filename').value = fileName;
//     });
//   });
// };

// document.addEventListener( 'DOMContentLoaded', inputfile, false );

$(document).ready(function(){
  var inputs = $('.inputfile');

  $.each(inputs, function(){
    $(input).on('change', function(e){
      var fileName = '';
      if (this.files && this.files.length > 1)
        fileName = ($(this).data('multiple-caption') || '').replace('{count}', this.files.length);
      else
        fileName = e.target.value.split('\\').pop();

      if (fileName)
        $(input).parent('form').find('#filename').value = fileName;
    })
  })
})
