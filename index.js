function Submit() {
    alert("La Trifuerza te ha escogido, tienes una misión y es la de rescatar a la princesa Zoe");
    alert("En tu aventura pasarás por diversos obstáculos, ten cuidado, tus decisiones afectarán el destino de nuestro reino, pero todo sea por encontrar a la princesa.");
    alert("¡¡Bien, vamos a ello!!");

    var Name = prompt("Escribe tu nombre");
    while (Name === "") {
        alert("¿Como te llamas joven?!")
        Name = prompt("Escribe tu nombre");
        } 
    ValidateName();

    function ValidateName(){
         
        let validateSpelling = prompt("Hola, ¿de verdad te llamas " + Name + "? s/n");

        if(validateSpelling == "s" || validateSpelling =="S"){
            alert("Mucho gusto " + Name);
        }
        else if(validateSpelling == "n" || validateSpelling == "N"){
            Name = prompt("Escribe tu nombre");
            ValidateName();
        }
        else{
            alert("Haz escogido una opcion no valida. Escoge de nuevo")
            ValidateName();
        }
    }    

    var things = prompt("Te despiertas de un sueño, te levantas de la cama y notas una luz proveniente de tu escritorio. Encuentras 3 objetos: una espada de madera (1), un escudo de goma (2) y una ocarina de juguete (3). Elige tu arma preferida de acuerdo con el número de la misma.");
  /*   while (things === "") {
        alert("Debes elegir para continuar con tu aventura.")
        alert("No cumpliste con tu misión y el reino entró en caos con el país vecino!");
    } */
    ValidateWeapon();


   function ValidateWeapon(){
       let validateOption = prompt("Elige entre una espada plástica (1), un escudo de goma (2) y una ocarina de juguete (3). Elige tu arma preferida de acuerdo con el número de la misma.");
  switch(validateOption){
      case "1":
          alert("Haz escogido la espada plástica. Tendrás mejor oportunidad en combates, pero tu defensa será regular.");
          break;
        case "2": 
        alert("Haz escogido un escudo de goma. Tendrás una defensa excelente, pero te costara defenderte de tus enemigos.")
        break;
        case "3": 
        alert("Haz escogido una ocarina de juguete . Tendrás altos poderes de control mental sobre los demás, sin embargo, no podrás usarlos muchos porque te acortan la vida.")
        break;
        default:
            alert("No cumpliste con tu misión y el reino entró en caos con el país vecino!");
            alert("No haz escogido ningun arma, por tanto, te has quedado desprotegido.")
  }

   }
/*     if (things === "") {
        alert("Debes elegir para continuar con tu aventura.")
        alert("No cumpliste con tu misión y el reino entró en caos con el país vecino!");
    } else {
        alert("Has escogido la opcion" + things + ". Esta te será útil más adelante. Continuemos con la aventura");
    } */

 
    alert("Comienzas a caminar hasta introducirte en un bosque particular, el bosque perdido " + " percibes ciertos pasos a tu alrededor y la corriente de aire entre los arboles");

    alert("De repente, el camino se divide en 2, uno va a la izquierda y el otro a la derecha " + "Elige que camino quieres tomar campeón");

    var road = prompt("¿IZQUIERDA O DERECHA?");
    if (road === "izquierda" || road === "IZQUIERDA") {
        roadLeft();
    } else if (road === "derecha" || road === "DERECHA") {
        roadRight();
    } else {
        var mensajeFinDelJuego = alert("¡Caes en una trampa y tus tripas sirven de alimento para los roedores! FIN DEL JUEGO")
        throw new Error(mensajeFinDelJuego);
    }




    var decision;
    var decision2;
    var decision3;
    var decision4;
    var decision5;
    var decision6;
    var decision7;


    function roadLeft() {
        alert("Mientras sigues caminando por el camino izquierdo el bosque comienza a cambiar a sus alrededores y los animales comienzan a aparecer en tu camino.");
        alert("A lo lejos observas un refugio.");
        alert("Te acercas a ver si hay alguien allí.");
        alert("Tocas la puerta un par de veces " + "*toc* *toc*");
        alert("No parece haber nadie dentro.");
        alert("¿Quieres entrar al REFUGIO o seguir tu CAMINO?.");
        decision = prompt("CAMINO or REFUGIO").toLowerCase();
    }

    function roadRight() {
        alert("Mientras sigues caminando por el camino derecho el bosque comienza a cambiar a sus alrededores y los animales comienzan a aparecer en tu camino.");
        alert("Te pierdes en el bosque");
        alert("Sientes mucho frío y comienzas a perder sensibilidad en tus extremidades");
        alert("Tienes buena vista y notas una cueva a lo lejos");
        alert("¿Quiere ser tu CAMINO o entrar a la CUEVA");
        decision2 = prompt("CAMINO o CUEVA").toLowerCase();
    }



  


    function continueRoad() {
        alert("Sigues recorriendo tu camino");
        alert("Los arboles comienzan a desaparecer");
        alert("Y el sol se oculta tras el cúmulo de nubes");
        alert("Corres como alma que lleva el diablo asustadito");
        alert("Miras alrededor");
        alert("Es una granja enorme con bastante trigo");
        alert("Observas a un señor alimentar unas vacas");
        alert("Quieres dirigirte hacia el SEÑOR o o seguir CAMINANDO");
        decision3 = prompt("SEÑOR or CAMINAR").toLowerCase();
    }

    function cabin() {
        alert("Decides entrar al refugio");
        alert("Abres la puerta con la mano izquierda");
        alert("As you open the old door, its starts screaking *screak* *screak*");
        alert("Yo");
        alert("Caminas lentamente dentro del refugio, el piso se quiebra y caes a lo boludo");
        alert("Encuentras unas escaleras que van hacia una especie de sótano");
        alert("Quieres ir al SOTANO o seguir tu CAMINO");
        decision4 = prompt("SOTANO or CONTINUE").toLowerCase();
    }


    if (decision !== undefined) {
        // only run this code if the decision variable has been defined
        if (decision === "camino") {
            continueRoad();
        } else if (decision === "refugio") {
            cabin();
        } else {
            alert("Caíste en una trampa para osos y moriste desangrado, el reino entra en caos y todo fue un desastre, ¡bravo campeón!")
            throw new Error(mensajeFinDelJuego);
        }
    }






    function road3() {
        alert("Sigues caminando a traves del sendero");
        alert("Sientes que el bosque se achica, los arboles comienzan a empujarte");
        alert("Sientes miedo");
        alert("Comienzas a correr como una nena");
        alert("Las ramas te golpean al pasar rápidamente");
        alert("Tropiezas con una raíz de un arbol y...");
        alert("...caes colina abajo, rodando como una bola de nieve... digo tierra...");
        alert(" *caes y caes aún mas..* ");
        alert("Al rato dejas de caer y te levantas");
        alert("Miras a tu alrededor algo mareado aún");
        alert("Los arboles ahora son amarillos, huh?");
        alert("Te preguntas a ti mismo, ¿donde estoy?*");
        alert("A lo lejos, detectas 2 caminos para tomar");
        alert("Uno de los caminos es PURPURA y el otro es AZUL");
        alert("Alcanzas la divisoria, ¿cual camino quieres tomar?");
        decision5 = prompt("PURPURA or AZUL").toLowerCase();
    }

    function cave() {
        alert("Caminas hacia la entrada de la cueva");
        alert("Escuchas el sonido de los Zubat (en esta historia hay pokemones, problem?) alrededor");
        alert("Con algo de temor, entrar a la cueva");
        alert("Hace frío dentro, no tienes nada que te caliente");
        alert("Escuchas un sonido de goteo cerca pero lo ignoras y sigues...");
        alert("Caminas cerca de las esquinas y...");
        alert("...terminas encontrando una especie de río dentro de la cueva misma...");
        alert("Encuentras un bote en la orilla");
        alert("Caminas alrededor del bote y escuchas a un viejo con barba verde, no pudo escoger otro color");
        alert("te le acercas");
        alert("- JO JO JO! dice el viejo");
        prompt(" *huh* ");
        alert("¿Que te trae por aquí chavalín?");
        prompt(" *ehhh este bueno... solo voy de paso* le comentas... ");
        alert("Ya veo, necesito reparar mi bot, ¿me hechas una mano? tendrás algo para cortar madera");
        alert("¿Tendrás algo para cortar madera?? (ostias no lo se, algo como una espada? solo digo -.-!)");

        if (things === "espada") {
            alert("sacas tu espada");
            alert(" - Eh ok, una espada de madera para cortar madera, sos un capo chavalín");
            alert(" - A ver que se puede hacer!");
            alert("Con un extraño poder de la nada pudiste cortar la madera y reparar el bote");
            alert(" O.o! ¿como lo hiciste??? bueno no quiero saber, replica el extraño señor ");
            alert(" - ¿Como puedo agradecerte? dice el señor");
            alert("ESPERA! Ya se, el señor busca algo en su camerino");
            alert("Regresa con un extraño papel en su mapa, es un MAPA");
            alert(" - Tómalo, es un mapa, de un tesoro que nadie ha podido encontrar");
            alert("¿Tomas el mapa? SI o NO");
            decision6 = prompt("SI or NO").toLowerCase();

        } else {

            alert("No tenías una espada" + " tenías un(a) " + things);
            alert("Solo tengo un(a) " + things);
            alert(" - Oh vaya, supongo que no podremos hacer mas...");
            alert(" - hay una salida siguiendo ese puente de allí, señala con el dedo el señor ");
            alert("Te vas del lugar atravesando el puente");
            alert("el puente se tambalea un poco pero te las arreglas para cruzar sin problemas");
            alert("Sales de la cueva para volver a encontrar en el extraño bosque");
            alert("Hay un camino, parece ser el camino principal, lo tomas sin saber donde ir");
            throw new Error(mensajeFinDelJuego);
        }

    }

    if (decision2 !== undefined) {
        // only run this code if the decision2 variable has been defined
        if (decision2 === "road") {
            road3();
        } else if (decision2 === "cave") {
            cave();
        } else {
            throw new Error(mensajeFinDelJuego);
        }
    }

    function map() {
        alert("Extiendes tu mano y tomas el MAPA");
        alert("Lo examinas y descubres ciertas cositas");
        alert("logras salir de la cueva");
        alert("Checas el mapa y notas una X que se encuentra muy lejana a tu ubicación actual");
        alert("Caminas sin cesar y con algo de hambre");
        alert(" * 3 doritos mas tarde * ");
        alert(" Llega a una montaña muy alta");
        alert("El mapa dice que el tesoro está en la punta de dicha montaña");
        alert("Trepas con tus manos y sigues tu camino hacia la cima");
        alert(" * 1 lays mas tarde * llegas a la cima");
        alert(" Miras una roca que brilla y tiene grabada una especia de enigma");


        alert("Lo miras");
        alert("Es una extraña pieza!");
        alert("Lo tomas y bajas de la colina");
        alert("You walk down the mountain");
        alert("and you run home");
        alert("CONGRATULATIONS!!!! YOU FOUND THE DIAMOND!");
        throw new Error(mensajeFinDelJuego);
    }

    function notMap() {
        alert(" - NO LO TOMES PUES!! ");
        alert(" - VETE BICHOTA! grita el hombre algo agitado");
        alert("te vas a casa llorando como nena");
        throw new Error(mensajeFinDelJuego);
    }

    if (decision6 !== undefined) {
        if (decision6 === "yes") {
            map();

        } else if (decision6 === "no") {
            notMap();

        } else {
            throw new Error(mensajeFinDelJuego);
        }
    }



    function purple() {

        alert("Caminas por el camino púrpura");
        alert("Los arboles toman y tono tipo arcoiris");
        alert("y cuando caminas escuchas sonidos super extraños");
        alert("un susurro proveniente de arriba, el cielo tal vez...");
        alert("Miras hacia arriba, hay un ave rondando sobre ti");
        alert("Desciende hacia ti " + "se descansa cerca");
        alert(" - Holi! dice el ave");
        prompt("*alv un pajaro que habla o.o!*");
        alert(" - Bienvenido al Bosque Perdido, ¿como te llamas vato?");
        alert(Name);
        alert("Ummm ya veo, a ver " + Name + " ¿que te trae por aquí? ");
        prompt("*Sigo flipando con el ave que habla....*");
        alert("Pues " + "si sigues este camion, si sigues este camino no llegarás a ningún lado, y te morirás literalmente de hambre o algo por el estilo...");
        alert("Le haces caso al extraño animal, y te vas regreso a tus tierras");
        throw new Error(mensajeFinDelJuego);

    }


    function blue() {
        alert("Empiezas a avanzar por el camino azul");
        alert("Te encuentras una tienda al lado del camino.");
        alert("Mueres de hambre así que decides entrar y comprar algo.")
        alert("Al abrir la puerta de la tienda escuchas una campana sonar.")
        alert("El cajero se voltea a mirarte con desgano.")
        alert("Tomas una bolsa, pasta, y revisas que mas hay.")
        alert("He aquí una lista de todas las cosas disponibles en la tienda.")
        var inStock = ['Doritos', 'Lays', 'Leche', 'Oreos', 'Queso', 'Pan', 'Jamón', 'Zanahori',
            'Taquitos al pastor', 'Quesadillas', 'Agüita de beber', 'Cebolla', 'Cambur', 'Patacones', 'Ceviche'
        ];
        var search = prompt(inStock.join(", ") + " " + "Escoje que quieres comprar, escribe 'listo' cuando termines." + " escribe una cosa a la vez.");
        var inBag = [];

        while (search !== "listo") {
            search = prompt(inStock + " " + "Escoje que quieres comprar, presiona 'enter' cuando termines." + " escribe una cosa a la vez.")
            if (inStock.indexOf(search) > -1) {
                inBag.push(search);
                alert("Tomaste un poco de " + search + " y lo pusiste en la bolsa")
            } else if (!search) {
                grocery();
                break;
            } else {
                alert("Escoje algo de la lista bro!");
            }


        }


        function grocery() {
            alert("Decides que es suficiente")
            alert("Tienes en tu bolsa " + inBag.join(", ") + ".");
            alert("Vas donde el cajero y colocas todas las cosas en la mesa")
            alert("El cajero escanea cada producto para cobrarte")
            alert("Pagas por todo y te vas")
            alert("Regresas a casa con todo y te olvidas de tu deber (Piero no leas esto)")
            throw new Error(mensajeFinDelJuego);
        }



    }

    if (decision5 !== undefined) {
        if (decision5 === "purple") {
            purple();
        } else if (decision5 === "blue") {
            blue();

        } else {
            throw new Error(mensajeFinDelJuego);
        }
    }






    function man() {
        alert("Te diriges hacia el señor");
        alert("Te queda mirando con cara de pocos amigos.");
        alert(" - FUERA DE MI PROPIEDAD!! ");
        alert(" - FUERAAAAA!!!!!");
        alert(" Huyes como alma que lleva el diablo hasta casa con mami y te olvidas de tu misi´n");
        throw new Error(mensajeFinDelJuego);
    }

    function move() {
        alert("You ignore walking up to the man, and you move on");
        alert("The grass is much greener and as you walk, the flowers appear by the road");
        alert("Suddenly as you are walking on the road, you notice a shop at the side of the road");
        alert("You walk up to the door at the shop");
        alert("It has a sign saying CLOSED");
        alert("You look around, and notice that the road has ended");
        alert("You also spot a sign hanging on a tree nearby")
        alert("You walk up to it, and reads the text")
        alert("its a riddle!")
        alert("It says...")
        var riddle = alert("*Q: Take away my first letter, and I still sound the same. Take away my last letter, I still sound the same. Even take away my letter in the middle, I will still sound the same. I am a five letter word. What am I?*")
        var riddleArray = ["Oven", "Carrot", "Empty"];
        var guess = prompt("Wich one of these words are the correct answer?" + riddleArray[0] + " " + riddleArray[1] + " " + riddleArray[2] + " You have 2 guesses").toLowerCase();

        if (guess === "oven") {
            riddleArray.shift()
            alert("You guessed it wrong!")
            var guessing = prompt("Last try, wich of these words are the correct answer?" + riddleArray.join(", "));
        } else if (guess === "carrot") {
            delete riddleArray[1];
            alert("¡Te equivocaste!")
            var guessing2 = prompt("último intento, ¿cuál de estas palabras es la respuesta correcta?" + riddleArray.join(", "));
        } else if (guess === "empty") {
            alert("¡Respuesta correcta, acertaste!")
            riddleCorrect();
        } else {
            alert("No acertaste ninguna de las palabras!")
            throw new Error(mensajeFinDelJuego);
        }

        if (guessing === "carrot") {
            alert("Te equivocaste hijo mío!")
            alert("Corres a casa como una nena.")
            throw new Error(mensajeFinDelJuego);
        } else {
            alert("You guessed the correct answer!")
            riddleCorrect();

        }

        if (guessing2 === "oven") {
            alert("You guessed it wrong again!")
            alert("You run home feeling sad.")
            throw new Error("you did not find the diamond!");
        } else {
            alert("You guessed the correct answer!")
            riddleCorrect();

        }

    }


    if (decision3 !== undefined) {
        if (decision3 === "man") {
            man();

        } else if (decision3 === "move") {
            move();

        } else {
            throw new Error(mensajeFinDelJuego);
        }
    }

    function riddleCorrect() {
        alert("You hear someone talking behind you");
        alert(" - Good job, you solved the riddle!");
        alert(" - Noone had solved it before");
        alert(" - Heres a pair of keys for the bike over there");
        alert("The man throws the keys to you, and you cath them");
        alert(" - With the bike you can ride over the field instead of finding a road.");
        alert("The man walks away.");
        alert("You walk up to the bike, and puts the key in the ignition and turns the engine on.");
        alert("You sit down on the bike.");
        alert("And start riding onto the field");
        alert("ITs bumpy, and you have a hard time, keeping yourself on the bike.");
        alert("But you manage to do it");
        alert("20 minutes later.");
        alert("The field has ended, and you arrive at a large river, with loud streams.");
        alert("You turn off the engine on the bike")
        alert("You look around to find something you can use to go over the river.");
        alert("You see a small boat at the edge of the river");
        alert("You walk up to it, and grabs the paddles laying on the shore");
        alert("you sit down in the boat, and adjusts the paddles");
        alert("You starts to paddle away over to the other side of the river");
        alert("But the stream in the river, are to strong.");
        alert("You get carried away by them");
        alert("You loose your paddles");
        alert("You cant get out from the boat, because its to dangerous");
        alert("1 hour has passed");
        alert("You end up by the local river at hour home town");
        alert("You look disappointed, and walks home");
        alert("Eh, perdiste, no se como, no me preguntes...")
        throw new Error(mensajeFinDelJuego);

    }


    function basement() {
        alert("You walk down the basement, as you walk down you hear the wooden steps squeeking");
        alert("You can hear rats, on the floor running.");
        alert("You look around in the basement");
        alert("And you spot a pile of dirt");
        alert("and something sticks out under it");
        alert("If you have a shovel you can dig it out");
    }

    function continues() {
        alert("Sigues investigando en el refugio");
        alert("Pero no puedes encontrar nada de nada");
        alert("Hechas una ultima mirada nomás");
        alert("al no encontrar nada decides regresar a casa ya que no encontraste sentido a esta aventura");
        alert("Te felicito Jimmy Neutron, hiciste que el reino entrara en caos, PERDISTE");
        throw new Error(mensajeFinDelJuego);
    }

    if (decision4 !== undefined) {
        if (decision4 === "basement") {
            basement();
        } else if (decision4 === "continue") {
            continues();
        } else {
           throw new Error(mensajeFinDelJuego);
        }
    }


    if (things === "escudo de goma") {
        alert("you dig out the item under the pile");
        alert("its a football");
        alert("you take it and run back home, feeling happy");
        throw new Error(mensajeFinDelJuego);
    } else {
        alert("You brough a " + things + "you cant dig it out");
        alert("Caminas regreso a casa al no ver sentido a la aventurilla");
        throw new Error(mensajeFinDelJuego);
    }


}