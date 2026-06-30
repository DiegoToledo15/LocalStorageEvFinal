import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [itemEditar, setItemEditar] = useState(null)
  const [datosCargados, setDatosCargados] = useState(false)
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const itemsGuardados = JSON.parse(localStorage.getItem('items')) || []
    setItems(itemsGuardados)
    setDatosCargados(true)
  }, [])

  useEffect(() => {
    if (datosCargados) {
      localStorage.setItem('items', JSON.stringify(items))
    }
  }, [items, datosCargados])

  const agregarOActualizar = (texto) => {
    if (itemEditar) {
      const itemsActualizados = items.map((item) =>
        item.id === itemEditar.id ? { ...item, texto } : item,
      )

      setItems(itemsActualizados)
      setItemEditar(null)
    } else {
      const nuevoItem = {
        id: Date.now(),
        texto,
        completado: false,
      }

      setItems([...items, nuevoItem])
    }
  }

  const eliminarItem = (id) => {
    const confirmar = confirm('Seguro que deseas eliminar este elemento?')

    if (!confirmar) {
      return
    }

    const itemsFiltrados = items.filter((item) => item.id !== id)
    setItems(itemsFiltrados)
  }

  const editarItem = (item) => {
    setItemEditar(item)
  }

  const cambiarCompletado = (id) => {
    const itemsActualizados = items.map((item) =>
      item.id === id ? { ...item, completado: !item.completado } : item,
    )

    setItems(itemsActualizados)
  }

  const borrarTodos = () => {
    if (items.length === 0) {
      return
    }

    const confirmar = confirm('Seguro que deseas borrar todos los elementos?')

    if (!confirmar) {
      return
    }

    setItems([])
    setItemEditar(null)
  }

  const itemsFiltrados = items.filter((item) =>
    item.texto.toLowerCase().includes(busqueda.toLowerCase()),
  )

  return (
    <main className="contenedor">
      <section className="tarjeta">
        <h1 className="titulo-principal">CRUD con Local Storage</h1>
        <Form
          agregarOActualizar={agregarOActualizar}
          itemEditar={itemEditar}
        />
        <p className="contador">Total: {items.length}</p>
        <input
          className="buscador"
          type="text"
          placeholder="Buscar elemento"
          value={busqueda}
          onChange={(evento) => setBusqueda(evento.target.value)}
        />
        <button
          className="boton boton-borrar-todo"
          type="button"
          onClick={borrarTodos}
        >
          Borrar todo
        </button>
        <List
          items={itemsFiltrados}
          eliminarItem={eliminarItem}
          editarItem={editarItem}
          cambiarCompletado={cambiarCompletado}
        />
      </section>
    </main>
  )
}

export default App
