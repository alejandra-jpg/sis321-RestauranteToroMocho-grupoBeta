const jwt = require('jsonwebtoken');

// Clave secreta para firmar tus tokens (puedes cambiarla por cualquier palabra)
const JWT_SECRET = 'mi_clave_secreta_super_segura';

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // 1. Aquí harías la consulta SQL a tu base de datos para buscar al usuario.
        // Ejemplo ficticio de validación básica:
        if (username === 'admin' && password === '123456') {
            
            // 2. Si el usuario existe y coincide la contraseña, creamos el Token
            const token = jwt.sign(
                { id: 1, usuario: username, rol: 'Administrador' }, // Datos que guardas dentro del token
                JWT_SECRET,                                         // Tu clave secreta
                { expiresIn: '2h' }                                 // Tiempo de duración del token
            );

            // 3. Respondemos al frontend con el token generado
            return res.status(200).json({
                mensaje: '¡Inicio de sesión exitoso!',
                token: token
            });
        } else {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Error interno en el servidor' });
    }
};

module.exports = { login };