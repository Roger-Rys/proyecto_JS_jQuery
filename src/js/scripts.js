// Empty JS for your own code to be here
$(document).ready(function(){
    //Title logo
    $("#title-logo").click(function(){
        alert("Hey, you're awesome! ");   
    })

    //Thema    
    $("#brind-color").click(function(){
        $("#thema").attr("href","css/brind-style.css");
        localStorage.setItem("tema","css/brind-style.css");
    });
    $("#night-color").click(function(){
        $("#thema").attr("href","css/night-style.css");
        localStorage.setItem("tema","css/night-style.css");
    });
    var thema = localStorage.getItem("tema");
    if(thema!=null){
        $("#thema").attr("href",thema);
    }

    //Index
    if(window.location.href.indexOf("index") > -1 ){
        
        //Posts 
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
            var parr = `
            <article class="post">
                <h3 id="${index}">${item.title}</h3>
                <span class="date">${item.date}</span>
                <p>${item.content}</p> 
                <button type="button" class="btn btn-outline-warning">
                    Ver mas
                </button>    
            </article><hr>
            `;
            $("#post").append(parr);
        }); 

        
        //Relation topics
        var relation_post = [
            {
                imag:"black.jpg",
                title:"Card title",
                desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                imag:"black.jpg",
                title:"Card title",
                desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                imag:"black.jpg",
                title:"Card title",
                desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
        ];

        relation_post.forEach((item, index)=>{
            var topic = `
            <div class="col-md-4">
                <div id=${index} class="card">
                    <img class="card-img-top" alt="Bootstrap Thumbnail ${index}" src="assets/img/${item.imag}">
                    <div class="card-block">
                        <h5 class="card-title text-warning">
                            ${item.title}
                        </h5>
                        <p class="card-text">
                            ${item.desc}
                        </p>
                        <p>
                            <a class="btn" href="#">Ver...</a>
                        </p>
                    </div>
                </div>
            </div>
            `;

            $("#relation_post").append(topic);
        });        
    }

    //Watch
    if(window.location.href.indexOf("watch") > -1 ){
        setInterval(function(){ 
            var time = moment().format('LTS');  // 3:49:16 PM
            $("#watch").html(time) ;
         }, 1000);
    }

    //Boton footer
    $(".btn_footer").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        },'slow');
        return false;            
    });    

    //scroll position
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var width = window.innerWidth;
        if(scroll >= 1084 || scroll >= 890){
            $("#titleHeader").css("background","black");
        }
        else if(scroll <= 1084 && width >= 500){
            $("#titleHeader").css("background","transparent");
        } 
        //alert(scroll);
    });
});