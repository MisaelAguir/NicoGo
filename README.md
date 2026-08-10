# NicoGo AI — Documentación Técnica

Plataforma inteligente de turismo para Nicaragua desarrollada para la **Hackathon Nicaragua 2026** (Categoría Aficionado).

---

# 1. Descripción general del proyecto

**NicoGo AI** es una plataforma inteligente de turismo diseñada para mejorar la experiencia de turistas nacionales y extranjeros mediante recomendaciones personalizadas, mapas interactivos, planificación de itinerarios y funcionamiento sin conexión a Internet.

El sistema integra inteligencia artificial para explicar recomendaciones generadas por un motor de recomendación propio, permitiendo explorar lugares turísticos, registrar negocios, consultar información de seguridad, guardar favoritos y compartir experiencias dentro de la comunidad.

Este repositorio contiene el proyecto completo:

- Frontend móvil
- Backend
- Base de datos
- Documentación técnica

---

# 2. Tecnologías utilizadas

| Capa | Tecnología |
|------|------------|
| Frontend | React 18 + TypeScript |
| Bundler / Dev Server | Vite |
| Aplicación móvil | Capacitor (Android) |
| Estilos | CSS |
| Backend / API | Python + FastAPI |
| ORM | SQLAlchemy 2 |
| Validación | Pydantic |
| Migraciones | Alembic |
| Base de datos principal | SQL Server |
| Base de datos local | SQLite |
| Autenticación | JWT |
| Inteligencia Artificial | OpenAI API |
| Control de versiones | Git + GitHub |
| IDE recomendado | Visual Studio Code |

---

# 3. Arquitectura del sistema

El proyecto implementa una arquitectura **Offline First**, donde SQL Server es la fuente principal de información y SQLite almacena una copia local en el dispositivo para garantizar el funcionamiento sin conexión.

```text
                 SQL Server
                      ▲
                      │
          API REST (Python + FastAPI)
                      │
────────────────────────────────────────────
           React + Capacitor
                      │
            SQLite (Modo Offline)
```

### Funcionamiento

**Con conexión a Internet**

- La aplicación consulta la API REST.
- La API obtiene la información desde SQL Server.
- Los datos se sincronizan con SQLite para su uso local.

**Sin conexión**

- La aplicación trabaja únicamente con SQLite.
- Los cambios realizados se almacenan localmente.
- Cuando vuelve la conexión, la información se sincroniza automáticamente con el servidor.

---

# 4. Base de datos

La base de datos principal del sistema es:

```text
NicoGo_Data_Base
```

Desarrollada sobre **Microsoft SQL Server** y organizada en los siguientes módulos:

- Usuarios y Roles
- Organización Territorial
- Lugares Turísticos
- Categorías
- Itinerarios
- Comunidad
- Recomendaciones Inteligentes
- Seguridad
- Notificaciones

La documentación técnica completa de la base de datos se encuentra dentro de:

```text
database/
docs/database/
```

---

# 5. Estructura del proyecto

```text
NicoGo/

├── frontend/
│
├── backend/
│
├── database/
│
├── docs/
│
├── assets/
│
├── README.md
│
└── .gitignore
```

## Frontend

```text
frontend/

├── android/
├── public/
├── src/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Backend

```text
backend/

├── app/
├── alembic/
├── scripts/
├── tests/
├── requirements.txt
├── .env.example
└── README.md
```

---

# 6. Requisitos técnicos

- Node.js 22 LTS
- Python 3.12+
- SQL Server
- Microsoft ODBC Driver 18
- Git
- Visual Studio Code
- Android Studio (Opcional)

---

# 7. Instalación y configuración

## Clonar el repositorio

```bash
git clone https://github.com/MisaelAguir/NicoGo.git

cd NicoGo
```

---

## Frontend

Entrar a la carpeta

```bash
cd frontend
```

Instalar dependencias

```bash
npm install
```

Ejecutar

```bash
npm run dev
```

Compilar

```bash
npm run build
```

Ejecutar en Android

```bash
npx cap sync

npx cap open android
```

---

## Backend

Entrar a la carpeta

```bash
cd backend
```

Crear entorno virtual

```bash
python -m venv .venv
```

Activar entorno (Windows)

```bash
.venv\Scripts\activate
```

Instalar dependencias

```bash
pip install -r requirements.txt
```

Ejecutar servidor

```bash
uvicorn app.main:app --reload
```

Documentación de la API

```text
http://localhost:8000/docs
```

---

# 8. Ejecución del sistema

### Frontend

```bash
npm run dev
```

### Backend

```bash
uvicorn app.main:app --reload
```

### Android

```bash
npm run build

npx cap sync

npx cap open android
```

---

# 9. Control de versiones

El proyecto utiliza **Git** y **GitHub** como sistema de control de versiones.

Repositorio oficial:

```text
https://github.com/MisaelAguir/NicoGo
```

Se recomienda utilizar la siguiente convención para los commits:

```text
feat: Nueva funcionalidad

fix: Corrección de errores

docs: Cambios en documentación

refactor: Reestructuración de código

test: Pruebas

chore: Configuración o mantenimiento
```

---

# 10. Seguridad y roles

El sistema contempla tres tipos de usuarios:

- **Administrador**
  - Gestión completa del sistema.
  - Administración de lugares turísticos.
  - Gestión de usuarios.
  - Moderación de contenido.

- **Turista**
  - Explorar lugares turísticos.
  - Crear itinerarios.
  - Guardar favoritos.
  - Escribir reseñas.
  - Consultar recomendaciones inteligentes.

- **Negocio Turístico**
  - Registrar establecimientos.
  - Administrar la información del negocio.
  - Actualizar fotografías y datos.
  - Consultar estadísticas básicas.

La autenticación se implementa mediante **JWT (JSON Web Token)** y el acceso a los recursos se controla mediante roles.

---

# 11. Funcionalidades principales

- Inicio de sesión
- Registro de turistas
- Registro de negocios turísticos
- Perfil inteligente
- Exploración de lugares turísticos
- Mapa interactivo
- Recomendaciones inteligentes
- Asistente basado en IA
- Planificación de itinerarios
- Favoritos
- Comunidad
- Seguridad del turista
- Funcionamiento Offline First
- Sincronización entre SQLite y SQL Server

---

# Estado del proyecto

Proyecto en desarrollo para la **Hackathon Nicaragua 2026**.

Actualmente se encuentra en fase de implementación del backend y la integración con la aplicación móvil.

---

# Licencia

Proyecto desarrollado con fines académicos para la **Hackathon Nicaragua 2026**.