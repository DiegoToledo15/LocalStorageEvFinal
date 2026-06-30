function Item({ item, eliminarItem, editarItem, cambiarCompletado }) {
  return (
    <li className="item">
      <label className="estado-item">
        <input
          type="checkbox"
          checked={item.completado || false}
          onChange={() => cambiarCompletado(item.id)}
        />
        <span
          className={item.completado ? 'texto-item completado' : 'texto-item'}
        >
          {item.texto}
        </span>
      </label>
      <div className="acciones">
        <button
          className="boton boton-editar"
          type="button"
          onClick={() => editarItem(item)}
        >
          Editar
        </button>
        <button
          className="boton boton-eliminar"
          type="button"
          onClick={() => eliminarItem(item.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default Item
