//-----------------------Declaracion de clases-----------------------------------//
class Professional{
    //Constructor
    constructor(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
        this.photo = photo;
    }
    //Metodo
    showProfessional(){
        return "Name : "+this.name+"\n"+
               "Age : "+this.age+"\n"+
               "Genre : "+this.genre+"\n"+
               "Weight : "+this.weight+"\n"+
               "Height : "+this.height+"\n"+
               "Hair Color : "+this.hairColor+"\n"+
               "Eye Color : "+this.hairColor+"\n"+
               "Race : "+this.race+"\n"+
               "Is retired : "+this.isRetired+"\n"+
               "Nationality : "+this.nationality+"\n"+
               "Oscar Number : "+this.oscarNumber+"\n"+
               "Profession : "+this.profession+"\n" 
    } 
}

class Movie{
    //Constructor
    constructor(id, title, releaseYear, actors, nationality, director, writer, language, platform, isMCU, mainCharacterName, genre, picture) {
        this.id = id
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors
        this.nationality = nationality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.platform = platform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.genre = genre;
        this.picture = picture
    }

      //Metodo público
      showMovie(){
        return "Title : " +this.title +"<br>"
        +"Release Year : " +this.releaseYear +"<br>"
        +"Language : " +this.language +"<br>"
        +"Genre : " +this.genre +"<br>"
    }
        modalInfo(){
            return ""
        }
}

class IMDB{
    //Constructor
    constructor (peliculas){
        this.peliculas = peliculas
    }
}

//-----------------------Fin Clases-----------------------//


