# 🍽️ Sistema de Gestión Restaurante ToroMocho

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-orange.svg)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-red.svg)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📋 Descripción

Sistema de gestión para el restaurante ToroMocho, desarrollado como parte del curso de Sistemas de Información II. Implementa un módulo completo de autenticación y autorización con control de acceso basado en roles (RBAC) y base de datos relacional normalizada en 3FN.

### 🎯 Características Principales

- ✅ **Autenticación JWT** - Tokens con expiración de 24 horas
- ✅ **Control de Acceso RBAC** - Roles: Admin, Gerente, Operador
- ✅ **Base de Datos Normalizada** - Esquema en 3FN con MySQL
- ✅ **Seguridad** - Contraseñas hasheadas con bcrypt (saltRounds=10)
- ✅ **Middleware** - Validación de tokens y verificación de roles
- ✅ **Datos de Prueba** - 50+ registros LATAM generados con Mockaroo

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Node.js** | 18.x | Entorno de ejecución |
| **Express** | 4.x | Framework web |
| **MySQL** | 8.x | Base de datos relacional |
| **JWT** | 9.x | Autenticación stateless |
| **bcrypt** | 5.x | Hashing de contraseñas |
| **dotenv** | 16.x | Variables de entorno |

## 📁 Estructura del Proyecto

sis321-RestauranteToromocho-grupoBeta/
├── 📁 src/
│ ├── 📁 config/
│ │ └── db.js # Configuración de base de datos
│ ├── 📁 controllers/
│ │ └── authController.js # Lógica de autenticación
│ ├── 📁 middleware/
│ │ ├── auth.js # Validación de JWT
│ │ └── rbac.js # Control de acceso por roles
│ ├── 📁 models/
│ │ └── User.js # Modelo de usuario
│ └── 📁 routes/
│ └── api.js # Definición de endpoints
├── 📁 sql/
│ └── schema.sql # Esquema de base de datos
├── 📄 .env # Variables de entorno
├── 📄 .gitignore # Archivos ignorados
├── 📄 package.json # Dependencias
├── 📄 server.js # Punto de entrada
└── 📄 README.md # Documentación


## 🚀 Instalación y Configuración

### Requisitos Previos

- Node.js 18.x o superior
- MySQL 8.x o superior
- Git
- Visual Studio Code (recomendado)

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/alejandra-jpg/sis321-RestauranteToroMocho-grupoBeta.git
cd sis321-RestauranteToroMocho-grupoBeta
