 const { verifyToken } = require('./jwt');

// Middleware para verificar roles de usuario
const checkRole = (allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ error: 'Usuario no autenticado' });
        }
        
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Permisos insuficientes' });
        }
        
        next();
    };
};

module.exports = { checkRole };
