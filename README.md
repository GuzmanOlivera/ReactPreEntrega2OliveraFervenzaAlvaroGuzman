# Proyecto React con Vite y Google API Key

Este proyecto React utiliza Vite como bundler y necesita una API key de Google para funcionar correctamente.

## Uso de la API Key de Google

Para que este proyecto funcione correctamente, necesitas obtener una API key de Google Maps (o cualquier otro servicio de Google que necesites) y configurarla en un archivo `config.js`. Aquí está cómo hacerlo:

1. **Obtener una API Key de Google**:
   - Visita la [consola de desarrolladores de Google](https://console.developers.google.com/).
   - Crea un nuevo proyecto o selecciona uno existente.
   - Habilita la API de Google Books.
   - Genera una nueva API key en la sección de credenciales.

2. **Crear el archivo `config.js`**:
   - En la raíz del proyecto, crea un nuevo archivo llamado `config.js` dentro de la carpeta `src`.
   - Copia y pega el siguiente código en `config.js`:

   ```javascript
   // src/config.js
   const config = {
     apiKey: 'TU_API_KEY_AQUI'
   };

   export default config;
