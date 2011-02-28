$(document).ready(function() {

  // make the "contact us" left link show the javascript contact us form with an animation 
  $(".open-contact").click(function() {
    $(".dwpcontact-page").animate({ left: parseInt($(".dwpcontact-page").css("left"),10) == 0 ? -354 :  0 });
    $("#dwp-contact-button").animate({ left: parseInt($("#dwp-contact-button").css("left"),10) == 0 ? 354 :  0 });
    return false;
  });

  // add validations to the form
  $('#contact').submit(function() {
    $('#success').fadeOut("slow");
    $('#bademail').fadeOut("slow");

    var url = $(this).attr('action')
    var params = $(this).serialize()
    $.getJSON(url + '?' + params + "&callback=?", function(data) {
      if(data == true) { // success
        $('#success').fadeIn("slow");
        $('#contact')[0].reset();
      } else { // error
        $('#bademail').fadeIn("slow");
      }
    });

    return false;
  });


});

