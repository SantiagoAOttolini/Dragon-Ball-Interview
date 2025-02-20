# 🐉 **Dragon Ball Characters App**

Segui este video para saber como usar la app: [Ver Video](https://www.loom.com/share/769eb2ae9f274c1093a812df9bafb9df?sid=d7f27a04-4af0-4bec-bb12-f0691a735d21)

Aplicación web para explorar personajes de **Dragon Ball**. Los usuarios pueden:

✨ Buscar personajes

🔍 Ver detalles completos

❤️ Marcar personajes favoritos

---

## 📚 **Tabla de Contenidos**

- [🚀 Instalación](#-instalación)
- [⚡ Ejecución](#-ejecución)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [🏗️ Arquitectura](#-arquitectura)
- [🛠️ Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [🧪 Tests](#-tests)
- [🔍 Linting](#-linting)

---

## 🚀 **Instalación**

Sigue estos pasos para configurar el proyecto localmente:

1. 🔗 **Clona el repositorio:**

   ```bash
   git clone https://github.com/SantiagoAOttolini/Dragon-Ball-Interview.git
   ```

2. 📂 **Navega al directorio del proyecto:**

   ```bash
   cd Dragon\ ball\ interview
   ```

3. 📦 **Instala las dependencias:**

   Con **npm**:

   ```bash
   npm install
   ```

   O con **yarn**:

   ```bash
   yarn install
   ```

---

## ⚡ **Ejecución**

### 💻 **Modo Desarrollo**

Ejecuta el siguiente comando para iniciar la aplicación:

```bash
npm start
```

🔗 Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en el navegador.

### 🚀 **Modo Producción**

Para crear una versión optimizada para producción:

```bash
npm run build
```

---

## 📂 **Estructura del Proyecto**

```
├── .gitignore
├── .vscode/
│   └── settings.json
├── babel.config.js
├── jest.config.js
├── package.json
├── public/
│   ├── favicon.ico
│   └── index.html
├── README.md
├── src/
│   ├── __mocks__/
│   │   └── fileMock.js
│   ├── App.jsx
│   ├── assets/
│   │   ├── header.png
│   │   └── like.svg
│   ├── components/
│   │   ├── character-card/
│   │   ├── header/
│   │   ├── pagination/
│   │   └── search/
│   ├── hooks/
│   │   ├── useCharacterDetail.hook.js
│   │   ├── useCharacters.hook.js
│   │   ├── useLike.hook.js
│   │   └── useSearch.hook.js
│   ├── index.js
│   ├── pages/
│   │   ├── character-detail/
│   │   └── character-home/
│   ├── reportWebVitals.js
│   ├── services/
│   ├── styles.css
│   └── utils/
│       └── parse-ki.utils.js
```

---

## 🏗️ **Arquitectura**

La aplicación sigue una **arquitectura basada en componentes y hooks de React**:

- 🧩 **src/components/**: Contiene componentes reutilizables como `CharacterCard`, `Header`, `Pagination` y `Search`.

- 🪝 **src/hooks/**: Hooks personalizados para manejar la lógica de negocio:

  - `useCharacters`: Obtiene la lista de personajes.
  - `useCharacterDetail`: Muestra los detalles de un personaje.
  - `useLike`: Administra personajes favoritos.
  - `useSearch`: Maneja la lógica de búsqueda.

- 📄 **src/pages/**: Páginas principales de la aplicación:

  - `CharacterHome`: Página de inicio con el listado de personajes.
  - `CharacterDetail`: Página con detalles específicos de un personaje.

- 🌐 **src/services/**: Lógica de interacción con la API (**dragon-ball-api.services.js**).

- 🛠️ **src/utils/**: Funciones de utilidad, como `parse-ki.utils.js`.

- 📜 **src/*/constants/**: Contiene archivos de constantes utilizadas en la aplicación.

---

## 🛠️ **Tecnologías Utilizadas**

- ⚛️ **React**: Librería para construir la interfaz de usuario.
- 🌐 **React Router**: Gestión de rutas.
- 🃏 **Jest**: Pruebas unitarias.
- 🧬 **Babel**: Transpilador de JavaScript moderno.
- 🎨 **CSS**: Estilos personalizados.

---

## 🧪 **Tests**

Ejecuta las pruebas unitarias con:

```bash
npm test
```

```bash
yarn jest
```

✔️ Las pruebas se encuentran en los directorios `__tests__`.

---

## 🔍 **Linting**

Para ejecutar ESLint y verificar el código en busca de problemas de estilo y errores, usa el siguiente comando:

```bash
npm run lint
```

Este comando ejecutará ESLint en todo el proyecto y mostrará cualquier error o advertencia según las reglas configuradas.

---

💬 **Hecho por [Santiago Ottolini](https://github.com/SantiagoAOttolini)** ✨
