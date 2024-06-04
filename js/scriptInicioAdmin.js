

// Mostrar la sección correspondiente al hacer clic en el enlace del navbar principal
function showSection(sectionId, element) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).style.display = 'block';

    // Deseleccionar todos los elementos del navbar principal
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    // Seleccionar el elemento clicado del navbar principal
    element.classList.add('active');

    // Ocultar todas las subsecciones
    document.querySelectorAll('.sub-section').forEach(subSection => {
        subSection.style.display = 'none';
    });

    // Mostrar la primera subsección de la sección seleccionada si existe
    const firstSubSection = document.querySelector(`#${sectionId} .sub-section`);
    if (firstSubSection) {
        firstSubSection.style.display = 'block';
    }
}

// Mostrar la subsección correspondiente al hacer clic en el enlace del navbar de ventas
function showSubSection(subSectionId, element) {
    // Ocultar todas las subsecciones
    document.querySelectorAll('.sub-section').forEach(subSection => {
        subSection.style.display = 'none';
    });
    // Mostrar la subsección seleccionada
    document.getElementById(subSectionId).style.display = 'block';

    // Deseleccionar todos los elementos del navbar de ventas
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    // Seleccionar el elemento clicado del navbar de ventas
    element.classList.add('active');
}

// Mostrar la sección "Ventas" y su primera subsección por defecto
document.addEventListener('DOMContentLoaded', function () {
    showSection('ventas', document.querySelector('.navbar-nav .nav-link[href="#ventas"]'));
});
// -----------------------------------
// Función para buscar productos en el inventario
function buscarProductoInventario() {
    // Obtener los valores de los campos de búsqueda
    const nombre = document.getElementById('nombreProductoInventario').value.toLowerCase();
    const codigo = document.getElementById('codigoProductoInventario').value.toLowerCase();
    const descripcion = document.getElementById('descripcionProductoInventario').value.toLowerCase();

    // Aquí puedes añadir una llamada a tu API o lógica de búsqueda en tu base de datos
    // Por ahora, usaré datos simulados para ilustrar la funcionalidad

    const productosSimulados = [
        { nombre: 'Moto A', codigo: '001', descripcion: 'Moto rápida' },
        { nombre: 'Moto B', codigo: '002', descripcion: 'Moto económica' },
        { nombre: 'Moto C', codigo: '003', descripcion: 'Moto deportiva' },
        // Añade más productos según sea necesario
    ];

    // Filtrar productos simulados según los criterios de búsqueda
    const resultados = productosSimulados.filter(producto => {
        return (nombre === '' || producto.nombre.toLowerCase().includes(nombre)) &&
               (codigo === '' || producto.codigo.toLowerCase().includes(codigo)) &&
               (descripcion === '' || producto.descripcion.toLowerCase().includes(descripcion));
    });

    // Obtener el elemento de la lista de productos
    const listaProductos = document.getElementById('listaProductosInventario');
    listaProductos.innerHTML = ''; // Limpiar la lista actual

    // Mostrar los resultados en la lista
    resultados.forEach(producto => {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.textContent = `Nombre: ${producto.nombre}, Código: ${producto.codigo}, Descripción: ${producto.descripcion}`;
        listaProductos.appendChild(item);
    });

    // Mostrar un mensaje si no se encontraron productos
    if (resultados.length === 0) {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.textContent = 'No se encontraron productos.';
        listaProductos.appendChild(item);
    }
}
// --------------------------------------------
// Función para buscar productos en el inventario por categoría
function buscarCategoriaInventario() {
    // Obtener el valor del campo de búsqueda de categoría
    const nombreCategoria = document.getElementById('nombreCategoriaInventario').value.toLowerCase();

    // Aquí puedes añadir una llamada a tu API o lógica de búsqueda en tu base de datos
    // Por ahora, usaré datos simulados para ilustrar la funcionalidad

    const productosSimulados = [
        { nombre: 'Moto A', codigo: '001', descripcion: 'Moto rápida', categoria: 'Deportivas' },
        { nombre: 'Moto B', codigo: '002', descripcion: 'Moto económica', categoria: 'Económicas' },
        { nombre: 'Moto C', codigo: '003', descripcion: 'Moto deportiva', categoria: 'Deportivas' },
        // Añade más productos según sea necesario
    ];

    // Filtrar productos simulados según el criterio de búsqueda de categoría
    const resultados = productosSimulados.filter(producto => {
        return nombreCategoria === '' || producto.categoria.toLowerCase().includes(nombreCategoria);
    });

    // Obtener el elemento de la lista de categorías
    const listaCategorias = document.getElementById('listaCategoriasInventario');
    listaCategorias.innerHTML = ''; // Limpiar la lista actual

    // Mostrar los resultados en la lista
    resultados.forEach(producto => {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.textContent = `Nombre: ${producto.nombre}, Código: ${producto.codigo}, Descripción: ${producto.descripcion}, Categoría: ${producto.categoria}`;
        listaCategorias.appendChild(item);
    });

    // Mostrar un mensaje si no se encontraron productos en la categoría
    if (resultados.length === 0) {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.textContent = 'No se encontraron productos en esta categoría.';
        listaCategorias.appendChild(item);
    }
}
// ---------------------------------------
// Función para buscar productos y actualizar la vista correspondiente
function buscarProducto(tipoVenta) {
    // Obtener los valores del formulario de búsqueda
    const nombreProducto = document.getElementById('nombreProducto').value.toLowerCase();
    const codigoProducto = document.getElementById('codigoProducto').value.toLowerCase();
    const descripcionProducto = document.getElementById('descripcionProducto').value.toLowerCase();

    // Aquí puedes añadir una llamada a tu API o lógica de búsqueda en tu base de datos
    // Por ahora, usaré datos simulados para ilustrar la funcionalidad
    const productosSimulados = [
        { nombre: 'Producto A', codigo: '001', descripcion: 'Descripción A' },
        { nombre: 'Producto B', codigo: '002', descripcion: 'Descripción B' },
        { nombre: 'Producto C', codigo: '003', descripcion: 'Descripción C' },
        // Añade más productos según sea necesario
    ];

    // Filtrar productos simulados según el criterio de búsqueda
    const resultados = productosSimulados.filter(producto => {
        return (nombreProducto === '' || producto.nombre.toLowerCase().includes(nombreProducto)) &&
               (codigoProducto === '' || producto.codigo.toLowerCase().includes(codigoProducto)) &&
               (descripcionProducto === '' || producto.descripcion.toLowerCase().includes(descripcionProducto));
    });

    // Determinar la lista de productos a actualizar según el tipo de venta
    const listaProductos = tipoVenta === 'mostrador' ? document.getElementById('listaProductosMostrador') : document.getElementById('listaProductosServicioTecnico');
    listaProductos.innerHTML = ''; // Limpiar la lista actual

    // Mostrar los resultados en la lista correspondiente
    resultados.forEach(producto => {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.textContent = `Nombre: ${producto.nombre}, Código: ${producto.codigo}, Descripción: ${producto.descripcion}`;
        listaProductos.appendChild(item);
    });

    // Mostrar un mensaje si no se encontraron productos
    if (resultados.length === 0) {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.textContent = 'No se encontraron productos con los criterios especificados.';
        listaProductos.appendChild(item);
    }
}
// ----------------------------------------------
// Función para buscar proveedores y actualizar la vista correspondiente
function buscarProveedor() {
    // Obtener los valores del formulario de búsqueda
    const nombreProducto = document.getElementById('nombreProductoProveedor').value.toLowerCase();
    const codigoProducto = document.getElementById('codigoProductoProveedor').value.toLowerCase();
    const descripcionProducto = document.getElementById('descripcionProductoProveedor').value.toLowerCase();
    const nombreProveedor = document.getElementById('nombreProveedor').value.toLowerCase();

    // Aquí puedes añadir una llamada a tu API o lógica de búsqueda en tu base de datos
    // Por ahora, usaré datos simulados para ilustrar la funcionalidad
    const proveedoresSimulados = [
        { nombre: 'Proveedor A', productos: [{ nombre: 'Producto A', codigo: '001', descripcion: 'Descripción A' }] },
        { nombre: 'Proveedor B', productos: [{ nombre: 'Producto B', codigo: '002', descripcion: 'Descripción B' }] },
        { nombre: 'Proveedor C', productos: [{ nombre: 'Producto C', codigo: '003', descripcion: 'Descripción C' }] },
        // Añade más proveedores y productos según sea necesario
    ];

    // Filtrar proveedores según el criterio de búsqueda
    const resultados = proveedoresSimulados.filter(proveedor => {
        const productosFiltrados = proveedor.productos.filter(producto => {
            return (nombreProducto === '' || producto.nombre.toLowerCase().includes(nombreProducto)) &&
                   (codigoProducto === '' || producto.codigo.toLowerCase().includes(codigoProducto)) &&
                   (descripcionProducto === '' || producto.descripcion.toLowerCase().includes(descripcionProducto));
        });
        return productosFiltrados.length > 0 || (nombreProveedor !== '' && proveedor.nombre.toLowerCase().includes(nombreProveedor));
    });

    // Actualizar la lista de proveedores
    const listaProveedores = document.getElementById('listaProveedores');
    listaProveedores.innerHTML = ''; // Limpiar la lista actual

    // Mostrar los resultados en la lista
    resultados.forEach(proveedor => {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');

        const productosInfo = proveedor.productos.map(producto => `Nombre: ${producto.nombre}, Código: ${producto.codigo}, Descripción: ${producto.descripcion}`).join('<br>');

        item.innerHTML = `<strong>Proveedor: ${proveedor.nombre}</strong><br>${productosInfo}`;
        listaProveedores.appendChild(item);
    });

    // Mostrar un mensaje si no se encontraron proveedores
    if (resultados.length === 0) {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.textContent = 'No se encontraron proveedores con los criterios especificados.';
        listaProveedores.appendChild(item);
    }
}
// --------------------------------------------
// Función para registrar proveedores y actualizar la vista correspondiente
function registrarProveedor() {
    // Obtener los valores del formulario de registro
    const nombreProveedor = document.getElementById('nombreProveedorRegistrar').value;
    const direccionProveedor = document.getElementById('direccionProveedor').value;
    const telefonoProveedor = document.getElementById('telefonoProveedor').value;
    const emailProveedor = document.getElementById('emailProveedor').value;
    const empresaProveedor = document.getElementById('empresaProveedor').value;
    const listaRepuestosProveedor = document.getElementById('listaRepuestosProveedor').value;

    // Validar los campos (opcional, ya se usa 'required' en HTML)

    // Aquí puedes añadir una llamada a tu API o lógica de almacenamiento en tu base de datos
    // Por ahora, usaré almacenamiento local para ilustrar la funcionalidad
    const proveedoresRegistrados = JSON.parse(localStorage.getItem('proveedoresRegistrados')) || [];

    // Crear un nuevo objeto proveedor
    const nuevoProveedor = {
        nombre: nombreProveedor,
        direccion: direccionProveedor,
        telefono: telefonoProveedor,
        email: emailProveedor,
        empresa: empresaProveedor,
        listaRepuestos: listaRepuestosProveedor
    };

    // Añadir el nuevo proveedor a la lista de proveedores registrados
    proveedoresRegistrados.push(nuevoProveedor);
    localStorage.setItem('proveedoresRegistrados', JSON.stringify(proveedoresRegistrados));

    // Actualizar la lista de proveedores registrados en la vista
    actualizarListaProveedoresRegistrados();
}

