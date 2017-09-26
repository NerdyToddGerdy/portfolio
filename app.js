console.log('hello to the app.js');

$( ()=> {
  // buttons
  const $bioButton = $('#bio-btn');
  const $contactButton = $('#contact-btn');

  // sections
  const $bio = $('#bio');
  const $contact = $('#contact');


  // functions
  const closeAllPages = () => {
    $bio.hide();
    $contact.hide();
  };

  // listeners
  $bioButton.click( () =>{
    closeAllPages();
    $bio.show();
  });

  $contactButton.click( ()=> {
    closeAllPages();
    $contact.show();
  });

  closeAllPages();
});
