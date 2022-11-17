var tareas = [];

function crearPokemon() {

    var Roni = localStorage.getItem("tar");
    if (Roni != null) {
        tareas = JSON.parse(Roni);
    } else {
        tareas = [];
    }

    var numero = document.getElementById("numero").value;
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var lista = document.getElementById("lista").value;
    var tipo = document.getElementById("sexo").value;
    var imagen = document.getElementById("pk_img").files;

    var tarea = {
        numero: "",
        nombre: "",
        descripcion: "",
        lista: "",
        tipo: "",
        imagen: ""
    }

    tarea.numero = numero;
    tarea.nombre = nombre;
    tarea.descripcion = descripcion;
    tarea.lista = lista;
    tarea.tipo = tipo;
    tarea.imagen = imagen[0].name;

    tareas.push(tarea);
    var txt = JSON.stringify(tareas);
    localStorage.setItem("tar", txt);

    window.location = "Noticias.html";
    

}


function finalizarTarjeta(boton) {

    var poke = boton.parentNode;
    var mon = poke.parentNode;
    var pokemon = poke.firstChild.innerHTML;
    tareas.splice(pokemon, 1);
    localStorage.setItem("poketar", JSON.stringify(tareas));
    mon.removeChild(poke);
    window.location.reload();

}

function guardarTarjeta() {
    var file = document.getElementById("pk_img").files;
    var imagen_nombre = file[0].name;

    var imagen = document.getElementById("img_pri");

    imagen.setAttribute("src", "img/" + imagen_nombre);
}

function iniciar() {
    var txt = localStorage.getItem("tar");
    var creadas = document.getElementById("Macho");
    



    if (txt != null) {
        tareas = JSON.parse(txt);
        for (var i = 0; i < tareas.length; i++) {
            var actual = tareas[i];
            if (actual.lista == "c1") {
                var tar = document.createElement("div");
                tar.setAttribute("class", "tarjeta");
                tar.setAttribute("onload", "crearPokemon(this)");

                var imagen = document.createElement("img");
                imagen.setAttribute("src", "img/" + actual.imagen);
                tar.appendChild(imagen);

                var separar= document.createElement("div");
                var br = document.createElement("br");
                br.innerHTML =  actual.numero;
                separar.appendChild(br);
                tar.appendChild(separar);


                var numero = document.createElement("div");
                var br = document.createElement("br");
                var h1 = document.createElement("h1");
                br.innerHTML =  actual.numero;
                h1.innerHTML =  actual.numero;
                numero.appendChild(h1);
                numero.appendChild(br);

                tar.appendChild(numero);

                var nombre = document.createElement("div");
                var p = document.createElement("p");
                p.innerHTML = actual.nombre;
                nombre.appendChild(p);
                tar.appendChild(nombre);

                var descripcion = document.createElement("div");
                var parra = document.createElement("p");
                parra.innerHTML = actual.descripcion;
                descripcion.appendChild(parra);
                tar.appendChild(descripcion);

                var nombres = document.createElement("div");
                var pe = document.createElement("p");
                pe.innerHTML = actual.tipo;
                nombres.appendChild(pe);
                tar.appendChild(nombres);

                var txt = localStorage.getItem("tar");
                var planta = document.getElementById("plan");
                var fuego = document.getElementById("fue");
                if (txt != null) {
                    tareas = JSON.parse(txt);
                    for (let i = 0; i < tareas.length; i++) {
                        var option = tareas[i];
                        var donde;
        
                        switch (option.tipo) {
                            case 1:
                                donde=planta;
                                tar.appendChild(donde);
                                break;
                            case 2:
                                donde=fuego;
                                tar.appendChild(donde);
                                break;
        
                            default:
                                break;
                        }
        
                    }
                }else{
                    tareas = [];
                }

                var btns = document.createElement("div");
                btns.setAttribute("class", "botones");

                var btn2 = document.createElement("input");
                btn2.setAttribute("type", "button");
                btn2.setAttribute("value", "Eliminar");
                btn2.setAttribute("onclick", "finalizarTarjeta(this)");
                btns.appendChild(btn2);

                tar.appendChild(btns);


                creadas.appendChild(tar);


            }


        }



    } else {
        tareas = [];
    }
    
}