// Función para actualizar la lista de proveedores registrados en la vista
function actualizarListaProveedoresRegistrados() {
    const proveedoresRegistrados = JSON.parse(localStorage.getItem('proveedoresRegistrados')) || [];
    const listaProveedoresRegistrados = document.getElementById('listaProveedoresRegistrados');
    listaProveedoresRegistrados.innerHTML = ''; // Limpiar la lista actual

    // Mostrar los proveedores registrados en la lista
    proveedoresRegistrados.forEach(proveedor => {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.innerHTML = `
            <strong>Nombre:</strong> ${proveedor.nombre}<br>
            <strong>Dirección:</strong> ${proveedor.direccion}<br>
            <strong>Teléfono:</strong> ${proveedor.telefono}<br>
            <strong>Email:</strong> ${proveedor.email}<br>
            <strong>Empresa:</strong> ${proveedor.empresa}<br>
            <strong>Lista de Repuestos:</strong> ${proveedor.listaRepuestos}
        `;
        listaProveedoresRegistrados.appendChild(item);
    });

    // Mostrar un mensaje si no hay proveedores registrados
    if (proveedoresRegistrados.length === 0) {
        const item = document.createElement('li');
        item.classList.add('list-group-item', 'bg-dark', 'text-white');
        item.textContent = 'No hay proveedores registrados.';
        listaProveedoresRegistrados.appendChild(item);
    }
}

