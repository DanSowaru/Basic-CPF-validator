console.log("Javascript iniciado");

validaCPF = (cpf) => {
	if (cpf.length != 11) {
		return false;
	} else {
		var numeros = cpf.substring(0, 9); //a partir do index 0, pega os 9 primeiros caracteres;
		var digitos = cpf.substring(9); // a partir do index 9, pega o restante da string;

		let soma = 0;
		for (let i = 10; i > 1; i--) {
			soma += numeros.charAt(10 - i) * i;
		}

		let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		// validacao do primeiro digito
		if (resultado != digitos.charAt(0)) {
			return false;
		}

		soma = 0;
		numeros = cpf.substring(0, 10);

		for (let k = 11; k > 1; k--) {
			soma += numeros.charAt(11 - k) * k;
		}

		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

		if (resultado != digitos.charAt(1)) {
			return false;
		}

		return true;
	}
};

function validacao() {
	document.querySelector("#error").style.display = "none";
	document.querySelector("#success").style.display = "none";
	console.log("Validando CPF");
	var cpf = document.getElementById("cpf_digitado").value;
	var resultadoValidacao = validaCPF(cpf);

	if (resultadoValidacao) {
		document.querySelector("#success").style.display = "block";
	} else {
		document.querySelector("#error").style.display = "block";
	}
}
