console.log('hello to the app.js');

$( ()=> {
  // buttons
  const $bioButton = $('#bio-btn');
  const $contactButton = $('#contact-btn');
  const $resumeButton = $('#resume-btn');
  const $projectsButton = $('#projects-btn');

  // sections
  const $bio = $('#bio');
  const $contact = $('#contact');
  const $terminal = $('.terminal');
  const $resume = $('#resume');
  const $projects = $('#projects');

  // functions
  const closeAllPages = () => {
    $terminal.hide();
    $bio.hide();
    $contact.hide();
    $resume.hide();
    $projects.hide();
  };

  // listeners
  $bioButton.click( () =>{
    closeAllPages();
    $terminal.show();
    // $('#animate-bio').addClass('animate')
    $terminal.append('<h1 class="animate">$ open portfolio/bio_page<h1>');
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
    // $contact.show();
    $terminal.show();
    $terminal.append('<h1 class="animate">$ open portfolio/contacts_page<h1>');
    $('.animate').one("webkitTranstionEnd animationend otranstionsend oTransitionEnd msTransitionEnd transitionend",
      function(e) {
        // console.log('its done');
        $contact.show();
        $terminal.html('')
      })
  });

  $resumeButton.click( () =>{
    closeAllPages();
    $terminal.show();
    // $('#animate-bio').addClass('animate')
    $terminal.append('<h1 class="animate">$ open portfolio/resume<h1>');
    $('.animate').one("webkitTranstionEnd animationend otranstionsend oTransitionEnd msTransitionEnd transitionend",
      function(e) {
        // console.log('its done');
        $resume.show();
        $terminal.html('')
      }
    )
  });

  $projectsButton.click( () =>{
    closeAllPages();
    $terminal.show();
    // $('#animate-bio').addClass('animate')
    $terminal.append('<h1 class="animate">$ open portfolio/projects<h1>');
    $('.animate').one("webkitTranstionEnd animationend otranstionsend oTransitionEnd msTransitionEnd transitionend",
      function(e) {
        // console.log('its done');
        $projects.show();
        $terminal.html('')
      }
    )
  });

// header typewriter
function setupTypewriter(t) {
  var HTML = t.innerHTML;
  t.innerHTML = "";
  var cursorPosition = 0,
  tag = "",
  writingTag = false,
  tagOpen = false,
  typeSpeed = 100,
  tempTypeSpeed = 0;
  var type = function() {
    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }
    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += HTML[cursorPosition];
      }
    }
    if (!writingTag && tagOpen) {
      tag.innerHTML += HTML[cursorPosition];
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
        tempTypeSpeed = 0;
      }
      else {
        tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      }
      t.innerHTML += HTML[cursorPosition];
    }
    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = (Math.random() * typeSpeed) + 50;
      writingTag = false;
      if (tagOpen) {
        var newSpan = document.createElement("span");
        t.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }
    cursorPosition += 1;
    if (cursorPosition < HTML.length - 1) {
      setTimeout(type, tempTypeSpeed);
    }
  };
  return {
    type: type
  };
}
var typer = document.getElementById('typewriter');
typewriter = setupTypewriter(typewriter);
typewriter.type();
// end header typewriter

  closeAllPages();
});
