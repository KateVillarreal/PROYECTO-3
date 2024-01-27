/*var letras = ["a","k","d","f","h","p"];
letras.shift();
console.log(letras);

var nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"];
var masculinos = nombres.slice(1, 3);
console.log(masculinos)


var productos = ["leche","carne","pan","queso","jamón","arroz"];
productos.splice(2,3,"mermelada");
console.log(productos);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);



const edad = [17, 18, 17, 15, 19, 15, 19, 16];
const found = edad.find((element) => element > 16);
console.log(found);

const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber));

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result); 


//BÚSQUEDA Y MODIFICACIÓN EN ARRAYS.

//MÉTODO MAP 
var numerosFav = [8,4,7,10,2,9];
var numerosModificados = numerosFav.map(num=> num * 2);
console.log(numerosModificados);



var inventario = [
    { nombre: "manzanas", cantidad: 2 },
    { nombre: "bananas", cantidad: 0 },
    { nombre: "cerezas", cantidad: 5 },
  ];
  
  function esCereza(fruta) {
    return fruta.nombre === "cerezas";
  }
  
  console.log(inventario.find(esCereza));




var perro1 = {}
perro1.raza = "Pastor Alemán";
perro1.nombre = "Rocket";
perro1.tamaño = "Mediano";

var perro2 = {}
perro2.raza = "Husky";
perro2.nombre = "Max";
perro2.tamaño = "Grande"; 

var perros = []
perros.push(perro1,perro2)
console.log(perros)



var chicasTec = []

var chica1 = {}
chica1.nombre = "Kate";
chica1.edad = 18;
chica1.nacionalidad = "Venezolana";

var chica2 = {}
chica2.nombre = "Georgina";
chica2.edad = 15;
chica2.nacionalidad = "Venezolana";

var chica3 = {}
chica3.nombre = "María";
chica3.edad = 19;
chica3.nacionalidad = "Peruana";
console.log(chicasTec)
var found = chicasTec.find(chica => chica.nacionalidad == "Venezolana");
console.log(found);
*/


$(document).ready(function(){

  mostrarTodosJSON(); //se van a mostrar todos los cantantes
  $("#botonLimpiar").click(function(e){
      e.preventDefault();
      limpiar();
  });
  


  $("#botonMostrarTodos").click(function(e){
      e.preventDefault();
      limpiar();
      mostrarTodosJSON();
  });
  


  $("#search-button").click(function(e){
    e.preventDefault();
   
    var nombreCantante = $("#search-input").val();
    if (nombreCantante){
      buscarCantanteJSON(nombreCantante);
    }
    limpiar();
   
    var CantanteEncontrado = data.cantantes.find(cantantes => cantantes.nombre == nombreCantante);
});
  
  });
  
  $("#mostrarEstadisticas").click(function(e){
    e.preventDefault();
    
    mostrarEstadisticas();
});

  
  function limpiar(){
      $("#pictures-container").empty();
  }
  
  function mostrarTodosJSON(){
      $.ajax({
  
          type: "GET",
          url: "twoassets/json/data.json",
          dataType: "json",
          async: true,
          success: function(data){
              
             mostrarTodos(data)
  
          }
  
      });
  }

  function buscarCantanteJSON(){
    $.ajax({

        type: "GET",
        url: "twoassets/json/data.json",
        dataType: "json",
        async: true,
        success: function(data){
            
           mostrarTodos(data)

        }

    });
}
  
  function mostrarTodos(data){
      
      for(let i=0; i<data.cantantes.length;i++){
          var cantantes = data.cantantes[i];
          crearCard(cantantes);
      }
  }


  function crearCard(cantantes){ console.log(cantantes)
    //creando la cartilla del cantante
    let divCard = $("<div></<div>");
    divCard.addClass("card");

    //creando el nombre del cantante
    let nombre = $("<h3></h3>");
    nombre.append(cantantes.nombre);
    nombre.addClass("nombre");
    divCard.append(nombre);

    //creando la imagen del cantante
   let imagen = $("<img></img>");
    imagen.attr("src",cantantes.imagen);

    // creando el nacimiento del cantante
    let nacimiento = $("<p></p>");
    nacimiento.append("Fecha de Nacimiento: "+cantantes.nacimiento.fecha+" "+ "Lugar: "+cantantes.nacimiento.lugar);
    nacimiento.addClass("nacimiento");

    //creando la profesion del cantante
    let profesion = $("<p></p>");
    profesion.append("Profesión: "+cantantes.profesion);
    profesion.addClass("profesion");

    //creando el genero del cantante
    let genero = $("<p></p>");
    genero.append("Género: "+cantantes.genero);
    genero.addClass("genero");

    //creando los albumes del cantante
    let albums = $("<p></p>");
    albums.append("Álbumes: "+cantantes.albums.titulo+ " "+ cantantes.albums.año);
    albums.addClass("albums");

    //creando los premios del cantante
    let premios = $("<p></p>");
    premios.append("Premios: "+cantantes.premios);
    premios.addClass("premios");

    //creando la fecha del cantante
    let fecha = $("<p></p>");
    fecha.append(cantantes.fecha);
    fecha.addClass("fecha");

    //creando los premios del cantante
    let lugar = $("<p></p>");
    lugar.append(cantantes.lugar);
    lugar.addClass("lugar");


    divCard.append(nombre);//colocando el nombre del cantante en la cartilla
    divCard.append(profesion);//colocando la profesion del cantante en la cartilla
    divCard.append(nacimiento);//colocando el nacimiento del cantante en la cartilla
    divCard.append(imagen);//colocando la imagen del cantante en la cartilla
    divCard.append(genero);//colocando el genero del cantante en la cartilla
    divCard.append(albums);//colocando los albumes del cantante en la cartilla
    divCard.append(premios);//colocando los premios del cantante en la cartilla
    divCard.append(fecha);//colocando la fecha del cantante en la cartilla
    divCard.append(lugar);//colocando el lugar del cantante en la cartilla





    $("#pictures-container").append(divCard); //agregando la cartilla al contenedor principal
}







