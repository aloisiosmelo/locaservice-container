$(function () {
  var ZAP_NUMBER = "5581998180551";

  function send_zap_msg(msg) {
    let encoded_msg = encodeURI(msg);
    window.location.replace(
      "https://wa.me/" + ZAP_NUMBER + "?text=" + encoded_msg
    );
  }

  $(".sendZap").on("click", function () {
    send_zap_msg("Oi gostaria de solicitar orcamento e vim pelo site. ");
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() < 600 || $(document).scrollTop() > 2000) {
      $('.float-bt').hide();
    } else {
      $('.float-bt').show();
    }
  });

  function simulateTyping(myString, currentChar) {
    var delay = Math.floor(Math.random() * (250 - 50 + 1) + 50); // random between 50 and 250 milliseconds
    currentChar = currentChar || 0;

    setTimeout(function () {
      $('.typewriter').append(myString.charAt(currentChar))
      if (++currentChar < myString.length) {
        simulateTyping(myString, currentChar);
      }
    }, delay);
  }

  simulateTyping('Excelência em locação e venda de containers')
});
