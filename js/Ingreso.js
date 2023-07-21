  class Ingreso extends Dato {
    static contadorIngresos = 0;
  
    constructor(descripcion, valor) {
      super(descripcion, valor);
      this._id = ++Ingreso.contadorIngresos;
    }
  
    get id() {
      return this._id;
    }
  }







  
  // Función cargarIngresos
const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
      ingresosHTML += crearIngresoHTML(ingreso);
    }
    const listaIngresos = document.getElementById('lista-ingresos');
    listaIngresos.innerHTML = ingresosHTML;
  };
  
  // Función crearIngresoHTML
  const crearIngresoHTML = (ingreso) => {
    const ingresoHTML = `
      <div class="elemento">
        <div class="elemento-descripcion">${ingreso.descripcion}</div>
        <div class="elemento-valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento-icono">
          <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
        </div>
      </div>
    `;
    return ingresoHTML;
  };
  
  // Modificación del arreglo ingresos
  ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Venta auto', 50000),
    new Ingreso('Bonificación', 10000)
  ];
  
  // Función cargarApp
  const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
  };
  
  // Evento onload
  window.onload = cargarApp;