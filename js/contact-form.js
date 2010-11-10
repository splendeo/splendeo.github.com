var submitted=false;

function show_thank_you_if_submitted(){
  if(submitted) {
    $("#ss-form").fadeOut('slow', function(){ $('#thank-you').show(); });
  }
}

function activate_contact_form_validation(){
  $("#ss-form").validate();
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

