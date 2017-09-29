console.log('hello to the app.js');

$( ()=> {
  // buttons
  const $bioButton = $('#bio-btn');
  const $contactButton = $('#contact-btn');

  // sections
  const $bio = $('#bio');
  const $contact = $('#contact');
  const $terminal = $('.terminal');

  // functions
  const closeAllPages = () => {
    $terminal.hide();
    $bio.hide();
    $contact.hide();
  };

  // listeners
  $bioButton.click( () =>{
    closeAllPages();
    $terminal.show();
    // $('#animate-bio').addClass('animate')
    $terminal.append('<h1 class="animate">$This is a test<h1>');
    $('.animate').one("webkitTranstionEnd animationend otranstionsend oTransitionEnd msTransitionEnd transitionend",
      function(e) {
        // console.log('its done');
        $bio.show();
        $terminal.html('')
      }
    )
  });

  $contactButton.click( ()=> {
    closeAllPages();
    $contact.show();
  });

  closeAllPages();
});
