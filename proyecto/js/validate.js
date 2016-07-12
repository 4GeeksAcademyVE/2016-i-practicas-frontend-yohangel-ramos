$("#nombre").on("propertychange change click keyup input paste", function() {
	var nombre = $('#nombre').val();
    var nombreReg = /^[a-zA-Z]*$/;
    if(nombre.length < 3 || !nombreReg.test(nombre) ) {
		$("#nombre").attr('class', 'error');
			if (!$(".1")[0]){
				if(nombre.length < 3) {
					$("#errorMsg").append("<p class='1'>El nombre debe contener mas de tres caracteres</p>");
				} else {
					$("#errorMsg").append("<p class='1'>El nombre solo puede tener letras</p>");
				}
			} else {
				if(nombre.length < 3) {
					$(".1").html("<p class='1'>El nombre debe contener mas de tres caracteres</p>");
				} else {
					$(".1").html("<p class='1'>El nombre solo puede tener letras</p>");
				}
			}
	} else {
		$("#nombre").attr('class', 'sucess');
		$(".1").remove();
	}
});
$("#apellido").on("propertychange change click keyup input paste", function() {
	var apellido = $('#apellido').val();
    var apellidoReg = /^[a-zA-Z]*$/;
    if(apellido.length < 3 || !apellidoReg.test(apellido) ) {
        $("#apellido").attr('class', 'error');
			if (!$(".2")[0]){
				if(apellido.length < 3) {
					$("#errorMsg").append("<p class='2'>El apellido debe contener mas de tres caracteres</p>");
				} else {
					$("#errorMsg").append("<p class='2'>El apellido solo puede tener letras</p>");
				}
			} else {
				if(apellido.length < 3) {
					$(".2").html("<p class='2'>El apellido debe contener mas de tres caracteres</p>");
				} else {
					$(".2").html("<p class='2'>El apellido solo puede tener letras</p>");
				}
			}
	} else {
		$("#apellido").attr('class', 'sucess');
		$(".2").remove();
	}
});
$("#empresa").on("propertychange change click keyup input paste", function() {
	var empresa = $('#empresa').val();
    var empresaReg = /^[a-zA-Z]*$/;
    if(empresa.length < 3 || !empresaReg.test(empresa) ) {
        $("#empresa").attr('class', 'error');
			if (!$(".3")[0]){
				if(empresa.length < 3) {
					$("#errorMsg").append("<p class='3'>La empresa debe contener mas de tres caracteres</p>");
				} else {
					$("#errorMsg").append("<p class='3'>La empresa solo puede tener letras</p>");
				}
			} else {
				if(empresa.length < 3) {
					$(".3").html("<p class='3'>La empresa debe contener mas de tres caracteres</p>");
				} else {
					$(".3").html("<p class='3'>La empresa solo puede tener letras</p>");
				}
			}
	} else {
		$("#empresa").attr('class', 'sucess');
		$(".3").remove();
	}
});
$("#pais").on("propertychange change click keyup input paste", function() {
	var pais = $('#pais').val();
    var paisReg = /^[a-zA-Z]*$/;
    if(pais.length < 3 || !paisReg.test(pais) ) {
        $("#pais").attr('class', 'error');
			if (!$(".4")[0]){
				if(pais.length < 3) {
					$("#errorMsg").append("<p class='4'>El pais debe contener mas de tres caracteres</p>");
				} else {
					$("#errorMsg").append("<p class='4'>El pais solo puede tener letras</p>");
			}
		} else {
				if(pais.length < 3) {
					$(".4").html("<p class='4'>El pais debe contener mas de tres caracteres</p>");
				} else {
					$(".4").html("<p class='4'>El pais solo puede tener letras</p>");
				}
			}
	} else {
		$("#pais").attr('class', 'sucess');
		$(".4").remove();
	}
});
$("#postal").on("propertychange change click keyup input paste", function() {
	var postal = $('#postal').val();
    var postalReg = /^[0-9]*$/;
    if(postal.length < 3 || !postalReg.test(postal) ) {
        $("#postal").attr('class', 'error');
			if (!$(".5")[0]){
				if(postal.length < 3) {
					$("#errorMsg").append("<p class='5'>El codigo postal debe contener mas de tres caracteres</p>");
				} else {
					$("#errorMsg").append("<p class='5'>El codigo postal solo puede tener numeros</p>");
				}
			} else {
				if(nombre.length < 3) {
					$(".5").html("<p class='5'>El codigo postal debe contener mas de tres caracteres</p>");
				} else {
					$(".5").html("<p class='5'>El codigo postal solo puede tener numeros</p>");
				}
			}
	} else {
		$("#postal").attr('class', 'sucess');
		$(".5").remove();
	}
});
$("#email").on("propertychange change click keyup input paste", function() {
	var email = $('#email').val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(email.length < 3 || !emailReg.test(email) ) {
        $("#email").attr('class', 'error');
			if (!$(".6")[0]){
				if(email.length < 3) {
					$("#errorMsg").append("<p class='6'>El email debe contener mas de tres caracteres</p>");
				} else {
					$("#errorMsg").append("<p class='6'>El email no es valido</p>");
				}
			} else {
				if(nombre.length < 3) {
					$(".6").html("<p class='6'>El email debe contener mas de tres caracteres</p>");
				} else {
					$(".6").html("<p class='6'>El email no es valido</p>");
				}
			}
	} else {
		$("#email").attr('class', 'sucess');
		$(".6").remove();
    }
});
$("#contact").on("submit", function (e) { 
	var isError = false;
	if ($("#errorMsg").children().length != 0)
		isError = true;
	if(isError) {
		e.preventDefault();
		alert("Debe corregir los errores para enviar el formulario.");
	}
});