import React, { useState, useContext } from 'react';
import { CocheContext } from './CocheContexto';
import './Formulario.css';

const Formulario = () => {
  // Agregamos el contexto al form
  const { agregarCoche } = useContext(CocheContext);

  //Utilizamos el useState para manejar los datos de nuestro formularip
  const [formData, setFormData] = useState({
    marca: '',
    modelo: '',
    año: '',
    color: '',
    precio: '',
    kilometraje: '',
    motor: '',
    transmision: '',
    tipo_combustible: [],
    caracteristicas: '',
    descripcion: '',
    imagen: '',
    reservado: false
  });

  // Creamos un evento para cambiar los valores
  const handleChange = (e) => {
    //Eventos manejados con target
    const { name, value, type, checked } = e.target;
    //Si la casilla reservado es marcada actualiza el valor correspondiente en formData (campo reservado)
    if (type === 'checkbox') {
      if (name === 'reservado') {
        setFormData({
          ...formData,
          [name]: checked
        });
      } else {
        //Variable auxiliar para marcar el tipo de combustible
        const tiposCombustible = formData.tipo_combustible;
        //Si marcan los tipos de combustible agrega el valor al formData y si no los elimina (marca vacío)
        if (checked) {
          tiposCombustible.push(value);
        } else {
          const index = tiposCombustible.indexOf(value);
          if (index > -1) {
            tiposCombustible.splice(index, 1);
          }
        }
        //Llamamos al setter para actualizar el tipo de combustible de formData
        setFormData({
          ...formData,
          tipo_combustible: tiposCombustible
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  //Creamos un evento para cambiar las imagenes y actualizamos su estado
  const handleImageChange = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const imagenCoche = `public/images/${archivo.name}`;
      setFormData({
        ...formData,
        imagen: imagenCoche
      });
    }
  };

  //Creamos un evento para enviar los datos a la funcion agregar coche de nuestro contexto

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarCoche({
      ...formData,
      //Paso los valores a integer o float
      año: parseInt(formData.año),
      precio: parseFloat(formData.precio),
      kilometraje: parseInt(formData.kilometraje),
      //Divide la cadena recortando cada elemento del parámetro
      caracteristicas: formData.caracteristicas.split(',').map((item) => item.trim()),
      reservado: formData.reservado
    });
    //Setteo el formData para seguir agregando nuevos coches una vez de envíe
    setFormData({
      marca: '',
      modelo: '',
      año: '',
      color: '',
      precio: '',
      kilometraje: '',
      motor: '',
      transmision: '',
      tipo_combustible: [],
      caracteristicas: '',
      descripcion: '',
      imagen: '',
      reservado: false
    });
  };

  return (
    <div className="formulario-container">
      <h1>Agregar Nuevo Coche</h1>
      {/* Agrego la acción onSubmit con mi evento creado previamente */}
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label>Marca:</label>
          {/* Agrego a cada uno de los input el evento handleChange creado previamente */}
          <input type="text" name="marca" value={formData.marca} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Modelo:</label>
          <input type="text" name="modelo" value={formData.modelo} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Año:</label>
          <input type="number" name="año" value={formData.año} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Color:</label>
          <select name="color" value={formData.color} onChange={handleChange} required>
            <option value="Rojo">Rojo</option>
            <option value="Azul">Azul</option>
            <option value="Negro">Negro</option>
            <option value="Blanco">Blanco</option>
            <option value="Gris">Gris</option>
          </select>
        </div>
        <div className="form-group">
          <label>Precio:</label>
          <input type="number" name="precio" value={formData.precio} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Kilometraje:</label>
          <input type="number" name="kilometraje" value={formData.kilometraje} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Motor:</label>
          <input type="text" name="motor" value={formData.motor} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Transmisión:</label>
          <select name="transmision" value={formData.transmision} onChange={handleChange} required>
            <option value="Manual">Manual</option>
            <option value="Automático">Automático</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tipo de Combustible:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="tipo_combustible"
                value="Gasolina"
                checked={formData.tipo_combustible.includes('Gasolina')}
                onChange={handleChange}
              /> Gasolina
            </label>
            <label>
              <input
                type="checkbox"
                name="tipo_combustible"
                value="Eléctrico"
                checked={formData.tipo_combustible.includes('Eléctrico')}
                onChange={handleChange}
              /> Eléctrico
            </label>
            <label>
              <input
                type="checkbox"
                name="tipo_combustible"
                value="Diésel"
                checked={formData.tipo_combustible.includes('Diésel')}
                onChange={handleChange}
              /> Diésel
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Características:</label>
          <input type="text" name="caracteristicas" value={formData.caracteristicas} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
          <label>Imagen:</label>
          <input type="file" name="imagen" onChange={handleImageChange} required />
        </div>
        <div className="form-group">
          <label>Reservado:</label>
          <input type="checkbox" name="reservado" checked={formData.reservado} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Agregar</button>
      </form>
    </div>
  );
};

export default Formulario;