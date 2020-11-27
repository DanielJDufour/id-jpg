# id-jpg
Identify a JPEG File in a Variety of In-Memory Objects, including ArrayBuffer, Buffer, DataView, and Uint8Array

# install
```bash
npm install id-jpg
```

# usage
```javascript
const idJPG = require("id-jpg");

idJPG(buffer); // true
idJPG(arrayBuffer); // true
idJPG(dataView); // true
idJPG(uint8Array); // true
```