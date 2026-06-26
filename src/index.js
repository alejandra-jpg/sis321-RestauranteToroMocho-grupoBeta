 const express = require('express');
const { generateToken, authMiddleware } = require('./auth/jwt');
const { checkRole } = require('./auth/middleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta de login - genera token
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Simulación de validación de usuario
    if (email === 'admin@test.com' && password === 'admin123') {
        const token = generateToken({ id: 1, email, role: 'admin' });
        return res.json({ token });
    }
    
    if (email === 'user@test.com' && password === 'user123') {
        const token = generateToken({ id: 2, email, role: 'user' });
        return res.json({ token });
    }
    
    res.status(401).json({ error: 'Credenciales inválidas' });
});

// Ruta protegida - cualquier usuario autenticado
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Acceso permitido', user: req.user });
});

// Ruta solo para administradores
app.get('/admin', authMiddleware, checkRole(['admin']), (req, res) => {
    res.json({ message: 'Bienvenido administrador', user: req.user });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
