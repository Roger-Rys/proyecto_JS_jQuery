$(document).ready(function(){

	//Slider
	if(window.location.href.indexOf('index')>-1){
		$('.slider').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200
	  	});
	}
	 
	
	//POSTS
	if(window.location.href.indexOf('index')>-1){
		var posts = [
			{/// 'Publicado: '+ moment().day()+' de '+ moment().format('MMMM')+' del '+moment().format('YYYY')
				title:'Prueba de titulo 1',
				date: 'Publicado: '+ moment().date()+' de '+ moment().format('MMMM')+' del '+moment().format('YYYY'),
				content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando '
			},
			{
				title:'Prueba de titulo 2',
				date: 'Publicado: '+ moment().date()+' de '+ moment().format('MMMM')+' del '+moment().format('YYYY'),
				content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando '
			},
			{
				title:'Prueba de titulo 3',
				date: 'Publicado: '+ moment().date()+' de '+ moment().format('MMMM')+' del '+moment().format('YYYY'),
				content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando '
			},
			{
				title:'Prueba de titulo 4',
				date: 'Publicado: '+ moment().date()+' de '+ moment().format('MMMM')+' del '+moment().format('YYYY'),
				content:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando '
			}
		];

		posts.forEach((item, index)=>{
			var post =`		
					<article class="post">
						<h2 id="${index}">${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>${item.content}</p>
						<a href="#${index}" class="button">Leer más</a>
					</article>
					`;

			$("#posts").append(post);			
		});
	}

	//TEMAS
	var tema =$('#theme');
	var green = $('#green');
	var blue = $('#blue');
	var red = $('#red');
	var black = $('#black');
	
	green.hover(f_OverG,f_OutG);
		function f_OverG(){green.css('background','green')}
		function f_OutG(){green.css('background','#235E3D')}
	
	blue.hover(f_OverB,f_OutB);
		function f_OverB(){blue.css('background','blue')}
		function f_OutB(){blue.css('background','#1F87C4')}
	
	red.hover(f_OverR,f_OutR);
		function f_OverR(){red.css('background','red')}
		function f_OutR(){red.css('background','#CA3413')}

	black.hover(f_OverN, f_OutN);
		function f_OverN(){black.css('background','#3d3d29')}
		function f_OutN(){black.css('background','black')}

	

	green.click(function(){
		tema.attr("href","css/green.css");	
		localStorage.setItem('tema','css/green.css');
	});
	blue.click(function(){
		tema.attr("href","css/blue.css");
		localStorage.setItem('tema','css/blue.css');
	})
	red.click(function(){
		tema.attr("href","css/red.css");
		localStorage.setItem('tema','css/red.css');
	})
	black.click(function(){
		tema.attr("href","css/black.css");
		localStorage.setItem('tema','css/black.css');
	});

	//CARGAR TEMA
	if(localStorage.getItem("tema")!=null){
		console.log(localStorage.getItem("tema"));
		var temaCargar = localStorage.getItem("tema");	
		tema.attr("href",temaCargar);	
	}

	//SUBRI TODA LA PAGINA 
	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:0
		},'slow');
		return false;
	});

	//LOGIN
	$('#login form').submit(function(){
		var name = $('[name= "name"]').val();
		var email = $('[name= "correo"]').val();
		var password = $('[name= "password"]').val();
		localStorage.setItem('nombre',name);
		localStorage.setItem('correo',email);
		localStorage.setItem('password',password);
		location.reload();	
		console.log("submit");
	});
	
	var form_name = localStorage.getItem('nombre');
	var form_email = localStorage.getItem('correo');
	if(form_name!=null && form_email!=null){
		$('#about').before('<h2>Hola '+form_name+'!!!</h2>');
		$('#about').after('<a href="#" id="logout"> Cerrar sesion');
		$("#login").hide();	
		$("#logout").click(function(){
			localStorage.clear();
			location.reload();	
		});
	}
	

	//Acordion
	if(window.location.href.indexOf('about')>-1){
		$("#acordeon").accordion();
	}

	//RELOG

	if(window.location.href.indexOf('reloj')>-1){
		setInterval(function(){
			$("#reloj").html(moment().format('LTS'));
			//or $("#reloj").text(moment().format('LTS'));
		},1000);
	}

	//Validacion
	if((window.location.href.indexOf('contact')>-1)){
		$("#form_contact").validate({
			  rules: {
			  	name: "required",
			    email: {
			      required: true,
			      email: true
			    }
			  },
			  messages: {
			    name: "Ingrese Nombre correcto",
			    email: {
			      required: "Necesitas un correo electrónico",
			      email: "Tu email debe tener el formato nombre@dominio.com"
			    }
			  }

		});
	}	
});


	


