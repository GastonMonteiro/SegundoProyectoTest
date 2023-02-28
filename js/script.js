if(document.title==="index") {

    let agregados = []
    if (localStorage.getItem("agregados")) {
        agregados = JSON.parse(localStorage.getItem("agregados"))
    }

    const divProductos = document.querySelector("#divProductos")
    const productosLista = JSON.parse(localStorage.getItem("agregados"))

    const divApp = document.getElementById("app");

    
    const cardTemplate = (nombre, precio, imagen) => {
      return `<div class="card m-2" style="width: 18rem;">
          <img src="${imagen}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text fw-bold">${nombre}</p>
            <div class="text-center aling-items-center d-flex justify-content-between">
                <span class="fw-bold fs-5 mt-1">$ ${precio}</span>
                <a href="" class="btn btn-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                    </svg>
                </a>
            </div>
          </div>
        </div>`;
    };
    
    let htmlTemplate = "<div class='d-flex row mx-2 justify-content-around'>";
    
    agregados.map((element) => {
        const { nombre, precio, imagen } =
          element;
        htmlTemplate += cardTemplate(
          nombre,
          precio,
          imagen,
        );
      });
    
    htmlTemplate += "</div>";
    
    divApp.innerHTML = htmlTemplate;
}


if(document.title==="administracion") {

const botonAgregar = document.getElementById("button-addon2")
const inputNombre = document.getElementById("inputNombre")
const inputCodigo = document.getElementById("inputCodigo")
const inputCategoria = document.getElementById("inputCategoria")
const inputPrecio = document.getElementById("inputPrecio")
const inputImagen = document.getElementById("inputImagen")
const inputStock = document.getElementById("inputStock")
const inputDescripcion = document.getElementById("inputDescripcion")

let agregados = []
if (localStorage.getItem("agregados")) {
    agregados = JSON.parse(localStorage.getItem("agregados"))
}

class producto {
    constructor(nombre, codigo, categoria, precio, imagen, stock, descripcion) {
        this.nombre = nombre
        this.codigo = codigo
        this.categoria = categoria
        this.precio = precio
        this.imagen = imagen
        this.stock = stock
        this.descripcion = descripcion
    }
}


botonAgregar.addEventListener("click",(e) => {
    location.reload();
    const nombre = inputNombre.value
    const codigo = inputCodigo.value
    const categoria = inputCategoria.value
    const precio = inputPrecio.value
    const imagen = inputImagen.value
    const stock = inputStock.value
    const descripcion = inputDescripcion.value
    const nuevoProducto = new producto (nombre, codigo, categoria, precio, imagen, stock, descripcion)
    agregados.push(nuevoProducto)
    form.reset()
    localStorage.setItem("agregados", JSON.stringify(agregados))
})

    const divApp = document.querySelector("#divProductos")

    
    const cardTemplate = (nombre, codigo, categoria, precio, imagen, stock, descripcion) => {
      return `<div id="divBorrar" class="card m-2" style="width: 18rem;">
                <img src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${nombre}</h5>
                  <span>$ ${precio}</span>
                  <p class="card-text">${codigo}</p>
                  <p class="card-text">${categoria}</p>
                  <p class="card-text">${stock}</p>
                  <p class="card-text">${descripcion}</p>
                </div>
              </div>`;
    };
    

    let htmlTemplate = "<div class='d-flex row mx-2 justify-content-around'>";
    
    agregados.map((element) => {
      const { nombre, codigo, categoria, precio, imagen, stock, descripcion } =
        element;
      htmlTemplate += cardTemplate(
        nombre,
        codigo,
        categoria,
        precio,
        imagen,
        stock,
        descripcion,
      );
    });
    
    htmlTemplate += "</div>";
    
    divApp.innerHTML = htmlTemplate;
}

if(document.title==="registro") {

const botonRegistro = document.getElementById("botonRegistro")

const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputEmail = document.getElementById("inputEmail")
const inputPassword1 = document.getElementById("inputPassword1")
const inputPassword2 = document.getElementById("inputPassword2")

let usuarios = []
if (localStorage.getItem("Usuario")) {
    usuarios = JSON.parse(localStorage.getItem("Usuario"))
}

class Usuario {
    constructor( nombre, apellido, email, password1){
        this.nombre = nombre
        this.apellido = apellido
        this.email = email
        this.password = password1
    }
}

botonRegistro.addEventListener("click", (e) => {
    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const email = inputEmail.value.toLowerCase()
    const password1 = inputPassword1.value
    const password2 = inputPassword2.value
  
    usuarios.map((usuario) => {
      if (usuario.email === email) {
        alert("El email ya se encuentra registrado.")
        return false
      };
    });

    if (password1 != password2) {
        alert("Las contraseñas no coinciden")
        return false
    }

    const nuevoUsuario = new Usuario(nombre,apellido,email,password1)
    usuarios.push(nuevoUsuario)
    localStorage.setItem('Usuario', JSON.stringify(usuarios))
  })

}