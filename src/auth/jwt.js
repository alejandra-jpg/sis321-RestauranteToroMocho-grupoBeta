 const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || 'miClaveSuperSecreta123';

// Generar token JWT
const generateToken = (userData) => {
    return jwt.sign(
        { 
            id: userData.id, 
            email: userData.email,
            role: userData.role || 'user'
        },
        SECRET_KEY,
        { expiresIn: '1h' }
    );
};

// Verificar token JWT
const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};

// Middleware de autenticación
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }
    
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(403).json({ error: 'Token inválido o expirado' });
    }
    
    req.user = decoded;
    next();
};

module.exports = { generateToken, verifyToken, authMiddleware };
