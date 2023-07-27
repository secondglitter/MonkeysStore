import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';


// Crear la instancia de express

const app = express();
app.use(express.json())
app.use(cors());

// Crear la conexion

const conexion = mysql.createConnection({
  sever: 'localhost',
  user: 'root',
  password: '',
  database: 'monkeysstore'
});

// Verificamos la conexion 
conexion.connect(function (error) {
  if (error) {
    console.log("Error al conectar a la bd")
  } else {
    console.log("Conectado exitosamente")
  }
});

// Consultar la lista de categorias
app.get('/obtenercategorias', (peticion, respuesta) => {
  const sql = "select * from categorias";
  console.log(peticion.body)
  conexion.query(sql, (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "error" });
    return respuesta.json({ mensaje: "exitoso", contenido: resultado });
  });
});

// Consultar la lista de productos
app.get('/obtenerproductos', (peticion, respuesta) => {
  const sql = "select * from productos order by nombre_producto;";
  console.log(peticion.body)
  conexion.query(sql, (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "error" });
    return respuesta.json({ mensaje: "exitoso", contenido: resultado });
  });
});

// Consultar los detalles del producto por id
app.get('/obtenerproductos/:ID', (peticion, respuesta) => {
  const ID = peticion.params.ID;
  const sql = "select * from productos where id = ?";
  console.log(peticion.body)
  conexion.query(sql, [ID], (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "error" });
    return respuesta.json({ mensaje: "exitoso", contenido: resultado });
  });
});

// Consultar la lista de productos
app.get('/obtenerusuarios', (peticion, respuesta) => {
  const sql = "select * from usuarios;";
  console.log(peticion.body)
  conexion.query(sql, (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "error" });
    return respuesta.json({ mensaje: "exitoso", contenido: resultado });
  });
});

// Consultar los detalles del producto
app.get('/obtenerdetalles/:id', (peticion, respuesta) => {
  const id = peticion.params.id;
  const sql = "select * from productos where id = ?";
  console.log(peticion.body)
  conexion.query(sql, [id], (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "error" });
    return respuesta.json({ mensaje: "exitoso", contenido: resultado });
  });
});



// Consultar la lista de productos
app.get('/filtrarcategoria/:id', (peticion, respuesta) => {
  const id = peticion.params.id;
  const sql = "select*from view_categorias_productos where categorias = ? ;"
  console.log(peticion.body)
  conexion.query(sql, [id], (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "error" });
    return respuesta.json({ mensaje: "exitoso", contenido: resultado });
  });
});

// ACCESO A USUARIO
app.post('/acceso', (peticion, respuesta) => {
  const sql = "select * from usuarios where correo_electronico=? and contrasenia=?";
  conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
    (error, resultado) => {
      if (error) return respuesta.json({ mensaje: "error en la consulta" })
      if (resultado.length > 0) {
        const token = jwt.sign({ usuario: 'administrador' }, '123', { expiresIn: '1d' });
        respuesta.cookie(token);
        return respuesta.json({ Estatus: "CORRECTO", Usuario: token })
      } else {
        return respuesta.json({ Estatus: "ERROR", Error: "Usuario o Contraseña Incorrecta" });
      }
    })
})

// ACCESO ADMINISTRADOR
app.post('/accesoadmin', (peticion, respuesta) => {
  const sql = "select * from usuarios where correo_electronico=? and contrasenia=?";
  conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
    (error, resultado) => {
      if (error) return respuesta.json({ mensaje: "error en la consulta" })
      if (resultado.length > 0) {
        const token = jwt.sign({ usuario: 'administrador' }, '123', { expiresIn: '1d' });
        respuesta.cookie(token);
        return respuesta.json({ Estatus: "CORRECTO", Usuario: token })
      } else {
        return respuesta.json({ Estatus: "ERROR", Error: "Usuario o Contraseña Incorrecta" });
      }
    })
})

// Registrar USUARIO
app.post('/registro', (peticion, respuesta) => {
  const sql = "INSERT INTO usuarios(nombre_usuario,correo_electronico,contrasenia) VALUES(?,?,?)";
  conexion.query(sql, [peticion.body.nombre_usuario, peticion.body.correo_electronico, peticion.body.contrasenia],
    (error, resultado) => {
      if (error) return respuesta.json({ mensaje: "error en la consulta" })
      return respuesta.json({ Estatus: "CORRECTO" })
    })
})
       //Subir imagenes al servidor 
       //destination indica en donde se va a guardar  
       const almacenamiento = multer.diskStorage({
        destination:(peticion,archivo,funcion)=>{
            funcion(null,'../frontend/src/imagenes')
        },
    filename:(peticion,archivo,funcion)=> {
        funcion(null, archivo.originalname + path.extname(archivo.originalname))
    }

    });

    const subirFoto = multer({
        storage: almacenamiento
    })

// Crear una nueva categoría
app.post("/crearCategoria", subirFoto.single('imagenes'), (peticion, respuesta) => {
  const { nombre, descripcion } = peticion.body; // Obtener el nombre, descripción e imagen desde la solicitud
  const sql =
    "INSERT INTO categorias (nombre_categoria, descripcion, imagenes) VALUES (?, ?, ?)";
    const datos = [
      nombre,
      descripcion,
      peticion.file.filename,
    ];
  conexion.query(sql, datos, (error, resultado) => {
    if (error) return respuesta.json({ Estatus: "Error" });
    return respuesta.json({ Estatus: "exitoso" });
  });

});

