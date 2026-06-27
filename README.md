# 🍽️ Sistema de Gestión Restaurante ToroMocho

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-orange.svg)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-red.svg)](https://jwt.io/)

## 📋 Descripción

Sistema de gestión para el restaurante ToroMocho, desarrollado como parte del curso de Sistemas de Información II. Implementa un módulo completo de autenticación y autorización con control de acceso basado en roles (RBAC) y base de datos relacional normalizada en 3FN.

## 🛠️ Stack Tecnológico

- **Node.js** - Entorno de ejecución
- **Express** - Framework web
- **MySQL** - Base de datos relacional
- **JWT** - Autenticación stateless
- **bcrypt** - Hashing de contraseñas
- **dotenv** - Variables de entorno

## 📁 Estructura del Proyecto
sis321-RestauranteToromocho-grupoBeta/
├── src/
│ ├── config/db.js # Configuración de BD
│ ├── controllers/authController.js # Lógica de autenticación
│ ├── middleware/auth.js # Validación de JWT
│ ├── middleware/rbac.js # Control de acceso por roles
│ ├── models/User.js # Modelo de usuario
│ └── routes/api.js # Definición de endpoints
├── sql/schema.sql # Esquema de BD
├── .env # Variables de entorno
├── .gitignore # Archivos ignorados
├── package.json # Dependencias
└── server.js # Punto de entrada

## 🚀 Instalación

```bash
# 1. Clonar repositorio
git clone https://github.com/alejandra-jpg/sis321-RestauranteToroMocho-grupoBeta.git
cd sis321-RestauranteToroMocho-grupoBeta

# 2. Instalar dependencias
npm install

# 3. Configurar .env
# Crear archivo .env con tus variables

# 4. Configurar base de datos
mysql -u root -p < sql/schema.sql

📡 Endpoints de la API
Autenticación
Método	Endpoint	Descripción	Acceso
POST	/api/register	Registrar usuario	Público
POST	/api/login	Iniciar sesión	Público
Usuarios
Método	Endpoint	Descripción	Roles
GET	/api/admin/usuarios	Listar usuarios	Admin, Gerente
DELETE	/api/admin/usuarios/:id	Eliminar usuario	Admin
Clientes
Método	Endpoint	Descripción	Roles
GET	/api/clientes	Listar clientes	Admin, Gerente, Operador
POST	/api/clientes	Crear cliente	Admin, Gerente, Operador
Productos
Método	Endpoint	Descripción	Roles
GET	/api/productos	Listar productos	Admin, Gerente, Operador
POST	/api/productos	Crear producto	Admin, Gerente
🔒 Roles y Permisos
Rol	Descripción	Permisos
Admin	Acceso total	Todos los permisos
Gerente	Gestión y reportes	CRUD usuarios, clientes, productos
Operador	Operaciones básicas	Lectura y creación de clientes/productos
🧪 Ejemplos de Uso
Registrar Usuario
bash
POST http://localhost:3000/api/register
Content-Type: application/json

{
  "nombres": "María",
  "apellidos": "Álvarez",
  "email": "maria@test.com",
  "password": "password123",
  "rol_id": 1
}
Iniciar Sesión
bash
POST http://localhost:3000/api/login
Content-Type: application/json

{
  "email": "admin@test.com",
  "password": "admin123"
}
Acceder a Endpoint Protegido
bash
GET http://localhost:3000/api/admin/usuarios
Authorization: Bearer <tu_token_jwt>
🔐 Seguridad
✅ bcrypt - Hashing de contraseñas (saltRounds=10)

✅ JWT - Tokens firmados con expiración 24h

✅ Middleware - Autenticación y autorización

✅ Variables de entorno - Configuración segura

📦 Scripts Disponibles
bash
npm run dev   # Modo desarrollo
npm start     # Modo producción
npm install   # Instalar dependencias
🤝 Equipo
Integrante	GitHub
Maria Alejandra Alvarez	@alejandra-jpg
Jose Eduardo Carazas Burgos	@eduardo-carazas
📊 Base de Datos
Diagrama Entidad-Relación
https://media/image2.png

Tablas Principales
roles - Gestión de roles

permisos - Permisos por módulo

roles_permisos - Relación roles-permisos

usuarios - Usuarios del sistema

clientes - Clientes del restaurante

productos - Productos y servicios

📝 Control de Versiones
Estrategia de Ramas
# 5. Iniciar servidor
npm run dev
main          # Rama estable
  └── develop # Integración
       ├── feature/auth
       ├── feature/database
       └── feature/rbac

Conventional Commits
feat: implementar autenticación JWT
fix: corregir validación de token
docs: actualizar documentación
refactor: optimizar conexión BD
Sprint 1 - Completado
Objetivos Alcanzados
✅ Base de datos normalizada en 3FN

✅ Autenticación con JWT y bcrypt

✅ Control de acceso RBAC

✅ Middleware de autenticación y autorización

✅ Datos de prueba LATAM (Mockaroo)

✅ Documentación completa

Próximos Pasos
⏳ Frontend (Interfaz de usuario)

⏳ Pruebas automatizadas

⏳ Despliegue en producción

⏳ Dashboard administrativo

📚 Documentación
Informe Sprint 1

Diagrama Entidad-Relación

Manual de Usuario

📄 Licencia
MIT License - Ver archivo LICENSE

📞 Contacto
Repositorio: GitHub

Documentación: GitHub Pages

Curso: Sistemas de Información II

Docente: Ing. Jimmy Nataniel Requena Llorentty
