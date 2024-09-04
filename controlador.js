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
    const importeBase = document.querySelector("#importeBase");
    const importeIva = document.querySelector("#importeIva");
    const importefinal = document.querySelector("#importefinal");



    idBtnCalcularTotales.addEventListener("click", () => {
        const baseDeFactura = 10000;
        console.log(baseDeFactura);


        const tipoDelProducto = idTipoArticulo.value;
        console.log(tipoDelProducto);


        const resultadoIVA = fnRetornaIVA(baseDeFactura, tipoDelProducto);
        console.log(resultadoIVA);
    })


})