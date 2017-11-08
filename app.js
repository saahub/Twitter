var boton = document.getElementById('btn');

 boton.addEventListener('click', function (){
	//tenemos que tomar el texto ingresado en el textarea
	var comments = document.getElementById('comment').value;

	//limpiar el textarea
	document.getElementById('comment').value = '';

	//contenedor que esta en el html
	var cont = document.getElementById('cont');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');

	//validar que textarea tenga un msje
	if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');
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
	newComments.appendChild(chck);
	newComments.appendChild(trash);
	newComments.appendChild(heart);
	newComments.appendChild(contenedorElemento);

	cont.appendChild(newComments);

	document.getElementById('btn').value ='red';
	fa-heart.onclick('red');

})

// Para el contador 
	var inText = document.getElementById('comment');
	inText.onkeyup = function(){
		document.getElementById('wordCount').innerHTML = 'character left:'
		+ (140 - this.value.length);
	};