//-----------------------Creacion Objetos-----------------//
//Profesionales
let markHamill = new Professional("Mark Hammill", 69, "male", 80, 172, "brown", "blue", "caucasian", false, "US citizen",0, "Actor", "https://static.wikia.nocookie.net/starwars/images/c/c5/Mark_Hamill_2017.jpg/revision/latest/top-crop/width/360/height/450?cb=20180109020037")
let carrieFisher = new Professional("Carrie Fisher", 60, "female", 65, 162, "grey", "brown", "caucasian", true, "US citizen", 0, "Actress", "https://i.pinimg.com/originals/97/1c/a3/971ca3b1089d29f14739a2f300bd5bf4.jpg")
let harrisonFord = new Professional("Harrison Ford", 78, "male", 92, 178, "grey", "black", "caucasian", false, "US citizen", 0, "Actor", "https://i.pinimg.com/originals/1c/56/6f/1c566f4e6369b85ddfa9c5111f261201.jpg")
let georgeLucasD = new Professional("George Lucas", 76, "male", 102, 184, "grey", "brown", "caucasian", false, "US citizen", 0, "Director", "https://i.pinimg.com/originals/d9/5e/b9/d95eb9c8e1c70c61e928cd3670d0caa9.jpg")
let georgeLucasW = new Professional("George Lucas", 76, "male", 102, 184, "grey", "brown", "caucasian", false, "US citizen", 0, "Director", "https://i.pinimg.com/originals/d9/5e/b9/d95eb9c8e1c70c61e928cd3670d0caa9.jpg")
let karraElejalde = new Professional("Karra Elejalde", 60, "male", 110, 183, "black", "black", "caucasian", false, "Spanish", 0, "Actor", "https://image.jimcdn.com/app/cms/image/transf/none/path/sac8dbfbefbafb616/image/i41009f26d674f761/version/1391686456/image.jpg")
let eduardFernandez = new Professional("Eduard Fernandez", 56, "male", 74, 170, "brown", "black", "caucasian", false, "Spanish", 0, "Actor", "https://pro2-bar-s3-cdn-cf6.myportfolio.com/210d75f9ea9e6fb44fb4dda4a9943c6d/a35fdb3be75081dcc5b895c2_rw_1200.jpg?h=2b85b78e450b4fab09cc99e4fd837076")
let alejandroAmenabarD = new Professional("Alejandro Amenabar", 48, "male", 64, 174, "black", "black", "caucasian", false, "Spanish", 1, "Director", "https://i.pinimg.com/originals/54/ec/68/54ec688bf56580ee703470685f865555.jpg")
let alejandroAmenabarW = new Professional("Alejandro Amenabar", 48, "male", 64, 174, "black", "black", "caucasian", false, "Spanish", 1, "Writer", "https://i.pinimg.com/originals/54/ec/68/54ec688bf56580ee703470685f865555.jpg")
let chrisEvans = new Professional("Chris Evans", 39, "male", 90, 184, "brown", "green", "caucasian", false, "US citizen", 0, "Actor", "https://i.pinimg.com/originals/4e/96/82/4e96829936b56084ed748280c59ad5d2.jpg")
let robertDowneyJr = new Professional("Robert Downey Jr", 55, "male", 86, 179, "brown", "brown", "caucasian", false, "US citizen", 0, "Actor", "https://i.pinimg.com/originals/18/d3/4e/18d34ef6a78523704aa52536f4651316.jpg")
let scarlettJohansson = new Professional("Scarlett Johansson", 36, "female", 68, 165, "blond", "brown", "caucasian", false, "US citizen", 0, "Actress", "https://i.pinimg.com/originals/c1/39/1a/c1391a8f0f6e3ea9e0441dd2a48e2521.jpg")
let tomHolland = new Professional("Tom Holland", 24, "male", 80,180, "brown", "brown", "caucasian", false, "English", 0, "Actor", "https://i.pinimg.com/originals/b3/f3/21/b3f3214bc7c492aafb03a1d92248e132.jpg")
let russoBrothers = new Professional("Anthony Russo & Joe Russo", 100, "male", 180, 180, "grey", "black", "caucasian", false, "US citizen", 0, "Director", "https://pbs.twimg.com/media/Eud3oyBUYAI-DKx.jpg")
let stephenMcFeely = new Professional("Stephen McFeely", 51, "male", 67, 162, "red", "blue", "caucasian", false, "English", 0 , "Writer")
let michaelBeck  = new Professional("Michael Beck", 72,"Male", 84, 186, "Brown", "Brown", "caucasian", true, "US citizen", 0 , "Actor", "https://m.media-amazon.com/images/M/MV5BZmJlZTFkOTAtYTY0Yi00NjIxLTllYWQtNDgwN2RhY2VlNGVmXkEyXkFqcGdeQXVyNzY1ODU1OTk@._V1_UY1200_CR167,0,630,1200_AL_.jpg")
let davidHarrys  = new Professional("David Harris", 61, "Male", 76, 178, "Bald", "Brown", "Black", false, "US citizen", 0 , "Actor", "https://upload.wikimedia.org/wikipedia/commons/c/cd/David_Harris_%28own_photo%29.jpg")
let walterHill  = new Professional("Walter Hill", 79, "Male",80, 172, "White", "Green", "caucasian", true, "US citizen", 0 , "Director", "https://i.pinimg.com/originals/ab/f0/90/abf0904caa4a6fc2d425cdb68d4bb95d.jpg")
let davidShaber  = new Professional("David Shaber", 70, "Male", 70, 175, "Brown", "Brown", "caucasian", true, "US citizen", 0 , "Writer", "https://m.media-amazon.com/images/M/MV5BMTgzNzk2MDEyOV5BMl5BanBnXkFtZTYwNTQwNDgy._V1_.jpg")
let chrisPratt  = new Professional("Chris Pratt", 41, "Male", 90, 191, "Blondy", "Green", "Nordic", false, "US citizen", 0, "Actor", "https://i.pinimg.com/originals/fc/ef/b7/fcefb72480b6812f9c785116ac6e3806.jpg")
let zoeSaldanya  = new Professional("Zoe Yadira Saldanya Nazario", 42, "Female", 54, 170, "Black", "Brown", "Black", false, "US citizen", 0, "Actress", "https://i.pinimg.com/originals/8d/2e/cb/8d2ecbd9e5fdaff7fc1299644908dd7f.jpg")
let jamesGunn  = new Professional("James Gunn", 54, "male", 69, 170, "Brown", "Green", "caucasian", false, "US citizen", 0 , "Director", "https://i.pinimg.com/736x/2a/9d/4a/2a9d4a8d22b203522608201b6411e281.jpg")
let nicolePerlman  = new Professional("Nicole Perlman", 39, "Female", 60, 165, "Blond", "Green", "caucasian", false , "Us citizen", 0, "Writer", "https://media.wired.com/photos/59549ee5ce3e5e760d52d8a3/master/pass/Nicole_Perlman_Josh_Valcarcel_inline1.jpg")
let belenRueda  = new Professional("Maria Belen Rueda Garcia-Porrero", 55 , "Female", 56, 168, "Blond", "Green", "caucasian", false , "Spanish", 0, "Actress", "https://i.pinimg.com/originals/53/12/8c/53128cb49cf461b736a91ec7168cc8ef.jpg")
let ernestoAlterio  = new Professional("Ernesto Federico Alterio Bacaicoa", 50, "Male", 68, 177, "Hoary", "Green", "caucasian", false, "Argentinian", 0, "Actor", "https://i.pinimg.com/originals/f4/7a/b8/f47ab8d6dcbce17dc4c54184279cd2b9.jpg")
let alexDeLaIglesia  = new Professional("Alejandro de La Iglesia Mendoza", 55, "Male", 90, 171, "Hoary", "Black", "caucasian", false , "Spanish", 0, "Director", "https://i.pinimg.com/originals/c4/e3/ae/c4e3aea69f54d4fb514e4c9fbc1d3c81.jpg")
let jorgeGuerricaechevarría  = new Professional("Jorge Guerricaechevarría", 56, "Male", 75, 175, "Bald", "Green", "caucasian", false, "Spanish", 0 , "Writer", "https://upload.wikimedia.org/wikipedia/commons/7/78/Jorge_Guerricaechevarria_%28cropped%29.jpg")

