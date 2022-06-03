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

    var things = prompt("Te despiertas de un sueño, te levantas de la cama y notas una luz proveniente de tu escritorio. Encuentras 3 objetos: una espada plástica (1), un escudo de goma (2) y una ocarina de juguete (3). Elige tu arma preferida de acuerdo con el número de la misma.");
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
        alert("Its a huge farm with alot of weath");
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
            throw new Error("Mueres de hambre y cansancio, que pena");
        }

    }

    if (decision2 !== undefined) {
        // only run this code if the decision2 variable has been defined
        if (decision2 === "road") {
            road3();
        } else if (decision2 === "cave") {
            cave();
        } else {
            throw new Error("Mueres de hambre y cansancio, que pena");
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


        alert("you walk up to it");
        alert("ITS THE DIAMOND!");
        alert("you grab the diamond");
        alert("You walk down the mountain");
        alert("and you run home");
        document.getElementById('audio').volume = 0.2;
        document.getElementById('audio').play();
        alert("CONGRATULATIONS!!!! YOU FOUND THE DIAMOND!");
        throw new Error("You completed the game by finding the Diamond");
    }

    function notMap() {
        alert(" - NO LO TOMES PUES!! ");
        alert(" - VETE BICHOTA! grita el hombre algo agitado");
        alert("te vas a casa llorando como nena");
        throw new Error("Perdiste por nena");
    }

    if (decision6 !== undefined) {
        if (decision6 === "yes") {
            map();

        } else if (decision6 === "no") {
            notMap();

        } else {
            throw new Error("you did not find the diamond!");
        }
    }



    function purple() {

        alert("You start to walk on the purple road");
        alert("The trees turns into rainbow colors");
        alert("and when you walk, you hear wierd noises");
        alert("you hear a strange sound in the sky");
        alert("You look up, and spots a bird, circling over you");
        alert("its flies down to you " + "and lands on a rock next to you");
        alert(" - Hello! says the bird");
        prompt("*Speaking to the bird*");
        alert(" - Welcome to Dandorg, whats your name?");
        alert(Name);
        alert("So " + Name + " what brings you here to Dandorg? ");
        prompt("*Speaking to the bird*");
        alert("okey " + "well if you continue this road, you will end up in the middle of nowhere, and    into the shadow");
        alert("you decide to listen to the bird, and you walk home");
        throw new Error("you did not find the diamond!");

    }


    function blue() {
        alert("You start walking on the blue road");
        alert("You spot a grocery store at the side of the road.");
        alert("You decide to walk inside, and buy yourself some food.")
        alert("You open the door to the store, you hear a loud bell as you opened the door.")
        alert("You notice the cashier turning her head towards you.")
        alert("You take a bag, and nods politely, then walks in to the store.")
        alert("Heres a list of all the things available in the store.")
        var inStock = ['apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'ham', 'carrot',
            'broccoli', 'pizza', 'crackers', 'onions', 'bananas', 'frozen dinner', 'cereals'
        ];
        var search = prompt(inStock.join(", ") + " " + "Choose wich things you wanna buy, type 'done' when you are done." + " type one thing at the time.");
        var inBag = [];

        while (search !== "done") {
            search = prompt(inStock + " " + "Choose wich things you wanna buy, press 'enter' when you are done." + " type one thing at the time.")
            if (inStock.indexOf(search) > -1) {
                inBag.push(search);
                alert("You grabbed some " + search + " and put it in the bag")
            } else if (!search) {
                grocery();
                break;
            } else {
                alert("Please choose something from the list!");
            }


        }


        function grocery() {
            alert("You decided that its enough")
            alert("In your bag you have " + inBag.join(", ") + ".");
            alert("You walk up to the cashier, and put all your stuff on the desk")
            alert("The cashier, scans every product")
            alert("You politely pay for your product, then walks out with the stuff in the bag")
            alert("You walk back home with the bag.")

            throw new Error("you did not find the diamond!");
        }



    }

    if (decision5 !== undefined) {
        if (decision5 === "purple") {
            purple();
        } else if (decision5 === "blue") {
            blue();

        } else {
            throw new Error("you did not find the diamond!");
        }
    }






    function man() {
        alert("you walk up to the man");
        alert("He turns around and looks at you.");
        alert(" - GO AWAY! get out from  my property!! ");
        alert(" - GET OOOOOOOOOOOOOOOOUT!!!!!! ");
        alert(" you start to run back where you came from");

        throw new Error("you did not find the diamond!");
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
            alert("You guessed it wrong!")
            var guessing2 = prompt("last try, wich of these words are the correct answer?" + riddleArray.join(", "));
        } else if (guess === "empty") {
            alert("You guessed the correct answer!")
            riddleCorrect();
        } else {
            alert("You did not guess any of these words!")
            throw new Error("you did not find the diamond!");
        }

        if (guessing === "carrot") {
            alert("You guessed it wrong again!")
            alert("You run home feeling sad.")
            throw new Error("you did not find the diamond!");
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
            throw new Error("you did not find the diamond!");
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
        document.getElementById('audio3').volume = 0.1;
        document.getElementById('audio3').play();
        alert("And start riding onto the field");
        alert("ITs bumpy, and you have a hard time, keeping yourself on the bike.");
        alert("But you manage to do it");
        alert("20 minutes later.");
        alert("The field has ended, and you arrive at a large river, with loud streams.");
        document.getElementById('audio3').pause();
        alert("You turn off the engine on the bike")
        document.getElementById('audio2').volume = 0.5;
        document.getElementById('audio2').play();
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
        document.getElementById('audio2').pause();
        throw new Error("you did not find the diamond!");

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
        alert("You continue to search the cabin");
        alert("But you cant find anything");
        alert("You take a last glance inside the cabin");
        alert("then decides to go home, and study instead");
        throw new Error("you did not find the diamond!");
    }

    if (decision4 !== undefined) {
        if (decision4 === "basement") {
            basement();
        } else if (decision4 === "continue") {
            continues();
        } else {
            throw new Error("you did not find the diamond!");
        }
    }


    if (things === "shovel") {
        alert("you dig out the item under the pile");
        alert("its a football");
        alert("you take it and run back home, feeling happy");
        throw new Error("you did not find the diamond!");
    } else {
        alert("You brough a " + things + "you cant dig it out");
        alert("You walk home sad");
        throw new Error("you did not find the diamond!");
    }


}