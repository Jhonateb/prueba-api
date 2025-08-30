link del video de youtube

https://www.youtube.com/watch?v=UsNK2zCYvZA

Mi Primera API REST con NestJS - Tarea 6
Este proyecto es una API REST funcional construida con NestJS que gestiona un recurso de Productos. El objetivo principal es demostrar la correcta implementación de la Arquitectura por Capas, separando responsabilidades entre Controladores, Servicios y DTOs (Data Transfer Objects).

La "base de datos" para esta tarea es un simple array en memoria, por lo que los datos se reiniciarán cada vez que el servidor se detenga.

🚀 Tecnologías Utilizadas
Framework: NestJS

Lenguaje: TypeScript

Validación de Datos: class-validator y class-transformer

Generación de IDs: uuid

📋 Requisitos Previos
Node.js (v16 o superior)

NPM (v8 o superior)

⚙️ Instalación y Puesta en Marcha
Sigue estos pasos para ejecutar el proyecto en tu entorno local:

Clonar el repositorio:

Bash

git clone https://github.com/tu-usuario/tu-repositorio.git
Navegar a la carpeta del proyecto:

Bash

cd tu-repositorio
Instalar dependencias:

Bash

npm install
Ejecutar el servidor en modo de desarrollo:

Bash

npm run start:dev
El servidor se iniciará y estará escuchando en http://localhost:3000.

Endpoints de la API
La URL base para todos los endpoints es /api/v1.

Método	Ruta	Descripción	Body de Ejemplo (para POST/PATCH)
GET	/products	Obtiene la lista de todos los productos.	N/A
GET	/products/{id}	Obtiene un producto específico por su ID.	N/A
POST	/products	Crea un nuevo producto.	{ "name": "Nuevo Producto", "price": 100, ... }
PATCH	/products/{id}	Actualiza parcialmente un producto existente.	{ "price": 125.50 }
DELETE	/products/{id}	Elimina un producto por su ID.	N/A