//Peliculas
let starwarsIV = new Movie("id0", "Star Wars", 1977, [markHamill, carrieFisher, harrisonFord], "EEUU", georgeLucasD, georgeLucasW, "English", "Disney+", false, "Luke Skywalker", "Sci-fy action", "https://m.media-amazon.com/images/I/51c6S4kGFmL.jpg")
let mientrasDureLaGuerra = new Movie("id1", "Mientras dure la guerra", 2019, [karraElejalde, eduardFernandez], "Spanish", alejandroAmenabarD, alejandroAmenabarW, "Spanish", "Netflix", false, "Miguel de Unamuno", "Drama", "https://pics.filmaffinity.com/Mientras_dure_la_guerra-641777203-large.jpg")
let civilWar = new Movie("id2", "Captain America: Civil War", 2016, [chrisEvans, robertDowneyJr, scarlettJohansson, tomHolland], "EEUU", russoBrothers, stephenMcFeely, "English", "Disney+", true, "Captain America", "Action", "https://img01.mgo-images.com/image/thumbnail/v2/content/MMVFCFAF0CE83B90AE3C0984C50D26CF2DB3.jpeg")
let avengersEndgame = new Movie("id3", "Avengers: Endgame", 2019, [chrisPratt, chrisEvans, robertDowneyJr, scarlettJohansson, tomHolland], "EEUU", russoBrothers, stephenMcFeely, "English", "Disney+", true, "Thanos", "Action", "https://thumbor.forbes.com/thumbor/711x1039/https://blogs-images.forbes.com/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-DOLBY-CINEMA-1.jpg")
let theWarriors  = new Movie("id4", "The Warriors", 1979, [michaelBeck, davidHarrys], "EE.UU.", walterHill, davidShaber, "English", "Movistar", false, "Ajax", "Action", "https://static.wikia.nocookie.net/thewarriors/images/7/7c/The-warriors-poster-artwork-michael-beck-james-remar-david-patrick-kelly.jpg")
let guardiansOfTheGalaxy  = new Movie("id5", "Los Guardianes De La Galaxia",2014, [chrisPratt, zoeSaldanya], "EE.UU.", jamesGunn, nicolePerlman, "English", "Netflix", true, "Star Lord", "Sci-fy action", "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/11/IMG_0754-scaled.jpeg")
let perfectosDesconocidos  = new Movie("id6", "Perfectos desconocidos", 2017, [belenRueda, ernestoAlterio], "España", alexDeLaIglesia, jorgeGuerricaechevarría, "Spanish", "HBO", false, "Los moviles", "Comedia", "https://pics.filmaffinity.com/Perfectos_desconocidos-252289686-large.jpg")

let cartelera = new IMDB([starwarsIV, mientrasDureLaGuerra, civilWar, avengersEndgame, theWarriors, guardiansOfTheGalaxy, perfectosDesconocidos])

//---------------Fin Creacion Objetos-------------//

//---------------Inicio código--------------------//

$(document).ready(function(){
    mostrarPeliculas()
})


    //Mostrar Peliculas
