// console.log('hola1')


// setTimeout(() => {
//     console.log('hola2')
// });

// setInterval(() => {
//     console.log('hola3')
// }, 1000);


//funciones async
// let obtener = async (p1) => {
//     let peticion = await fetch(`${p1}.jason`);
//     let res = await peticion.json();
//     console.log(res);
// }
// obtener("config");


//actualizacion de header

let nombreArchivo = 'config';
let encabezado = async () => {
    let data = await fetch(nombreArchivo + '.json');
    let dataJson = await data.json();
    const elementoPadre = document.querySelector('#pricing-header');
    let elemento = `
    <h1 class="display-4 fw-normal text-body-emphasis">
        ${dataJson.encabezado.titulo}
    </h1>
    ${dataJson.encabezado.lista.map((value) =>
        `
        <div class="d-flex">
                ${value.imagen}
            <p class="mt-1 ms-2">
                ${value.texto}
            </p>
        </div>
        `
    ).join(" ")}
    `;
    elementoPadre.insertAdjacentHTML("beforeend", elemento);
}
encabezado()


let cargarTarjetas = async () => {
    let datos = await fetch(nombreArchivo + '.json');
    let dataJson = await datos.json();
    const elementoPadre = document.querySelector('#cards-col');
    let tarjetas = /*html*/ `
    ${dataJson.tarjetas.lista.map((value) => `
    <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${value.titulo}</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">${value.precio}</h1>
                <button type="button" class="w-100 btn btn-lg btn-outline-danger">${value.boton}</button>
            </div>
        </div>
    </div>
    `
    ).join(" ")}
    `;
    elementoPadre.insertAdjacentHTML('beforeend', tarjetas);
};
cargarTarjetas();


let cargarTabla = async () => {
    let datos = await fetch(nombreArchivo + '.json');
    let dataJson = await datos.json();
    const elementoPadre = document.querySelector('#table');
    //destructuring de los datos thead
    const [firstH, ...restH] = dataJson.tabla.thead;
    //destructuring de los datos tbody
    // const [firstBody, ...restBody] = dataJson.table.tbody;
    let tableElements = /*html*/ `
    <thead>
        <tr>
            <th style="width: 22%;">
                ${firstH.th}
            </th>
            ${restH.map((value) => `
            <th class="text-center" style="width: 22%;">
                ${value.th}
            </th>
              `
    ).join(" ")}
        </tr>
    </thead>
    
    <tbody>
    ${dataJson.tabla.tbody.map((row) => `
        <tr>
            <td>
                ${row.descripcion}
            </td>
            ${row.opciones.map((option) => `
                <td class="text-center">
                    ${option.contenido}
                </td>
            `).join("")}
        </tr>
    `).join("")}
    </tbody>
    `;
    elementoPadre.insertAdjacentHTML('beforeend', tableElements);
};
cargarTabla();


let cargarParrafos = async () => {
    let datos = await fetch(nombreArchivo + '.json');
    let dataJson = await datos.json();
    const elementoPadre = document.querySelector('#parrafo');
    let parrafos = `
    ${dataJson.parrafo.map((value) => `
    <p>
        ${value.contenido}
    </p>
        `).join("")}
    `;
    elementoPadre.insertAdjacentHTML('beforeend', parrafos);
};

cargarParrafos();

let cargarFooter = async () => {
    let datos = await fetch(nombreArchivo + '.json');
    let dataJson = await datos.json();
    const elementoPadre = document.querySelector('footer');
    let footerContent = `
        <div class="row">
            <div class="col-12 col-md">
                <img class="mb-2" src="${dataJson.footer.logoSrc}" alt="${dataJson.footer.logoAlt}" width="24" height="19">
                <small class="d-block mb-3 text-body-secondary">&copy; ${dataJson.footer.copyText}</small>
            </div>
            ${dataJson.footer.sections.map((section) => `
                <div class="col-6 col-md">
                    <ul class="list-unstyled text-small">
                        ${section.items.map((item) => `
                            <li class="mb-1"><a class="link-secondary text-decoration-none" href="${item.link}">${item.text}</a></li>
                        `).join("")}
                    </ul>
                </div>
            `).join("")}
        </div>
    `;
    elementoPadre.insertAdjacentHTML('beforeend', footerContent);
};

cargarFooter();


