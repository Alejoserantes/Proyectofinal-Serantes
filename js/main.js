// PRODUCTOS
const productos = [
  // indumentaria
  {
    id: "indumentaria-01",
      titulo: "Ropa Bob Esponja",
      imagen: "/img/INDUMENTARIA.JPG",
      categoria: {
          nombre: "Indumentarias",
          id: "indumentaria"
      },
      precio: 1000
  },
  {
    id: "indumentaria-02",
      titulo: "Ropa Bob Esponja",
      imagen: "/img/INDUMENTARIA.JPG",
      categoria: {
          nombre: "indumentarias",
          id: "indumentaria"
      },
      precio: 1000
  },
  {
    id: "indumentaria-03",
      titulo: "Ropa Bob Esponja",
      imagen: "/img/INDUMENTARIA.JPG",
      categoria: {
          nombre: "indumentarias",
          id: "indumentaria"
      },
      precio: 1000
  },
  {
    id: "indumentaria-04",
      titulo: "Ropa Bob Esponja",
      imagen: "/img/INDUMENTARIA.JPG",
      categoria: {
          nombre: "indumentarias",
          id: "indumentaria"
      },
      precio: 1000
  },
  
  // Camas
  {
    id: "camas-01",
      titulo: "Cama antidesgarro",
      imagen: "/img/CAMAS.JPG",
      categoria: {
          nombre: "Camas",
          id: "camas"
      },
      precio: 1000
  },
  {
    id: "camas-02",
      titulo: "Cama antidesgarro",
      imagen: "/img/CAMAS.JPG",
      categoria: {
          nombre: "Camas",
          id: "camas"
      },
      precio: 1000
  },
  {
    id: "camas-03",
      titulo: "Cama antidesgarro",
      imagen: "/img/CAMAS.JPG",
      categoria: {
          nombre: "Camas",
          id: "camas"
      },
      precio: 1000
  },
  {
    id: "camas-04",
      titulo: "Cama antidesgarro",
      imagen: "/img/CAMAS.JPG",
      categoria: {
          nombre: "Camas",
          id: "camas"
      },
      precio: 1000
  },
  {
    id: "camas-05",
      titulo: "Cama antidesgarro",
      imagen: "/img/CAMAS.JPG",
      categoria: {
          nombre: "Camas",
          id: "camas"
      },
      precio: 1000
  },
  {
    id: "camas-06",     
      titulo: "Cama antidesgarro",
      imagen: "/img/CAMAS.JPG",
      categoria: {
          nombre: "Camas",
          id: "camas"
      },
      precio: 1000
  },
  {
    id: "camas-07",
      titulo: "Cama antidesgarro",
      imagen: "/img/CAMAS.JPG",
      categoria: {
          nombre: "Camas",
          id: "camas"
      },
      precio: 1000
  },
  {
    id: "camas-08",
      titulo: "Cama antidesgarro",
      imagen: "/img/CAMAS.JPG",
      categoria: {
          nombre: "Camas",
          id: "camas"
      },
      precio: 1000
  },
  // Rascadores
  {
    id: "rascadores-01",
      titulo: "rascador-1",
      imagen: "/img/RASCADORES.JPG",
      categoria: {
          nombre: "rascadores",
          id: "rascadores"
      },
      precio: 1000
  },
  {
    id: "rascadores-02",
      titulo: "rascador-2",
      imagen: "/img/RASCADORES.JPG",
      categoria: {
          nombre: "rascadores",
          id: "rascadores"
      },
      precio: 1000
  },
  {
    id: "rascadores-03",
      titulo: "rascador-3",
      imagen: "/img/RASCADORES.JPG",
      categoria: {
          nombre: "rascadores",
          id: "rascadores"
      },
      precio: 1000
  },
  {
    id: "rascadores-04",
      titulo: "rascador-4",
      imagen: "/img/RASCADORES.JPG",
      categoria: {
          nombre: "rascadores",
          id: "rascadores"
      },
      precio: 1000
  },
 
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

  contenedorProductos.innerHTML = "";

  productosElegidos.forEach(producto => {

      const div = document.createElement("div");
      div.classList.add("producto");
      div.innerHTML = `
          <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
          <div class="producto-detalles">
              <h3 class="producto-titulo">${producto.titulo}</h3>
              <p class="producto-precio">$${producto.precio}</p>
              <button class="producto-agregar" id="${producto.id}">Agregar</button>
          </div>
      `;

      contenedorProductos.append(div);
  })

  actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

      botonesCategorias.forEach(boton => boton.classList.remove("active"));
      e.currentTarget.classList.add("active");

      if (e.currentTarget.id != "todos") {
          const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
          tituloPrincipal.innerText = productoCategoria.categoria.nombre;
          const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
          cargarProductos(productosBoton);
      } else {
          tituloPrincipal.innerText = "Todos los productos";
          cargarProductos(productos);
      }

  })
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
      boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();
} else {
  productosEnCarrito = [];
}

function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}