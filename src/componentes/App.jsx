import React from 'react'
import { Table, TableBody, TableCell, TableContainer,
   TableHead, TableRow, Paper, TextField,
    Button, Grid, Box, InputLabel, MenuItem
  ,FormControl, Select } from '@material-ui/core';  

import { v4 as uuidv4 } from 'uuid';
import './../styles.css';

// App es una clase de react ya que extiende de react.component

function generarIdAleatorio() {
  const id = Date.now().toString(36);
  return id;
}

export default class App extends React.Component {
    
  BasicSelect() {
      [genero, setGenero] = React.useState('');
    
      handleChange = (event) => {
        setGenero(event.target.value);
      };
    }

    idAleatorio = generarIdAleatorio();

    // El constructor inicializa el estado de la página con las propiedades libros, bibliotecas, libro y biblioteca.
    constructor(props) {

        // El estado libros y bibliotecas se inicializa como arreglos vacíos, mientras que libro y biblioteca son objetos con propiedades vacías.
        super(props);
        this.state = {
            libros: [],
            bibliotecas: [],
            libro: {
                id: '',
                nombre: '',
                descripcion: '',
                fechaIngreso: '',
                genero: '',
                editar: false
            },
            biblioteca: {
                id: '',
                nombre: '',
                direccion: '',
                editar: false
            }
        };
    }

    // Ahora definimos funciones que son métodos de la clase y se utilizan para realizar operaciones de CRUD 
    // (crear, leer, actualizar y eliminar) en los libros y bibliotecas.

