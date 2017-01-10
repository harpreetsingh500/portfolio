function scroll(e, amount) {
  e.preventDefault();
  amount = (amount === undefined) ? 0 : amount;

  $('body').animate({
    scrollTop: amount
  }, 1500);
}

$('#projects nav a').on('click', function(e) {
  e.preventDefault();

  $('#responsiveSites, #staticSites').hide();
  $('.highlight').removeClass('highlight');
  $(this).addClass('highlight');

  if ($(this).data('name') === 'responsive') {
    $('#responsiveSites').show();
  } else {
    $('#staticSites').show();
  }
});

$('header nav a').on('click', function(e) {
  var amount = $($(this).attr('href'))
                        .offset()
                        .top;

  scroll(e, amount);
});

$('#arrow-img').on('click', scroll);