// Llamar a la función para mostrar la lista de proveedores registrados al cargar la página
document.addEventListener('DOMContentLoaded', actualizarListaProveedoresRegistrados);
// ------------------------------------------
// Función para seleccionar un servicio técnico de la lista
// Función para seleccionar un servicio técnico de la lista
function seleccionarServicio(checkbox) {
    const listItem = checkbox.parentElement;
    listItem.classList.toggle('active', checkbox.checked);
}

// Función para agregar los servicios técnicos seleccionados a la factura
function agregarProductosAFactura(tipo) {
    const listaServiciosTecnicos = document.getElementById('listaServiciosTecnicos');
    const serviciosSeleccionados = listaServiciosTecnicos.querySelectorAll('.list-group-item.active');
    
    if (serviciosSeleccionados.length === 0) {
        alert('Por favor, seleccione al menos un servicio técnico.');
        return;
    }

    const productosSeleccionados = Array.from(serviciosSeleccionados).map(servicio => servicio.textContent.trim());

    // Aquí puedes agregar la lógica para manejar la adición de los servicios seleccionados a la factura.
    // Por ahora, simplemente mostraré una alerta con los servicios seleccionados.
    alert(`Servicios técnicos agregados a la factura: ${productosSeleccionados.join(', ')}`);
}
