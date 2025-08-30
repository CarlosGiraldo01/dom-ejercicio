export default function mostrarArmas(data) {
    const armas = data.data
    console.log(armas);
    const app = document.getElementById('app') //el div se llama app
        console.log(app)

        let costo = 0
        const totalCompra = document.createElement('h2')
        totalCompra.id = 'costo-compra'
        totalCompra.innerText = 'Total de la compra: $ ' + costo 
        app.appendChild(totalCompra);

        const armasGuardadas = localStorage.getItem('armasGuardadas') || '[]'
        const armasGuardadasList = JSON.parse(armasGuardadas)

    armas.forEach(arma => {
        // console.log(arma)
        //cree un elemento p por cada arma
        const contenedorArma = document.createElement('div')
        contenedorArma.style = 'display: flex; flex-direction: column; align-items: center'
        contenedorArma.id = arma.uuid
        const tituloArma = document.createElement('p');
        tituloArma.textContent = arma.displayName // Asigne un texto dentro el p de cada arma
        const imagenArma = document.createElement('img')
        imagenArma.src = arma.displayIcon
        const botonComprar = document.createElement('button')
        botonComprar.innerText = "Comprar"
        contenedorArma.appendChild(imagenArma)
        contenedorArma.appendChild(tituloArma) // Agregar cada p dentro del div llamado app
        contenedorArma.appendChild(botonComprar)
        app.appendChild(contenedorArma)

        botonComprar.addEventListener('click', () => {
            costo = costo + arma.shopData.cost

            const totalCompra = document.getElementById('costo-compra')
            totalCompra.innerText = 'Total de la compra: $ ' + costo 

            botonComprar.innerText = 'comprado'
            botonComprar.disabled = true 
            //Obtengo las ya guardadas, si no existe ningun registro guardado, por defecto guarde en armasGuardadas un arreglo vacio como string
            const armasGuardadas = localStorage.getItem('armasGuardadas') || '[]'
            const armasGuardadasList = JSON.parse(armasGuardadas) //Convierto de string de "arreglo" a arreglo

            armasGuardadasList.push(arma.uuid) //Agrego un nuevo elemento al arreglo
            localStorage.setItem('armasGuardadas', JSON.stringify(armasGuardadasList)) //Guardo dentro del localStorage
        })
    });
}
