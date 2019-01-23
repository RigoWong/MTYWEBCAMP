// Animaciones  para los numeros
    // var resumenLista = jQuery('.resumen-evento');
    // if (resumenLista.length > 0) {
    //     $('.resumen-evento').waypoint(function(){
    //         $('.resumen-evento li:nth-child(1) p ').animateNumber({number: 6}, 1600);
    //         $('.resumen-evento li:nth-child(2) p ').animateNumber({number: 15}, 1850);
    //         $('.resumen-evento li:nth-child(3) p ').animateNumber({number: 3}, 1000);
    //         $('.resumen-evento li:nth-child(4) p ').animateNumber({number: 9}, 1700);
    //     },{
    //         offset: '60%'
    //     });
    // }

    $('.resumen-evento li:nth-child(1) p ').animateNumber({number: 6}, 1600);
    $('.resumen-evento li:nth-child(2) p ').animateNumber({number: 15}, 1850);
    $('.resumen-evento li:nth-child(3) p ').animateNumber({number: 3}, 1000);
    $('.resumen-evento li:nth-child(4) p ').animateNumber({number: 9}, 1700);
// Animacion de Cuenta Regresiva
$('.cuenta-regresiva').countdown('2019/02/10 19:40:00:', function(event){
$('#dias').html(event.strftime('%D'));
$('#horas').html(event.strftime('%H'));
$('#minutos').html(event.strftime('%M'));
$('#segundos').html(event.strftime('%S'));
});