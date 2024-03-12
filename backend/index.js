const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Reemplaza esto con tu URI de conexión a MongoDB Atlas
const mongoDB_URI =
  "mongodb+srv://marvinlaixs:LlWOrUJgoqf7g7oT@cluster0.zbpq3nk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB database"))
  .catch((err) => console.error("Error connecting to MongoDB database:", err));

const UserSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  usuario: { type: String, required: true },
  correo: { type: String, required: true },
  contrasena: { type: String, required: true },
  telefono: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);

app.get("/", (req, res) => {
  res.send("App is Working");
});

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    if (e.code === 11000) {
      // Mensaje de error mejorado para violaciones de la clave única
      res.status(400).json({
        message: "El correo ya está registrado o el valor es nulo.",
        error: e.keyValue,
        errorMsg: e.message, // Esto mostrará el mensaje de error completo de Mongoose
      });
    } else {
      // Responder con el mensaje de error completo de Mongoose
      res.status(500).json({ message: "Algo salió mal.", error: e.message });
    }
  }
});

// Actualizar un usuario
app.patch("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar un usuario
app.delete("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
