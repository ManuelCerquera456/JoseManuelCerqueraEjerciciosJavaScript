let notas = [
        {
            id: 1,
            titulo: 'Sacar la basura',
            texto: 'Mi mama me va a retar si no saco la basura',
            realizada: false,
        },
        {
            id: 2,
            titulo: 'Estudiar',
            texto: 'Estoy flojo y no voy a aprobar',
            realizada: true,
        },
        {
            id: 3,
            titulo: 'Salir en moto',
            texto: 'tengo que ir a conocer pueblitos',
            realizada: true,
        },
        {
            id: 4,
            titulo: 'Comprar aceite a la moto',
            texto: 'Osino se me daña',
            realizada: false,
        },
        {
            id: 5,
            titulo: 'Hacer el sprint 2',
            texto: 'No quiero perder el curso',
            realizada: true,
        },
        {
            id: 6,
            titulo: 'Lavar la moto',
            texto: 'la moto esta muy sucia',
            realizada: false,
        },
        {
            id: 7,
            titulo: 'cambiar la llanta',
            texto: 'Tiene mas de dos años',
            realizada: false,
        },
        {
            id: 8,
            titulo: 'Ir donde los abuelos',
            texto: 'Hace mucho que no los visito',
            realizada: true,
        },
        {
            id: 9,
            titulo: 'Llevar a pasear a nina',
            texto: 'se tiene que distraer',
            realizada: false,
        },
        {
            id: 10,
            titulo: 'Salir de compras',
            texto: 'Ya no tengo boxers',
            realizada: true,
        }
    ];

let idGlobal = 2; 

function calcularIMC() {
    document.getElementById('form-calculadora-imc').addEventListener('submit', function (event) {
        event.preventDefault();

        let peso = parseFloat(document.getElementById('peso').value);
        let alturaCm = parseFloat(document.getElementById('altura').value);
        let alturaM = alturaCm / 100;

        let imc = peso / (alturaM * alturaM);

        document.getElementById('resultado').value = imc.toFixed(2);
    });
}

function convertidorMoneda() {
    const unDolar = 4000;

    let inputDolar = document.getElementById('dolarEstadounidense');
    let inputPeso = document.getElementById('pesoColombiano');

    inputDolar.addEventListener('input', function () {
        let dolar = parseFloat(inputDolar.value);
        if (!isNaN(dolar)) {
            inputPeso.value = (dolar * unDolar).toFixed(2);
        } else {
            inputPeso.value = '';
        }
    });

    inputPeso.addEventListener('input', function () {
        let peso = parseFloat(inputPeso.value);
        if (!isNaN(peso)) {
            inputDolar.value = (peso / unDolar).toFixed(2);
        } else {
            inputDolar.value = '';
        }
    });
}

function mostrarNotas() {
    let container_cards = document.getElementById("container_cards");
    container_cards.innerHTML = ''; 

    if (notas.length === 0) {
        container_cards.innerHTML = `<div class="alert alert-warning text-center">NO HAY NOTAS PARA MOSTRAR</div>`;
    } else {
        for (let i = 0; i < notas.length; i++) {
            crearCard(notas[i]);
        }
    }

    console.log(notas);
}

function crearCard(notas) {
    let container_cards = document.getElementById("container_cards");
    let card = document.createElement("div");
    card.classList = "card m-2";
    
    let textoTachado = notas.realizada? 'style="text-decoration: line-through;"': '';

    card.innerHTML = `
        <div class="card-body d-flex flex-column">
            <div class="d-flex align-items-center p-2">
                <input onClick="marcarRealizada(${notas.id})" type="checkbox" ${notas.realizada? "checked": ""}>
                <h5 class="card-title m-2" ${textoTachado}>${notas.titulo}</h5>
            </div>
            <div class="d-flex flex-column flex-grow-1">
                <div class="scrollable-text">
                    <p class="card-text" ${textoTachado}>${notas.texto}</p>
                </div>
                <div class="mt-auto">
                    <button class="btn btn-danger container" onclick="borrarNota(${notas.id})">Borrar nota</button>
                </div>
            </div>
        </div>
    `;
    container_cards.appendChild(card);
}

function agregarNota(titulo, texto) {
    idGlobal++; 
    let nuevaNota = {
        id: idGlobal,
        titulo: titulo,
        texto: texto,
        realizada: false
    };
    notas.push(nuevaNota);

    console.log(notas);

}

function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    document.getElementById('container_cards').innerHTML = '';
    mostrarNotas();
}

function marcarRealizada(id) {
    for (let i = 0; i < notas.length; i++) {
        if (notas[i].id === id) {
            if (notas[i].realizada) {
                notas[i].realizada = false;
            } else {
                notas[i].realizada = true;
            }
        }
    }
    document.getElementById('container_cards').innerHTML = '';
    mostrarNotas();
}

function filtrarNotasRealizadas(array) {
    return array.filter(nota => nota.realizada === true);
}


function filtrarNotasPorTexto(array, texto) {
    if (!texto) {
        return array;
    }
    
    return array.filter(nota => 
        nota.titulo.toLowerCase().includes(texto.toLowerCase()) ||
        nota.texto.toLowerCase().includes(texto.toLowerCase())
    );
}

function aplicarFiltros() {
    let textoBuscado = document.getElementById('buscador').value;
    let mostrarRealizadas = document.getElementById('notas_realizadas').checked;

    let notasFiltradas;

    if (mostrarRealizadas) {
        notasFiltradas = filtrarNotasRealizadas(notas);
    } else {
        notasFiltradas = notas;
    }

    notasFiltradas = filtrarNotasPorTexto(notasFiltradas, textoBuscado);

    document.getElementById('container_cards').innerHTML = '';
    for (let i = 0; i < notasFiltradas.length; i++) {
        crearCard(notasFiltradas[i]);
    }
}

document.getElementById('notas_realizadas').addEventListener('change', aplicarFiltros);

document.getElementById('buscador').addEventListener('input', aplicarFiltros);

document.getElementById('form-nota').addEventListener('submit', function (e) {
    e.preventDefault();

    let titulo = document.getElementById('titulo').value;
    let texto = document.getElementById('texto').value;

    if (titulo && texto) {

        agregarNota(titulo, texto); 
        crearCard(notas[notas.length - 1]); 

        document.getElementById('titulo').value = '';
        document.getElementById('texto').value = '';
    }

    console.log(notas);
});

document.getElementById('btn_limpiar').addEventListener('click', limpiarCampos);



convertidorMoneda();
calcularIMC();
mostrarNotas();