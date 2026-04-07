# E6-M7-Ejercicio
Modelado de Relaciones en un Blog Básico 

## Descripción

Este proyecto corresponde al ejercicio **E6-M7**, cuyo objetivo es aprender a definir y utilizar relaciones entre modelos con **Sequelize** y **PostgreSQL**.

En este caso, se implementa una relación **uno a muchos (one-to-many)** entre dos modelos:

- **Usuario**
- **Publicacion**

La lógica del modelo es la siguiente:

- Un **usuario** puede tener **muchas publicaciones**
- Una **publicación** pertenece a **un solo usuario**

---

## Objetivo del ejercicio

Aplicar relaciones entre modelos en Sequelize utilizando:

- `hasMany()`
- `belongsTo()`
- creación de datos relacionados
- consulta con `include` para obtener datos asociados

---

## Tecnologías utilizadas

- Node.js
- Sequelize
- PostgreSQL
- Neon
- GitHub Codespaces
- dotenv

---

## Estructura del proyecto

```bash
.
├── config
│   └── database.js
├── models
│   ├── Usuario.js
│   ├── Publicacion.js
│   └── index.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── README.md