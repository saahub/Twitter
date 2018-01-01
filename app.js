var boton = document.getElementById('btn'); 
  //aqui llamo al boton co el id

    boton.addEventListener('click', function (){ 
    // aqui hago que responda en boton con el click

	//llamo a comment con id y guardo el value (guarda lo que ingresa)
	var comments = document.getElementById('comment').value;

	//value vacio para que quede en blanco 
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//si comment no es = a 0 retorne false alert
	if(comments.length == 0 || comments == null) {
		alert('ingresa un mensaje');
		return false;
	}

	
	//para el checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	// icono de corazon
	var heart = document.createElement('i');
	heart.classList.add('fa', 'fa-heart', 'heart');

	// icono de basura
	var trash = document.createElement('i');
	trash.classList.add('fa', 'fa-trash', 'trash');
	//nodos de texto del textarea
	var textNewComment = document.createTextNode(comments);

	var contenedorElemento = document.createElement('p');
	contenedorElemento.appendChild(textNewComment);

  var date = new Date();
	var crearHora = date.toLocaleTimeString();
	var hora = document.createTextNode(crearHora);


	//agrego div desde js y los hago padres e hijos 
	//chck trash ..son hijos de newcomment ,new comment contine 
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(contenedorElemento);
	newComments.appendChild(hora);

	cont.appendChild(newComments);
	// llamo al corazon para que con el click se ponga rojo
	document.getElementById('btn').value ='red';
	fa-heart.onclick('red');
	


});

// Para el contador 
// creo la variable intext para giardar el elemento comment (via html dom)
	var inText = document.getElementById('comment');
// inicio var contador en 0
	var contador = 0;
// tomo lo que guardo mi var intext que se ejecutara con el metodo (cuando el usuario suelte la tecla)
	inText.onkeyup = function(){
// mi funcion dice que el contador es igual a 140 menos con this puedo acceder al contexto cualquier elemento disponible 
// luego por el valor y longuitud
		contador = 140 - this.value.length;
// condicional , si el contador es mayor o igual a 1
		if(contador >=1){
// entonces obtengo el contenido del elemento ('wordCount') con innerhtml 
			document.getElementById('wordCount').innerHTML =contador;
		}
		else{
// otra condicion commet desahibiltar
			document.getElementById('comment').disabled=true;
// entregar color a wordCount
			document.getElementById('wordCount').style.color = "#ff0000";
		}
	};
