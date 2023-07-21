/*Avance 1*/

/* const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
  
    console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(totalIngresos());
    console.log(totalEgresos()); */
  







    // Nuevo cargar el cabecero
    function cargarCabecero() {
        const presupuestoElemento = document.getElementById('presupuesto');
        const porcentajeElemento = document.getElementById('porcentaje');
        const ingresosElemento = document.getElementById('ingresos');
        const egresosElemento = document.getElementById('egresos');
        
        presupuestoElemento.innerHTML = formatoMoneda(presupuesto);
        porcentajeElemento.innerHTML = formatoPorcentaje(porcentajeEgreso);
        ingresosElemento.innerHTML = formatoMoneda(totalIngresos.calcularTotalIngresos());
        egresosElemento.innerHTML = formatoMoneda(totalEgresos.calcularTotalEgresos());
      }
      
      // Función cargarApp
      function cargarApp() {
        cargarCabecero();
      }









  }
  
  const totalIngresos = () => {
    let totalIngreso = 0;
  
    for (let ingreso of Object.values(ingresos)) {
      totalIngreso += ingreso;
    }
  
    return totalIngreso;
  }
  
  const totalEgresos = () => {
    let totalEgreso = 0;
  
    for (let egreso of Object.values(egresos)) {
      totalEgreso += egreso;
    }
  
    return totalEgreso;
  }
  
  // Prueba de la función cargarCabecero
  let egresos = {
    Renta: 900,
    Ropa: 400
  };
  
  let ingresos = {
    Quincena: 9000,
    Venta: 400
  };
  
  cargarCabecero();


const formatoMoneda = (valor) => {
  return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
}

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
}

// Función eliminarEgreso
const eliminarEgreso = (id) => {
    const indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
  };

  const agregarDato = () => {
    const forma = document.getElementById('forma');
    const tipo = forma.tipo.value;
    const descripcion = forma.descripcion.value;
    const valor = forma.valor.value;
  
    if (descripcion !== '' && valor !== '') {
      if (tipo === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, Number(valor)));
        cargarCabecero();
        cargarIngresos();
      } else if (tipo === 'egreso') {
        egresos.push(new Egreso(descripcion, Number(valor)));
        cargarCabecero();
        cargarEgresos();
      }
  
      forma.reset();
    }
  };