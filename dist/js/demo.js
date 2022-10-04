(function ($) {
  'use strict'

  $(document).on('change','.custom-file-input',function(){
      //get the file name
      var fileName = $(this).val();
      fileName = fileName.replace('C:\\fakepath\\', " ");
      //replace the "Choose a file" label
      $(this).next('.custom-file-label').html(fileName);
  })
})(jQuery)
