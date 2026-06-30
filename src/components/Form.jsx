import { useEffect, useState } from 'react'

function Form({ agregarOActualizar, itemEditar }) {
  const [texto, setTexto] = useState('')

  useEffect(() => {
    if (itemEditar) {
      setTexto(itemEditar.texto)
    } else {
      setTexto('')
    }
  }, [itemEditar])

  const manejarEnvio = (evento) => {
    evento.preventDefault()

    if (!texto.trim()) {
      alert('Debes escribir un elemento')
      return
    }

    agregarOActualizar(texto.trim())
    setTexto('')
  }

  return (
    <form className="formulario" onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Escribe un elemento"
        value={texto}
        onChange={(evento) => setTexto(evento.target.value)}
      />
      <button className="boton boton-principal" type="submit">
        {itemEditar ? 'Actualizar' : 'Agregar'}
      </button>
    </form>
  )
}

export default Form
