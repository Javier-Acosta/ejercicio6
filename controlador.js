const fnRetornaIVA = (importeBase, tipoArticulo) => {

    if (tipoArticulo === 1) {
        return importeBase * 21 / 100;
    }
    if (tipoArticulo === 2) {
        return importeBase * 27 / 100;
    }
    if (tipoArticulo === 3) {
        return importeBase * 10.5 / 100;
    }
    if (tipoArticulo === 4) {
        return importeBase * 5 / 100;
    }
    if (tipoArticulo === 5) {
        return 0;
    }
    return 0;
}






window.addEventListener("load", () => {
    console.log("esta funcionando");

    const idImporteBase = document.querySelector("#idImporteBase");
    const idTipoArticulo = document.querySelector("#idTipoArticulo");
    const idBtnCalcularTotales = document.querySelector("#idBtnCalcularTotales");
    const importeInvertir = document.querySelector("#importeInvertir");
    const importeIva = document.querySelector("#importeIva");
    const importefinal = document.querySelector("#importefinal");



    idBtnCalcularTotales.addEventListener("click", () => {
        let baseDeFactura = Number (idImporteBase.value);
        
        console.log(`log Importe base ${baseDeFactura}`);


        let tipoDelProducto = Number(idTipoArticulo.value);


        let resultadoIVA = fnRetornaIVA(baseDeFactura, tipoDelProducto);
        console.log(resultadoIVA);
        
        importeInvertir.textContent =`El Importe Base es de ${baseDeFactura}`;
        
        importefinal.textContent = `El Importe Final es ${resultadoIVA} `;
        
        if (tipoDelProducto ===1)
         {
            
             importeIva.textContent =`El Tipo de Importe IVA es de % 21`;
        }
        if (tipoDelProducto ===2)
         {
            
             importeIva.textContent =`El Tipo de Importe IVA es de % 27`;
        }
        if (tipoDelProducto ===3)
         {
            
             importeIva.textContent =`El Tipo de Importe IVA es de % 10.5`;
        }
        if (tipoDelProducto ===4)
         {
            
             importeIva.textContent =`El Tipo de Importe IVA es de % 5`;
        }
        return 0;
    })


})