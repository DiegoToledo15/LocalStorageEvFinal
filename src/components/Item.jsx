function Item({ item, eliminarItem, editarItem }) {
  return (
    <li className="item">
      <span>{item.texto}</span>
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
