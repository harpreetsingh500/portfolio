function scroll(e, amount) {
  e.preventDefault();
  amount = (amount === undefined) ? 0 : amount;

  $('body, html').animate({
    scrollTop: amount
  }, 1500);
}

$('#projects nav a').on('click', function(e) {
  e.preventDefault();

  $('#jquery-projects, #html-css-projects').hide();
  $('.highlight').removeClass('highlight');
  $(this).addClass('highlight');

  if ($(this).data('name') === 'jquery-projects') {
    $('#jquery-projects').show();
  } else {
    $('#html-css-projects').show();
  }
});

$('header nav a').on('click', function(e) {
  var amount = $($(this).attr('href'))
                        .offset()
                        .top;

  scroll(e, amount);
});

$('#arrow-img').on('click', scroll);
