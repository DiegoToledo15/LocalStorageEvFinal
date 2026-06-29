import { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [itemEditar, setItemEditar] = useState(null)
  const [datosCargados, setDatosCargados] = useState(false)

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
      }

      setItems([...items, nuevoItem])
    }
  }

  const eliminarItem = (id) => {
    const itemsFiltrados = items.filter((item) => item.id !== id)
    setItems(itemsFiltrados)
  }

  const editarItem = (item) => {
    setItemEditar(item)
  }

  return (
    <main className="contenedor">
      <section className="tarjeta">
        <h1>CRUD con Local Storage</h1>
        <Form
          agregarOActualizar={agregarOActualizar}
          itemEditar={itemEditar}
        />
        <List
          items={items}
          eliminarItem={eliminarItem}
          editarItem={editarItem}
        />
      </section>
    </main>
  )
}

export default App
