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

  $(window).scroll(function(){
    if($(document).scrollTop() < 600 || $(document).scrollTop() > 2000){
      $('.float-bt').hide();
    } else {
      $('.float-bt').show();
    }
  });
});
