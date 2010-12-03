var submitted=false;

function show_thank_you_if_submitted(){
  if(submitted) {
    $("#ajax-indicator-big").fadeOut('slow', function(){ $('#thank-you').show(); });
  }
}

function show_ajax_indicator_big(){
  $("#ss-form").hide();
  $("#ajax-indicator-big").show();
}

function activate_contact_form_validation(){
  $("#ss-form").validate( {
    submitHandler: function(form){
      show_ajax_indicator_big();
      form.submit();
    }
  });
  $("#ajax-indicator-big").hide();
  $("#thank-you").hide();
}

function show_contact_form(href){
  $.colorbox({ 
    width:'60%',
    href: href,
    onComplete: activate_contact_form_validation
  });
}

function mark_as_submitted(){
  submitted=true;
}

