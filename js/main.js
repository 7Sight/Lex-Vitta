// função slide
$(document).ready(function () {
  $('.slider').slider();
});

// mascara telefone
$(document).ready(function () {

  var input = $('#telefone');

  function format(mask, input) {
    var value = input.val();
    if (value.length < mask.length) {
      if (mask[value.length] != '#') {
        input.val(value + mask[value.length]);
      } else {
        input.val(value);
      }
    } else {
      return input.val(value.substring(0, mask.length - 1));
    }
  };

  input.keypress(function (item) {
    format('(##)#####-####', input);
  });

});

// ativa menu responsivo
$(document).ready(function(){
  $('.sidenav').sidenav();
});