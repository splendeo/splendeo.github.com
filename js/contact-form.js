$(document).ready(function() {

  // make the "contact us" left link show the javascript contact us form with an animation 
  $("#dwp-contact-button").click(function() {
    $(".dwpcontact-page").animate({ left: parseInt($(".dwpcontact-page").css("left"),10) == 0 ? -354 :  0 });
    $("#dwp-contact-button").animate({ left: parseInt($("#dwp-contact-button").css("left"),10) == 0 ? 354 :  0 });
    return false;
  });

  // add validations to the form
  $('#contact').ajaxForm({
    success: function() {
      $('#success').fadeIn("slow");
      $('#bademail').fadeOut("slow");
      $('#contact').resetForm();
    },
    error: function() {
      $('#bademail').fadeIn("slow");
    }
  });

});

