(function(){
    "use strict";
    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){

        //Campos de Usuario
        var nombre = document.getElementById('nombre'); 
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');
        //Campos Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_completo = document.getElementById('pase_completo');
        var pase_dosdias = document.getElementById('pase_dosdias');
        // BOTONES Y DIVS
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');
        //EXTRAS
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');

        if (document.getElementById('calcular')){
        calcular.addEventListener('click', clacularMontos);
        pase_dia.addEventListener('input', mostrarDias);
        pase_completo.addEventListener('input', mostrarDias);
        pase_dosdias.addEventListener('input', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);
        
        function validarCampos(){
            if (this.value == '') {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML ="Este campo es obligatorio";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red';   
            }else{
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            }
        }
        
        function validarMail(){
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none';
                this.style.border = '1px solid #cccccc';
            } else {
                errorDiv.style.display = 'block';
                errorDiv.innerHTML ="Debe contener un @";
                this.style.border = '1px solid red';
                errorDiv.style.border = '1px solid red'; 
            }
        }

        function clacularMontos(event){
            event.preventDefault();
            
            if (regalo.value === '') {
                alert("Debes elejir un regalo");
            } else {
                var boletosDia = parseInt(pase_dia.value,10)||0,
                    boletosCompletos = parseInt(pase_completo.value,10)||0,
                    boletos2Dias = parseInt(pase_dosdias.value,10)||0,
                    cantCamisas = parseInt(camisas.value,10)||0,
                    cantEtiquetas = parseInt(etiquetas.value,10)||0;


                var totalPagar = (boletosDia *30) + (boletosCompletos *50) +(boletos2Dias * 45) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);
                
                var listadoProductos = [];
                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + 'Pases por Día');
                }
                if (boletosCompletos >= 1) {
                    listadoProductos.push(boletosCompletos + 'Pases Completos');
                }
                if (boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + 'Pases por 2 Días');
                }
                if (cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + 'Camisas');
                }
                if (cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + 'Etiquetas');
                }
                
                lista_productos.style.display = "block";
                lista_productos.innerHTML = '';
                for(var i = 0; i < listadoProductos.length; i++){
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                    }
                suma.innerHTML= '$ ' + totalPagar.toFixed(2);
                
            }
        }

        function mostrarDias(){
        var boletosDia = parseInt(pase_dia.value,10)||0,
            boletosCompletos = parseInt(pase_completo.value,10)||0,
            boletos2Dias = parseInt(pase_dosdias.value,10)||0;
            
            var diasElejidos = [];
            if (boletosDia > 0) {
                diasElejidos.push('viernes');
            }
            if (boletosCompletos > 0) {
                diasElejidos.push('viernes','sabado','domingo');
            }
            if (boletos2Dias > 0) {
                diasElejidos.push('viernes','sabado');
            }
            
            for (var i = 0; i < diasElejidos.length; i ++) {
                document.getElementById(diasElejidos[i]).style.display = 'block';
                
            }
        }
    };


    });//DOM Content LOADED 
    
})();