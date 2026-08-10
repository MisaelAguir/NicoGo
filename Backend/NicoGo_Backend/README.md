# NicoGo API

Backend inicial de **NicoGo**, construido con FastAPI y una arquitectura de **monolito modular orientada por funcionalidades**.

## Incluye

- API REST con FastAPI.
- Documentación Swagger y ReDoc.
- Autenticación JWT.
- Registro de usuarios turista, negocio y administrador.
- Módulos iniciales de usuarios, categorías y lugares turísticos.
- Validación de coordenadas geográficas.
- SQLAlchemy 2 para persistencia.
- SQLite como base local de desarrollo.
- Compatibilidad con SQL Server mediante `pyodbc`.
- Alembic para migraciones.
- Pruebas con Pytest.
- Ruff para formato y análisis estático.
- Dockerfile y Docker Compose.

## Arquitectura

```text
backend/
├── app/
│   ├── api/                 # Ensamblaje de rutas y dependencias HTTP
│   ├── core/                # Configuración, seguridad y excepciones
│   ├── database/            # Motor, sesiones y metadatos ORM
│   ├── modules/             # Funcionalidades del negocio
│   │   ├── auth/
│   │   ├── users/
│   │   ├── categories/
│   │   └── places/
│   ├── shared/              # Código transversal reutilizable
│   └── main.py              # Punto de entrada
├── alembic/                 # Migraciones
├── scripts/                 # Seeds y utilidades
├── tests/                   # Pruebas automatizadas
├── .env.example
├── requirements.txt
├── pyproject.toml
└── Dockerfile
```

Cada módulo se organiza así:

```text
modules/places/
├── model.py       # Entidad SQLAlchemy
├── schema.py      # DTO de entrada y salida con Pydantic
├── repository.py  # Acceso a datos
├── service.py     # Reglas y casos de uso
└── router.py      # Endpoints FastAPI
```

## Requisitos

- Python 3.12 o 3.13.
- Git.
- Visual Studio Code.
- Para SQL Server: Microsoft ODBC Driver 18 for SQL Server.

## Ejecución en Windows con VS Code

### 1. Entrar en la carpeta

```powershell
cd D:\Hackaton\NicoGo\backend
```

### 2. Crear el entorno virtual

```powershell
py -3.12 -m venv .venv
```

### 3. Activarlo

PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

CMD:

```cmd
.venv\Scripts\activate.bat
```

Si PowerShell bloquea la activación:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### 4. Instalar dependencias

```powershell
python -m pip install --upgrade pip
pip install -r requirements-dev.txt
```

### 5. Configurar el archivo de entorno

El proyecto entregado ya incluye un archivo `.env` local con la conexión solicitada a SQL Server. El archivo está excluido por `.gitignore` y no debe subirse a GitHub.

Para recrearlo desde la plantilla en otro equipo:

```powershell
Copy-Item .env.example .env
```

Después, edita `.env` y configura las credenciales reales.

### 6. Cargar categorías iniciales

```powershell
python scripts/seed_data.py
```

### 7. Ejecutar la API

```powershell
uvicorn app.main:app --reload
```

URLs:

- API: `http://127.0.0.1:8000`
- Swagger: `http://127.0.0.1:8000/docs`
- ReDoc: `http://127.0.0.1:8000/redoc`
- Salud: `http://127.0.0.1:8000/health`

## Endpoints iniciales

```text
POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/users/me
GET    /api/v1/categories
POST   /api/v1/categories
GET    /api/v1/places
GET    /api/v1/places/{place_id}
POST   /api/v1/places
```

En OAuth2, el campo `username` del login representa el correo electrónico.

## Registro de turista

```json
{
  "email": "turista@example.com",
  "full_name": "María López",
  "password": "ClaveSegura123",
  "user_type": "tourist"
}
```

## Registro de negocio

```json
{
  "email": "hotel@example.com",
  "full_name": "Hotel Nicaragua",
  "password": "ClaveSegura123",
  "user_type": "business"
}
```

## Crear un lugar turístico

Requiere un token perteneciente a un usuario de tipo `business` o `admin`.

```json
{
  "name": "Hotel Mirador",
  "description": "Hospedaje con vista panorámica y servicios turísticos.",
  "address": "Carretera a Masaya, Nicaragua",
  "latitude": 12.0021,
  "longitude": -86.1157,
  "phone": "+505 8888 8888",
  "price_from": 45.0,
  "category_ids": [6]
}
```

## Ejecutar pruebas

```powershell
pytest
```

Con cobertura:

```powershell
pytest --cov=app --cov-report=term-missing
```

## Calidad del código

```powershell
ruff check .
ruff format .
```

## Migraciones con Alembic

Crear una migración:

```powershell
alembic revision --autogenerate -m "initial schema"
```

Aplicarla:

```powershell
alembic upgrade head
```

En desarrollo inicial, la aplicación crea las tablas automáticamente. Cuando el esquema se estabilice, debe utilizarse exclusivamente Alembic.

## SQL Server

1. Instalar Microsoft ODBC Driver 18 for SQL Server.
2. Verificar acceso de red al servidor `192.168.80.23` por el puerto de SQL Server.
3. Verificar que exista la base `NicoGo_Data_Base` y que el inicio de sesión SQL esté habilitado.
4. La conexión local configurada en `.env` tiene esta forma:

```env
DATABASE_URL=mssql+pyodbc://sa:TU_PASSWORD@192.168.80.23/NicoGo_Data_Base?driver=ODBC+Driver+18+for+SQL+Server&TrustServerCertificate=yes
```

Por seguridad, la contraseña real solo debe permanecer en `.env`; no debe escribirse en `.env.example`, README, commits ni capturas públicas.

Cuando la contraseña contenga caracteres especiales, codifícalos para URL.

## Docker

```powershell
Copy-Item .env.example .env
docker compose up --build
```

## Integración con el frontend

El frontend debe usar como URL base:

```env
VITE_API_URL=http://127.0.0.1:8000/api/v1
```

Para Android Emulator, utiliza:

```env
VITE_API_URL=http://10.0.2.2:8000/api/v1
```

## Próximos módulos

1. Perfil detallado del turista.
2. Perfil y verificación de negocios.
3. Fotografías, horarios y servicios de lugares.
4. Favoritos y reseñas.
5. Motor de recomendación.
6. Itinerarios.
7. Sincronización Offline First.
8. Seguridad y emergencias.
9. Integración con OpenAI o Gemini.

## Seguridad

Antes de desplegar:

- Cambiar `SECRET_KEY`.
- Desactivar `DEBUG`.
- Restringir `CORS_ORIGINS`.
- Utilizar HTTPS.
- Configurar secretos fuera del repositorio.
- Aplicar límites de solicitudes y auditoría.


## Verificar la conexión a SQL Server

Con el entorno virtual activo, ejecuta:

```powershell
python -c "from app.database.session import engine; c=engine.connect(); print('Conexión SQL Server correcta'); c.close()"
```

Si falla, revisa el ODBC Driver 18, el firewall, el puerto 1433, la autenticación SQL y que el servidor permita conexiones remotas.
