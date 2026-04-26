    function buscar() {
        const producto = document.getElementById("producto").value;

        //Resultados fictisios 
        const datos = [
            { tienda: "Tienda A", precio: "$1000" },
            { tienda: "Tienda B", precio: "$950" },
            { tienda: "Tienda C", precio: "$980" }
        ];

        const tabla = document.getElementById("resultados");
        tabla.innerHTML = "";

        datos.forEach(item => {
            const fila = `
                <tr>
                    <td>${item.tienda}</td>
                    <td>${producto}</td>
                    <td class="price">${item.precio}</td>
                    <td class="update-time">${new Date().toLocaleTimeString()}</td>
                </tr>
            `;
            tabla.innerHTML += fila;
        });
    }

    function refrescar() {
        buscar(); // reutiliza la búsqueda
    }