const productosVenta = [
    {
      nombre: "Teclado Mecanico Logitech PRO TKL LOL 2 Switch Brown",
      codigo: "SKU: 920-010533",
      categoria: "Teclados",
      precio: 29000,
      url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33275_Teclado_Mecanico_Logitech_PRO_TKL_LOL_2_Switch_Brown_30e10b48-grn.jpg",
    },
    {
      nombre: "Teclado Logitech G815 Mechanical RGB Lightsync",
      precio: 50159,
      url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16207_Teclado_Logitech_G815_Mechanical_RGB_Lightsync_5ab9b8b1-grn.jpg",
    },
    {
      nombre: "Teclado Mecanico HP HyperX Alloy Origins Core RGB Switch Blue US",
      precio: 22811,
      url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26679_Teclado_Mecanico_HP_HyperX_Alloy_Origins_Core_RGB_Switch_Blue_US_5dfa8f9a-grn.jpg",
    },
    {
      nombre: "Teclado Mecanico HP HyperX Origins 60 HX Switch Aqua",
      precio: 20000,
      url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31469_Teclado_Mecanico_HP_HyperX_Origins_60_HX_Switch_Aqua_d7ac3439-grn.jpg",
    },
    {
        nombre: "Teclado Mecanico Inalambrico Redragon Draconic K530W-RGB White",
        precio: 15740,
        url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21938_Teclado_Mecanico_Inalambrico_Redragon_Draconic_K530W-RGB_White_7dcf0bf5-grn.jpg",
      },
      {
        nombre: "Teclado Mecanico Redragon Horus K622 TKL RGB Switch Red ESP",
        precio: 16480,
        url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35393_Teclado_Mecanico_Redragon_Horus_K622_TKL_RGB_Switch_Red_ESP_80618d6c-grn.jpg",
      },
      {
        nombre: "Auriculares ASUS ROG DELTA CORE Gaming",
        precio: 47774,
        url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16276_Auriculares_ASUS_ROG_DELTA_CORE_Gaming_72121499-grn.jpg",
      },
      {
        nombre: "Auriculares Logitech G635 LightSync 7.1",
        precio: 30990,
        url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13681_Auriculares_Logitech_G635_LightSync_7.1_da750b51-grn.jpg",
      },
      {
        nombre: "Auriculares Inalambricos Logitech G733 Lightspeed RGB Black",
        precio: 45550,
        url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_24282_Auriculares_Inalambricos_Logitech_G733_Lightspeed_RGB_Black__fd9e8bb0-grn.jpg",
      },
      {
        nombre: "Auriculares HP HyperX Cloud II Red",
        precio: 34080,
        url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11934_Auriculares_HP_HyperX_Cloud_II_Red_PC___PS4___Switch___XBOX_94ae061e-grn.jpg",
      },
      {
        nombre: "Auriculares HyperX Cloud Flight Black Wireless",
        precio: 38550,
        url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30990_Auriculares_HyperX_Cloud_Flight_Black_Wireless_ee2bc8f7-grn.jpg",
      },
      {
        nombre: "Auriculares Cougar Phontum PRO PRIX RGB",
        precio: 21590,
        url: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34077_Auriculares_Cougar_Phontum_PRO_PRIX_RGB_4d7fbe86-grn.jpg",
      },
  ];
  
  
  
  const obtenerDescuento = (precio, descuento) => {
    return precio - descuento;
  };
  
  const cardTemplate = (url, titulo, nombre, link, precio, descuento) => {
    return `<div class="card m-2" style="width: 18rem;">
        <img src="${url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulo}</h5>
          <span>$ ${
            descuento !== null ? obtenerDescuento(precio, descuento) : precio
          }</span>
          <p class="card-text">${nombre}</p>
          <a href="${link}" class="btn btn-warning">Agregar a la lista</a>
        </div>
      </div>`;
  };
  
  let htmlTemplate = "<div class='d-flex row mx-2 justify-content-around'>";
  
  productosVenta.map((element) => {
    const { url, nombre, descripcion, precio, descuento, monto_descuento } =
      element;
    htmlTemplate += cardTemplate(
      url,
      nombre,
      descripcion,
      "",
      precio,
      descuento ? monto_descuento : ""
    );
  });
  
  htmlTemplate += "</div>";
  
  divApp.innerHTML = htmlTemplate;