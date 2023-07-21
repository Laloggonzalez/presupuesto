class Egreso extends Dato {
    static contadorEgresos = 0;
  
    constructor(descripcion, valor) {
      super(descripcion, valor);
      this._id = ++Egreso.contadorEgresos;
    }
  
    get id() {
      return this._id;
    }
  }

  // Creación de los arreglos de ingresos y egresos
let ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000)
  ];
  
  const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
  ];
  
  // Clase totalIngresos
  class totalIngresos {
    static calcularTotalIngresos() {
      let totalIngresos = 0;
      for (let ingreso of ingresos) {
        totalIngresos += ingreso.valor;
      }
      return totalIngresos;
    }
  }
  
  // Clase totalEgresos
  class totalEgresos {
    static calcularTotalEgresos() {
      let totalEgresos = 0;
      for (let egreso of egresos) {
        totalEgresos += egreso.valor;
      }
      return totalEgresos;
    }
  }





  // Función cargarEgresos
const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos) {
      egresosHTML += crearEgresoHTML(egreso);
    }
    const listaEgresos = document.getElementById('lista-egresos');
    listaEgresos.innerHTML = egresosHTML;
  };
  
  // Función crearEgresoHTML
  const crearEgresoHTML = (egreso) => {
    const egresoHTML = `
      <div class="elemento">
        <div class="elemento-descripcion">${egreso.descripcion}</div>
        <div class="elemento-valor">${formatoMoneda(egreso.valor)}</div>
        <div class="elemento-icono">
          <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
        </div>
      </div>
    `;
    return egresoHTML;
  };
  
  // Modificación del arreglo egresos
  egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800),
    new Egreso('Comida', 1500)
  ];
  
  // Función cargarApp
  const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
  };
  
  // Evento onload
  window.onload = cargarApp;

  