// Editar una categoría existente
app.put("/editarCategoria/:id", subirFoto.single('imagenes'), (peticion, respuesta) => {
  const id = peticion.params.id;
  const { nombre, descripcion } = peticion.body;
  const sql =
    "UPDATE categorias SET nombre_categoria = ?, descripcion = ?, imagenes = ? WHERE id = ?";
  const datos = [
    nombre,
    descripcion,
    peticion.file.filename,
    id,
  ];
  
  conexion.query(
    sql,
    datos,
    (error, resultado) => {
      if (error) return respuesta.json({ Estatus: "Error" });
      if (resultado.affectedRows === 0)
        return respuesta.json({
          Estatus: "Error",
          Error: "Categoría no encontrada",
        });
      return respuesta.json({ Estatus: "exitoso" });
    }
  );
});

// Eliminar una categoría
app.delete("/delcategoria/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM categorias WHERE id = ?;";
  conexion.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar la categoria:', err);
      return;
    }
    res.json({ message: 'Categoria eliminada correctamente' });
  });
});


// Crear un nuevo producto
// Assuming you have set up the server and database connection

app.post("/crearProducto", subirFoto.single('imagenes'), (peticion, respuesta) => {
  const {
    nombre,
    descripcion,
    precio,
    cart1,
    cart2,
    cart3,
    id_categoria_id,
  } = peticion.body;
  const sql =
    "INSERT INTO productos (nombre_producto, descripcion, precio, imagenes, caracteristica1, caracteristica2, caracteristica3, IDCategorias) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const datos = [
    nombre,
    descripcion,
    precio,
    peticion.file.filename,
    cart1,
    cart2,
    cart3,
    id_categoria_id
  ];

  conexion.query(
    sql,
    datos,
    (error, resultado) => {
      if (error) {
        return respuesta.status(500).json({ mensaje: "Error al crear el producto" });
      }
      return respuesta.json({ Estatus: "exitoso" });
    }
  );
});


// Other server routes and configurations


// Editar un producto existente

app.put("/editarProducto/:id",subirFoto.single('imagenes'), (peticion, respuesta) => {
  const id = peticion.params.id;
  const { nombre, descripcion, precio, cart1, cart2, cart3} = peticion.body;
  const sql =
    "UPDATE productos SET nombre_producto = ?, descripcion = ?, precio = ?, imagenes = ?, caracteristica1 = ?, caracteristica2 = ?, caracteristica3 = ? WHERE id = ?";
    const datos = [
      nombre,
      descripcion,
      precio,
      peticion.file.filename,
      cart1,
      cart2,
      cart3,
      id,
    ];
  
    conexion.query(
    sql,
    datos,
    (error, resultado) => {
      if (error) return respuesta.json({ Estatus: "Error" });
      if (resultado.affectedRows === 0)
        return respuesta.json({
          Estatus: "Error",
          Error: "Producto no encontrado",
        });
      return respuesta.json({ Estatus: "exitoso" });
    }
  );
});

// Eliminar un producto
app.delete("/delproducto/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM productos WHERE id = ?;";
  conexion.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el producto:', err);
      return;
    }
    res.json({ message: 'Producto eliminado correctamente' });
  });
});

// Crear un nuevo usuario
// Assuming you have set up the server and database connection

app.post("/crearUsuario", (peticion, respuesta) => {
  const {
    nombre,
    correo,
    contra,
  } = peticion.body;
  const sql =
    "INSERT INTO usuarios (nombre_usuario, correo_electronico, contrasenia) VALUES (?, ?, ?)";

  conexion.query(
    sql,
    [    nombre,
      correo,
      contra],
    (error, resultado) => {
      if (error) {
        return respuesta.status(500).json({ mensaje: "Error al crear el producto" });
      }
      return respuesta.json({ Estatus: "exitoso" });
    }
  );
});

// Editar un usuario existente
app.put("/editarUsuario/:id", (peticion, respuesta) => {
  const id = peticion.params.id;
  const { nombre,
    correo,
    contra } = peticion.body;
  const sql =
    "UPDATE usuarios SET nombre_usuario = ?, correo_electronico = ?, contrasenia = ? WHERE id_usuario = ?";
  conexion.query(
    sql,
    [nombre,
      correo,
      contra, id],
    (error, resultado) => {
      if (error) return respuesta.json({ Estatus: "Error" });
      if (resultado.affectedRows === 0)
        return respuesta.json({
          Estatus: "Error",
          Error: "Usuario no encontrado",
        });
      return respuesta.json({ Estatus: "exitoso" });
    }
  );
});

// Eliminar un usuario
app.delete("/delusuario/:id", (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM usuarios WHERE id_usuario = ?;";
  conexion.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar la categoria:', err);
      return;
    }
    res.json({ message: 'Categoria eliminada correctamente' });
  });
});


// PayPal ---------------------------------------------------------------------------



// Consultar la lista de pedidos
app.get('/obtenerpedidos', (peticion, respuesta) => {
  const sql = "select * from pedidos";
  console.log(peticion.body)
  conexion.query(sql, (error, resultado) => {
    if (error) return respuesta.json({ mensaje: "error" });
    return respuesta.json({ mensaje: "exitoso", contenido: resultado });
  });
});

// Eliminar un pedido por su ID
app.delete("/eliminarpedido/:id", (req, res) => {
  const idPedido = req.params.id;
  const query = "DELETE FROM pedidos WHERE id_pedido = ?;";

  conexion.query(query, [idPedido], (err, result) => {
    if (err) {
      console.error("Error al eliminar el pedido:", err);
      return res.status(500).json({ mensaje: "Error al eliminar el pedido" });
    }

    if (result.affectedRows === 0) {
      // Si no se encontró el pedido con el ID especificado
      return res.status(404).json({ mensaje: "Pedido no encontrado" });
    }

    res.json({ mensaje: "exitoso" });
  });
});


// Iniciamos el servidor
app.listen(8082, () => {
  console.log("servidor iniciado");
});