    // Actualiza el estado del libro, toma un evento como argumento y utiliza un 'setState' para actualizar el estado del libro con los valores
    // Cada campo del formulario se identifica mediante el atributo name del campo, y se actualiza utilizando la sintaxis de propagación 
    // del objeto (...prevState.libro) para conservar las propiedades existentes y sobrescribir solo la propiedad correspondiente al campo modificado
    handleLibroChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            libro: {
                ...prevState.libro,
                [event.target.name]: event.target.value
            },
            editar: false
        }));
    };

    // Funcion para agregar un nuevo libro al arreglo de libros en el estado. Comienza creando un nuevo objeto libroNuevo que se basa en el estado actual 
    // del libro, pero también incluye un nuevo ID generado utilizando uuidv4(). Luego, utiliza el método setState para actualizar el estado 
    // de la página. Agrega el libroNuevo al arreglo de libros utilizando la sintaxis de propagación del arreglo (...prevState.libros) 
    // y restablece el estado del libro a sus valores iniciales (propiedades vacías)
    // agregarLibro = () => {
    //     const libroNuevo = {
    //         ...this.state.libro,
    //         id: uuidv4()
    //     };
    //     this.setState(prevState => ({
    //         libros: [...prevState.libros, libroNuevo],
    //         libro: {
    //             id: '',
    //             nombre: '',
    //             descripcion: '',
    //             fechaIngreso: '',
    //             genero: ''
    //         }
    //     }));
    // };

    agregarLibro = () => {
        const { libro, libros } = this.state;
        const libroNuevo = {
          ...libro,
          id: uuidv4(),
        };
    
        if (libro.editar) {
          // Si el libro está en modo de edición, actualiza el libro existente en el estado
          const librosActualizados = libros.map((l) => (l.id === libro.id ? libroNuevo : l));
          this.setState({
            libros: librosActualizados,
            libro: {
              id: '',
              nombre: '',
              descripcion: '',
              fechaIngreso: '',
              genero: '',
              editar: false // Restablecer editar en false después de la actualización
            }
          });
        } else {
          // Agregar un nuevo libro al estado
          this.setState((prevState) => ({
            libros: [...prevState.libros, libroNuevo],
            libro: {
              id: '',
              nombre: '',
              descripcion: '',
              fechaIngreso: '',
              genero: '',
              editar: false // Restablecer editar en false después de la adición
            }
          }));
        }
      };

    eliminarLibro = (id) => {
        this.setState(prevState => ({
            libros: prevState.libros.filter(libro => libro.id !== id)
        }));
    };

    // Funciones para el CRUD de bibliotecas
    handleBibliotecaChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => ({
            biblioteca: {
                ...prevState.biblioteca,
                [event.target.name]: event.target.value
            }
        }));
    };

    // agregarBiblioteca = () => {
    //     const bibliotecaNueva = {
    //         ...this.state.biblioteca,
    //         id: uuidv4()
    //     };
    //     this.setState(prevState => ({
    //         bibliotecas: [...prevState.bibliotecas, bibliotecaNueva],
    //         biblioteca: {
    //             id: '',
    //             nombre: '',
    //             direccion: ''
    //         }
    //     }));
    // };

    agregarBiblioteca = () => {
        const { biblioteca, bibliotecas } = this.state;
        const bibliotecaNueva = {
          ...biblioteca,
          id: uuidv4(),
        };
    
        if (biblioteca.editar) {
          // Si la biblioteca está en modo de edición, actualiza la biblioteca existente en el estado
          const bibliotecasActualizadas = bibliotecas.map((b) => (b.id === biblioteca.id ? bibliotecaNueva : b));
          this.setState({
            bibliotecas: bibliotecasActualizadas,
            biblioteca: {
              id: '',
              nombre: '',
              direccion: '',
              editar: false // Restablecer editar en false después de la actualización
            }
          });
        } else {
          // Agregar una nueva biblioteca al estado
          this.setState((prevState) => ({
            bibliotecas: [...prevState.bibliotecas, bibliotecaNueva],
            biblioteca: {
              id: '',
              nombre: '',
              direccion: '',
              editar: false // Restablecer editar en false después de la adición
            }
          }));
        }
      };

    eliminarBiblioteca = (id) => {
        this.setState(prevState => ({
            bibliotecas: prevState.bibliotecas.filter(biblioteca => biblioteca.id !== id)
        }));
    };

    editarLibro = (id) => {
        const { libros } = this.state;
        const libroSeleccionado = libros.find((libro) => libro.id === id);
    
        this.setState({
          libro: {
            ...libroSeleccionado,
            editar: true // Establecer editar en true para activar el modo de edición
          }
        });
      };
    
      editarBiblioteca = (id) => {
        const { bibliotecas } = this.state;
        const bibliotecaSeleccionada = bibliotecas.find((biblioteca) => biblioteca.id === id);
    
        this.setState({
          biblioteca: {
            ...bibliotecaSeleccionada,
            editar: true // Establecer editar en true para activar el modo de edición
          }
        });
      };
    

    render() {

        return (

            <Grid className='contenedor-principal' container spacing={2}>
            
                <Grid className="columna-agregar" item xs={4}>

                    <div className='contenedor-libro'>
                        <h2>Agregar libro</h2>
                        <form>
                            <TextField
                            name="nombre"
                            label="Nombre"
                            value={this.state.libro.nombre}
                            onChange={this.handleLibroChange}
                            />
                            <br />
                            <TextField
                            name="descripcion"
                            label="Descripción"
                            value={this.state.libro.descripcion}
                            onChange={this.handleLibroChange}
                            />
                            <br />
                            <TextField
                            name="fechaIngreso"
                            label="Fecha de ingreso"
                            value={this.state.libro.fechaIngreso}
                            onChange={this.handleLibroChange}
                            />
                            <br />
                            {/* <TextField
                            name="genero"
                            label="Género"
                            value={this.state.libro.genero}
                            onChange={this.handleLibroChange}
                            /> */}
                            <br />
                            <Box sx={{ minWidth: 120 }}>
                              <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Genero</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name="genero"
                                  value={this.state.libro.genero}
                                  label="Genero"
                                  onChange={this.handleLibroChange}
                                >
                                  <MenuItem value={'Terror'}>Terror</MenuItem>
                                  <MenuItem value={'Fantasia'}>Fantasia</MenuItem>
                                  <MenuItem value={'Comedia'}>Comedia</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                            <br />
                            <Button variant="contained" color="success" onClick={this.agregarLibro}>Agregar libro</Button>
                        </form>
                    </div>
            
                    <div className='contenedor-biblioteca'>

                        <h2>Agregar biblioteca</h2>
                        <form>
                            <TextField
                            name="nombre"
                            label="Nombre"
                            value={this.state.biblioteca.nombre}
                            onChange={this.handleBibliotecaChange}
                            />
                            <br />
                            <TextField
                            name="direccion"
                            label="Dirección"
                            value={this.state.biblioteca.direccion}
                            onChange={this.handleBibliotecaChange}
                            />
                            <br />
                            <Button variant="contained" color="success" onClick={this.agregarBiblioteca}>Agregar biblioteca</Button>
                        </form>
                    </div>
            </Grid>

            <div className="columna-tablas">

                <h2>Libros</h2>
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                          <TableCell>Id</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Descripción</TableCell>
                        <TableCell>Fecha de ingreso</TableCell>
                        <TableCell>Género</TableCell>
                        <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.libros.map((libro) => (
                        <TableRow key={libro.id}>
                            <TableCell>{libro.id}</TableCell>
                            <TableCell>{libro.nombre}</TableCell>
                            <TableCell>{libro.descripcion}</TableCell>
                            <TableCell>{libro.fechaIngreso}</TableCell>
                            <TableCell>{libro.genero}</TableCell>
                            <TableCell>
                            <Button variant="contained" color="secondary" onClick={() => this.eliminarLibro(libro.id)}>Eliminar</Button>
                            <Button variant="contained" color="primary" onClick={() => this.editarLibro(libro.id)}>
                                Editar
                            </Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
        
                <h2>Bibliotecas</h2>
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Dirección</TableCell>
                        <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.bibliotecas.map((biblioteca) => (
                        <TableRow key={biblioteca.id}>
                            <TableCell>{biblioteca.id}</TableCell>
                            <TableCell>{biblioteca.nombre}</TableCell>
                            <TableCell>{biblioteca.direccion}</TableCell>
                            <TableCell>
                            <Button variant="contained" color="secondary" onClick={() => this.eliminarBiblioteca(biblioteca.id)}>Eliminar</Button>
                            <Button variant="contained" color="primary" onClick={() => this.editarBiblioteca(biblioteca.id)}>
                                Editar
                            </Button>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>
            
            </Grid>
          );
        }

}