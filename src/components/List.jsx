import Item from './Item'

function List({ items, eliminarItem, editarItem }) {
  return (
    <section className="lista-contenedor">
      <h2>Elementos guardados</h2>

      {items.length === 0 ? (
        <p className="mensaje-vacio">No hay elementos registrados.</p>
      ) : (
        <ul className="lista">
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              eliminarItem={eliminarItem}
              editarItem={editarItem}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default List
