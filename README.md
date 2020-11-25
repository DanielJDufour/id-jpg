# is-jpeg
Identify a JPEG File in a Variety of In-Memory Objects, including ArrayBuffer, Buffer, DataView, and Uint8Array

# install
```bash
npm install is-jpeg
```

# usage
```javascript
const isJPEG = require("is-jpeg");

isJPEG(buffer); // true
isJPEG(arrayBuffer); // true
isJPEG(dataView); // true
isJPEG(uint8Array); // true
```