function mostrarPeliculas(){
    document.getElementById("fila_cartelera").innerHTML = ""
    for (let i=0; i<cartelera.peliculas.length; i++){
        let text = `<div class="card bg-dark" data-toggle="modal" data-target="#exampleModal" onclick="fillModal('${cartelera.peliculas[i].id}')" style="width: 22rem; margin: 10px"><div class="row"><div class="col"><img id="foto${i}" src="./logo_popcorn.jpg" class="card-img-top" alt="..." style="height: 260px; width: 180px"></div><div class="col"><div class="card-body" style="padding-left: 0;"><p id="texto${i}" class="card-text text-white" style="font-size: 11px; line-height: 30px;">Some quick example text to build on the card title and make up the bulk of the card</p></div></div></div></div>`
        $("#fila_cartelera").append(text)
        let foto = `#foto${i}`
        $(foto).attr("src", cartelera.peliculas[i].picture);
        let texto = `#texto${i}`
        $(texto).html(cartelera.peliculas[i].showMovie())
    }
}


    //Rellenar Modal
function fillModal(movieID){
    for (let i=0; i<cartelera.peliculas.length;i++){
        if (movieID == cartelera.peliculas[i].id){
            let actores = ""
            for (let j=0;j<cartelera.peliculas[i].actors.length;j++){
                if (cartelera.peliculas[i].actors[j].name == undefined){
                    actores += cartelera.peliculas[i].actors[j] +", "
                }
                else{
                    actores += cartelera.peliculas[i].actors[j].name +", "
                }
            }
            let director = ""
                if (cartelera.peliculas[i].director.name == undefined){
                    director = cartelera.peliculas[i].director
                }
                else{
                    director = cartelera.peliculas[i].director.name
                }
            let writer = ""
                if (cartelera.peliculas[i].writer.name == undefined){
                    writer = cartelera.peliculas[i].writer
                }
                else{
                    writer = cartelera.peliculas[i].writer.name
                }
            var texto = `<h2>${cartelera.peliculas[i].title}</h2>
            <p>Año estreno: ${cartelera.peliculas[i].releaseYear}</p>
            <p>Actores: ${actores}</p>
            <p>Nacionalidad: ${cartelera.peliculas[i].nationality}</p>
            <p>Director: ${director}</p>
            <p>Guionista: ${writer}</p>
            <p>Idioma: ${cartelera.peliculas[i].language}</p>
            <p>Plataforma: ${cartelera.peliculas[i].platform}</p>
            <p>Es del MCU: ${cartelera.peliculas[i].isMCU}</p>
            <p>Nombre del Protagonista: ${cartelera.peliculas[i].mainCharacterName}</p>
            <p>Genero: ${cartelera.peliculas[i].genre}</p>`
        }
    }
    document.getElementById("datosMovie").innerHTML = texto
    document.getElementById("datosMovie").innerHTML = texto
}

    //Formulario
    $(function() {
        $(".forms_option").hide();
        $("#select_act").change(function() {
            switch($(this).val()){ 
                case "1":
                    $("#form1").show();
                        break;
                case "2":
                    $("#form1").show();
                    $("#form2").show();
                    break;
                case "3":
                    $("#form1").show();
                    $("#form2").show();
                    $("#form3").show();
                    break;
                case "4":
                    $("#form1").show();
                    $("#form2").show();
                    $("#form3").show();
                    $("#form4").show();
                    break;
            }
        });
    });

    //AñadirNuevaPelicula
    function addMovie(){
        let nuevoID = `id${cartelera.peliculas.length}`
        let nuevoTitulo = $("#nuevoTitulo").val()
        let nuevoYear = $("#nuevoYear").val()
        let nuevoActor = [$("#nuevoActor1").val(), $("#nuevoActor2").val(), $("#nuevoActor3").val(), $("#nuevoActor4").val()]
        let nuevoNationality = $("#nuevoNationality").val()
        let nuevoDirector = $("#nuevoDirector").val()
        let nuevoWriter = $("#nuevoWriter").val()
        let nuevoLanguage = $("#nuevoLanguage").val()
        let nuevoPlatform = $("#nuevoPlatform").val()
        let nuevoIsMCU = $("#nuevoIsMCU").val()
            if (nuevoIsMCU == "Yes"){
                nuevoIsMCU = true
            }
            else{
                nuevoIsMCU = false
            }
        let nuevoMainCharacterName = $("#nuevoMainCharacterName").val()
        let nuevoGenre = $("#nuevoGenre").val()
        let nuevoImg = $("#nuevoImg").val()

        let nuevaPelicula = new Movie(nuevoID, nuevoTitulo, nuevoYear, nuevoActor, nuevoNationality, nuevoDirector, nuevoWriter, nuevoLanguage, nuevoPlatform, nuevoIsMCU, nuevoMainCharacterName, nuevoGenre, nuevoImg)

        cartelera.peliculas.push(nuevaPelicula)
    }