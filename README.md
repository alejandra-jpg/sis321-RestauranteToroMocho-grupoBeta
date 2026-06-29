🍽️ Sistema de Gestión: Restaurante ToroMocho

Este proyecto es el Sprint 1 del sistema de gestión para el Restaurante ToroMocho, enfocado en una arquitectura robusta, segura y escalable basada en el patrón MVC.

🚀 Stack Tecnológico

Seleccionamos la Opción C debido a su alto rendimiento y ecosistema orientado a microservicios:

Runtime: Node.js 18.x
Framework: Express 4.x
Base de Datos: MySQL 8.x
Seguridad: JWT (Autenticación stateless) & bcrypt (Hashing de contraseñas).Validación: express-validator para integridad de datos.

🛠️ Instalación y ConfiguraciónBash

# 1. Clonar el repositorio
git clone https://github.com/alejandra-jpg/sis321-RestauranteToroMocho-grupoBeta.git
cd sis321-RestauranteToroMocho-grupoBeta

# 2. Instalar dependencias
npm install

# 3. Configuración de entorno
# Crea un archivo .env en la raíz y configura tus variables:
# PORT=3000
# DB_HOST=localhost
# DB_USER=root
# DB_PASS=tu_contraseña
# JWT_SECRET=tu_secreto_super_seguro

# 4. Preparar Base de Datos
mysql -u root -p < sql/schema.sql

# 5. Iniciar en modo desarrollo
npm run dev

🏗️ Estructura del Proyecto

Utilizamos una separación de responsabilidades estricta:Plaintextsrc/

├── config/      # Conexión a BD y constantes
├── controllers/ # Lógica de negocio (Autenticación, Gestión)
├── middleware/  # Protección de rutas (JWT & RBAC)
├── models/      # Definición de esquemas de BD
├── routes/      # Endpoints de la API
└── server.js    # Punto de entrada

🔐 Control de Acceso (RBAC)

El sistema utiliza Role-Based Access Control para proteger los recursos.Rol                                     Alcance
Admin          Acceso total al sistema y gestión de usuarios.
Gerente        Gestión de clientes, productos y reportes.
Operador       Acceso limitado a operaciones básicas (creación).

Middleware de Validación

Cada endpoint protegido pasa por dos filtros:

authMiddleware: Verifica la validez del token JWT.
rbacMiddleware: Verifica que el rol_id tenga permiso para esa acción específica.

🔀 Estrategia de Ramas (Git Flow)

Para el control de versiones, seguimos una estructura jerárquica clara:

main: Código listo para producción.
develop: Integración de funcionalidades nuevas.
feature/*: Desarrollo de módulos específicos (auth, database, rbac).


📡 Endpoints Principales

Método  Endpoint                Descripción                          Acceso 
POST    /api/login             Autenticación y obtención de JWT     Público
GET     /api/admin/usuarios    Gestión de usuarios                    Admin
POST    /api/productos         Creación de nuevos platos       Admin,Gerente
GET     /api/clientes          Consulta de clientes   Admin,Gerente,Operador
