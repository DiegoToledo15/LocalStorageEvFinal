function Item({ item, eliminarItem, editarItem }) {
  return (
    <li className="item">
      <span>{item.texto}</span>
      <div className="acciones">
        <button type="button" onClick={() => editarItem(item)}>
          Editar
        </button>
        <button type="button" onClick={() => eliminarItem(item.id)}>
          Eliminar
        </button>
      </div>
    </li>
  )
}

export default Item
