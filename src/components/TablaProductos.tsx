import { FilaCategoria } from "./FilaCategoria";
import { FilaProducto } from "./FilaProducto";

const TablaProductos = ({productos}) => {
    const filas = [];
    let ultimaCategoria = null;
    productos.forEach((producto) => {
        if (producto.categoria !== ultimaCategoria) {
          filas.push(
            <FilaCategoria
              categoria={producto.categoria}
              key={producto.categoria} />
          );
        }
        filas.push(
          <FilaProducto
            producto={producto}
            key={producto.name} />
        );
        ultimaCategoria = producto.categoria;
      });

    return (
      <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{filas}</tbody>
    </table>
    )
};

export { TablaProductos }