document.getElementById("search-button").addEventListener("click", function() {
    // Obtener el valor del input de búsqueda
    const searchValue = document.getElementById("search-input").value;
  
    // Realizar la búsqueda en la Big Data (puedes utilizar una API o una estructura de datos predefinida)
  
    // Mostrar los resultados
    displayResults(searchValue);
  });
  
  function displayResults(searchValue) {
    const resultsContainer = document.getElementById("results");
  
    // Limpiar los resultados previos
    resultsContainer.innerHTML = "";
  
    // Obtener los resultados de la Big Data basados en la búsqueda
  
    // Por cada resultado encontrado, crear un elemento HTML y añadirlo al contenedor de resultados
    results.forEach(function(result) {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
  
      const resultTitle = document.createElement("h2");
      resultTitle.classList.add("result-title");
      resultTitle.textContent = result.title;
  
      const resultArtist = document.createElement("p");
      resultArtist.classList.add("result-artist");
      resultArtist.textContent = result.artist;
  
      const resultImage = document.createElement("img");
      resultImage.classList.add("result-image");
      resultImage.src = result.image;
  
      const resultAlbum = document.createElement("p");
      resultAlbum.classList.add("result-album");
      resultAlbum.textContent = result.album;
  
      // Añadir los elementos al item de resultado
      resultItem.appendChild(resultTitle);
      resultItem.appendChild(resultArtist);
      resultItem.appendChild(resultImage);
      resultItem.appendChild(resultAlbum);
  
      // Añadir el item de resultado al contenedor
      resultsContainer.appendChild(resultItem);
    });
  }
  
  // Ejemplo de Big Data con resultados predefinidos
  const results = [
    {
      "cantantes": [
        {
          "nombre": "Adele",
          "nacimiento": {"fecha": "5 de mayo de 1988", "lugar": "Londres, Reino Unido."},
          "profesion": "Cantante, cantautora y multinstrumentista.",
          "genero": "Pop.",
          "albums": [
            {"titulo": "19", "año": 2008},
            {"titulo": "21", "año": 2011},
            {"titulo": "25", "año": 2015}
          ],
          "premios": ["Grammy Awards", "BRIT Awards."],
          "imagen": "https://media.vogue.es/photos/620370a09eea68096c424a9a/2:3/w_2560%2Cc_limit/DL_u505385_043.jpg"
        },
        {
          "nombre": "Bruno Mars",
          "nacimiento": {"fecha": "8 de octubre de 1985", "lugar": "Honolulú, Hawái, EE. UU."},
          "profesion": "Cantante, compositor, productor musical y bailarín.",
          "genero": "R&B, pop, funk, reggae, hip hop, soul y rock.",
          "albums": [
            {"titulo": "Doo-Wops & Hooligans", "año": 2010},
            {"titulo": "Unorthodox Jukebox", "año": 2012},
            {"titulo": "24K Magic", "año": 2016}
          ],
          "premios": ["Grammy Awards", "MTV Video Music Awards"],
          "imagen": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/575770_v9_bg.jpg"
        },
        {
          "nombre": "Shakira",
          "nacimiento": {"fecha": "2 de febrero de 1977", "lugar": "Barranquilla, Colombia"},
          "profesion": "Cantautora, coreógrafa, cantante, bailarina, productora, actriz de voz, empresaria y filántropa.",
          "genero": "Pop Latino, rock, balada, merengue, reggaetón y trap.",
          "albums": [
            {"titulo": "Pies Descalzos", "año": 1995},
            {"titulo": "¿Dónde Están los Ladrones?", "año": 1998},
            {"titulo": "Servicio de Lavandería", "año": 2001},
            {"titulo": "El Dorado", "año": 2017}
          ],
          "premios": ["Grammy Awards", "Latin Grammy Awards"],
          "imagen": "https://estaticos-cdn.prensaiberica.es/clip/4569c5b7-b6ee-4c88-be41-ee940531f7ed_source-aspect-ratio_default_0.jpg"
        },
        {
          "nombre": "Maluma",
          "nacimiento": {"fecha": "28 de enero de 1994", "lugar": "Medellín, Colombia."},
          "profesion": "Cantante, compositor, actor y empresario.",
          "genero": "Pop, reggaetón, trap, balada, reggae, ska, R&B, vallenato, electropop, salsa, cumbia, merengue, house y tropipop.",
          "albums": [
            {"titulo": "Magia", "año": 2012},
            {"titulo": "Pretty Boy, Dirty Boy", "año": 2015},
            {"titulo": "F.A.M.E", "año": 2018},
            {"titulo": "11:11", "año": 2019},
            {"titulo": "Papi Juancho", "año": 2020},
            {"titulo": "Don Juan", "año": 2023}
          ],
          "premios": ["Billboard Music Award.", "Latin Billboards.", "Premios Latin American Music.", "MTV Europe Music Awards.", "MTV Millennial Awards.", "MTV Video Music Awards.", "Latin Grammy Awards"],
          "imagen": "https://www.euphoriazine.com/wp-content/uploads/2023/08/maluma.jpg"
        },
        {
          "nombre": "Beyoncé",
          "nacimiento": {"fecha": "4 de septiembre de 1981", "lugar": "Houston, EE. UU."},
          "profesion": "Cantautora, productora, bailarina, actriz, directora, diseñadora y empresaria.",
          "genero": "Pop, R&B, soul y hip hop.",
          "albums": [
            {"titulo": "Dangerously in Love", "año": 2003},
            {"titulo": "BDay", "año": 2006},
            {"titulo": "I Am... Sasha Fierce", "año": 2008},
            {"titulo": "4", "año": 2011},
            {"titulo": "Beyoncé", "año": 2013},
            {"titulo": "Lemonade", "año": 2016},
            {"titulo": "Renaissance", "año": 2022}
          ],
          "premios": ["Grammy Awards","BET Awards","American Music Awards","ASCAP","ASCAP Pop Music Awards","ASCAP Rhythm & Soul Music Awards"],
          "imagen": "https://static.onecms.io/wp-content/uploads/sites/21/2023/05/17/Beyonce-Grand-Royal-Weekend-2000.jpg"
        },
        {
          "nombre": "Rihanna",
          "nacimiento": {"fecha": "20 de febrero de 1988", "lugar": "Barbados"},
          "profesion": "Cantante, actriz, diseñadora y empresaria.",
          "genero": "Pop, dance, hip hop, reggae, techno, trap y R&B.",
          "albums": [
            {"titulo": "Music of the Sun", "año": 2005},
            {"titulo": "A Girl Like Me", "año": 2006},
            {"titulo": "Good Girl Gone Bad", "año": 2007},
            {"titulo": "Rated R", "año": 2009},
            {"titulo": "Loud", "año": 2010},
            {"titulo": "Talk That Talk", "año": 2011},
            {"titulo": "Unapologetic", "año": 2012},
            {"titulo": "Anti", "año": 2016}
          ],
          "premios": ["Grammy Awards", "Billboard", "BRIT Awards.", "American Music Awards", "Latin Billboards.", "Radio Academy", "Japan Gold Disc", "Music Society", "NRJ Music", "BET Awards", "MTV Video Music Awards", "BET Hip Hop", "MTV Europe Music Awards."],
          "imagen": "https://cdn.britannica.com/83/211883-050-46933F1A/Rihanna-Barbadian-singer-Robyn-Fenty.jpg"
        },
        {
          "nombre": "Billie Eilish",
          "nacimiento": {"fecha": "18 de diciembre de 2001", "lugar": "EE. UU."},
          "profesion": "Cantante, cantautora, compositora y bailarina.",
          "genero": "Pop, electropop, indie pop.",
          "albums": [
            {"titulo": "When We All Fall Asleep, Where Do We Go?", "año": 2019},
            {"titulo": "Happier Than Ever", "año": 2021}
          ],
          "premios": ["American Music Awards", "Apple Music Awards", "Billboard Music Award.", "BRIT Awards.", "Clio Awards", "Golden Globe Awards", "iHeartRadio Music Awards", "Juno Awards", "MTV Europe Music Awards.", "MTV Millennial Awards.", "LOS40 Awards", "MTV Video Music Awards.", "Grammy Awards", "Spotify Awards"],
          "imagen": "https://images.hola.com/imagenes/belleza/actualidad/20210318186309/billie-eilish-cambio-de-look-radical-rubia/0-932-93/billie-eilish-getty2-m.jpg?tx=w_680"
        },
        {
          "nombre": "Michael Jackson",
          "nacimiento": {"fecha": "29 de agosto de 1958 - 25 de junio de 2009", "lugar": "EE. UU."},
          "profesion": "Cantante, compositor, productor musical, empresario y bailarín.",
          "genero": "Pop, soul, R&B, funk, rock, disco y new jack swing.",
          "albums": [
            {"titulo": "Got To Be There", "año": 1972},
            {"titulo": "Ben", "año": 1972},
            {"titulo": "Music And Me", "año": 1973},
            {"titulo": "Forever, Michael", "año": 1975},
            {"titulo": "Off the Wall", "año": 1979},
            {"titulo": "Thriller", "año": 1982},
            {"titulo": "Bad", "año": 1987},
            {"titulo": "Dangerous", "año": 1991},
            {"titulo": "HIStory: Past, Present and Future, Book I", "año": 1995},
            {"titulo": "Blood on the Dance Floor: HIStory in the Mix", "año": 1997},
            {"titulo": "Invincible", "año": 2001}
          ],
          "premios": ["Grammy Awards", "BRIT Awards.", "MTV Video Music Awards", "American Dance Awards", "American Video Awards", "American Cinema Awards", "Apollo Legend Awards", "Barbados Music Awards", "Bambi Awards", "BET Awards", "Billboard", "Black Gold Awards", "BMI Urban Awards"],
          "imagen": "https://static.wikia.nocookie.net/michael-jackson-espanol/images/2/28/Michael_Jackson.webp/revision/latest?cb=20220626235224&path-prefix=es"
        },
        {
          "nombre": "Lasso",
          "nacimiento": {"fecha": "18 de febreo de 1988", "lugar": "Caracas, Venezuela."},
          "profesion": "Cantante y compositor.",
          "genero": "Pop, rock, balada y urbano.",
          "albums": [
            {"titulo": "Sin otro sentido", "año": 2011},
            {"titulo": "El exilio voluntario de una mente saturada", "año": 2017},
            {"titulo": "Cuatro estaciones", "año": 2021},
            {"titulo": "Eva", "año": 2023}
          ],
          "premios": ["Latin Grammy Awards", "Premios Pepsi Music"],
          "imagen": "https://www.laprensa.hn/binrepository/834x900/0c0/0d0/none/11004/CFNQ/lasso_2817048_20221031090620.jpg"
        },
        {
          "nombre": "Tylor Swift",
          "nacimiento": {"fecha": "13 de diciembre de 1989", "lugar": "Pensilvania, EE. UU."},
          "profesion": "Cantante, actriz, productora, compositora, directora y empresaria.",
          "genero": "Pop, country, rock, folk pop, electropop y country rock.",
          "albums": [
            {"titulo": "Tylor Swift", "año": 2008},
            {"titulo": "Fearless", "año": 2011},
            {"titulo": "Speak Now", "año": 2015},
            {"titulo": "Red", "año": 2015},
            {"titulo": "1989", "año": 2015},
            {"titulo": "Reputation", "año": 2015},
            {"titulo": "Lover", "año": 2015},
            {"titulo": "Folklore", "año": 2015},
            {"titulo": "Evermore", "año": 2015},
            {"titulo": "Midnights", "año": 2015}
          ],
          "premios": ["American Country Awards", "American Music Awards", "BBC Music Awards", "Billboard Music Award.", "BMI Country Awards", "Bravo Otto", "BMI Pop Awards", "Grammy Awards", "Juno Awards", "MTV Europe Music Awards.", "MTV Video Music Awards", "MTV Millennial Awards."],
          "imagen": "https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png"
        },
        {
          "nombre": "Jennifer López",
          "nacimiento": {"fecha": "24 de julio de 1969", "lugar": "New York, EE. UU."},
          "profesion": "Cantante, cantautora, bailarina, actriz, diseñadora y empresaria.",
          "genero": "Pop latino, reggaetón, balada, dance, hip hop, urban, funk, electropop, soul y R&B.",
          "albums": [
            {"titulo": "On the 6", "año": 1999},
            {"titulo": "J.Lo", "año": 2001},
            {"titulo": "This Is Me... Then", "año": 2002},
            {"titulo": "Rebirth", "año": 2005},
            {"titulo": "Como ama una mujer", "año": 2007},
            {"titulo": "Brave", "año": 2007},
            {"titulo": "Love?", "año": 2011},
            {"titulo": "A.K.A", "año": 2014},
            {"titulo": "This is Me... Now", "año": 2024}
          ],
          "premios": ["Grammy Awards", "BRIT Awards.", "MTV Europe Music Awards.", "MTV Video Music Awards", "American Music Awards", "Certificados VEVO"],
          "imagen": "https://cdn.smehost.net/sonymusices-45pressprod/wp-content/uploads/2018/08/foto_de_jennifer-lopez-2.jpg"
        },
        {
          "nombre": "Miley Cyrus",
          "nacimiento": {"fecha": "23 de noviembre de 1992", "lugar": "Tennessee, EE. UU."},
          "profesion": "Cantante, compositora, actriz y productora discográfica.",
          "genero": "Pop, rock, dance, pop rock y country.",
          "albums": [
            {"titulo": "Meet Miley Cyrus", "año": 2008},
            {"titulo": "Breakout", "año": 2011},
            {"titulo": "Can't Be Tamed", "año": 2015},
            {"titulo": "Bangerz", "año": 2015},
            {"titulo": "Miley Cyrus & Her Dead Petz", "año": 2015},
            {"titulo": "Younger Now", "año": 2015},
            {"titulo": "Plastic Hearts", "año": 2015},
            {"titulo": "Endless Summer Vacation", "año": 2015}
          ],
          "premios": ["Grammy Awards", "BRIT Awards.", "ASCAP Pop Music Awards", "BMI Pop Awards", "Bambi Awards", "Billboard Music Award.", "City Of Hope", " German Bravo Otto", "Guinness World Records", "MTV Awards"],
          "imagen": "https://imagenes.elpais.com/resizer/Qip7jVEOCwKzqBYtIpyd4c1UL8w=/1960x1470/filters:focal(1645x616:1655x626)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/YECTAIG7RNB7DK33V3J5LDDCCA.jpg"
        },
        {
          "nombre": "Romeo Santos",
          "nacimiento": {"fecha": "21 de julio de 1981", "lugar": "New York, EE. UU."},
          "profesion": "Cantante, compositor, actor, productor discográfico y empresario.",
          "genero": "Pop, bachata, reggaetón y R&B.",
          "albums": [
            {"titulo": "Generation Next", "año": 1999},
            {"titulo": "We Broke the Rules", "año": 2002},
            {"titulo": "Love & Hate", "año": 2003},
            {"titulo": "Unplugged (álbum de Aventura)", "año": 2004},
            {"titulo": "God's Project", "año": 2005},
            {"titulo": "K.O.B. Live", "año": 2006},
            {"titulo": "Kings of Bachata: Sold Out at Madison Square Garden", "año": 2007},
            {"titulo": "The Last", "año": 2009},
            {"titulo": "Fórmula, vol. 1", "año": 2011},
            {"titulo": "Fórmula, vol. 2", "año": 2014},
            {"titulo": "Golden", "año": 2017},
            {"titulo": "Utopía", "año": 2019},
            {"titulo": "Fórmula, vol. 3", "año": 2022}
          ],
          "premios": ["Premios Juventud", "Latin Billboards.", "ASCAP"],
          "imagen": "https://lastopnews.com/wp-content/uploads/2023/12/IMG_2432.jpg"
        },
        {
          "nombre": "Prince Royce",
          "nacimiento": {"fecha": "11 de mayo de 1989", "lugar": "Londres, Reino Unido."},
          "profesion": "Cantante, compositor y actor.",
          "genero": "Pop, bachata y R&B.",
          "albums": [
            {"titulo": "Prince Royce", "año": 2010},
            {"titulo": "Phase II", "año": 2012},
            {"titulo": "Soy el mismo", "año": 2013},
            {"titulo": "Double Vision", "año": 2015},
            {"titulo": "Five", "año": 2017},
            {"titulo": "Alter Ego", "año": 2020},
            {"titulo": "Llamada perdida", "año": 2024}
          ],
          "premios": ["Latin Billboards.", "BMI Awards", "iHeartRadio Music Awards", "American Music Awards", "Premios Juventud", "Premios Lo Nuestro", "Premios Tu Mundo", "Soberano Awards"],
          "imagen": "https://elcomercio.pe/resizer/7a4v-J8pJ-MpGXYd-T_IvrLoXwU=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DHVHS2VBW5FTPO4OYDYBTYNZGM.jpg"
        },
        {
          "nombre": "Katy Perry",
          "nacimiento": {"fecha": "25 de octubre de 1984", "lugar": "California, EE. UU."},
          "profesion": "Cantante, compositora y personaje de televisión.",
          "genero": "Pop, pop-rock, diisco, electropop, dance-pop y synth-pop.",
          "albums": [
            {"titulo": "Katy Hudson", "año": 2001},
            {"titulo": "One of the Boys", "año": 2008},
            {"titulo": "Teenage Dream", "año": 2010},
            {"titulo": "Prism", "año": 2013},
            {"titulo": "Witness", "año": 2017},
            {"titulo": "Smile", "año": 2020}
          ],
          "premios": ["ASCAP", "American Music Awards", "Billboard", "BMI Awards", "BRIT Awards.", "MTV Awards", "MTV Europe Music Awards.", "MTV Video Music Awards"],
          "imagen": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1668160000.jpg?crop=0.6669921875xw:1xh;center,top&resize=640:*"
        }
      ]
    }
  ];
  