const getByte = require('get-byte');

module.exports = function (data, debug) {
    if (debug) console.log("data:", data);
    
    const length = data.length !== undefined ? data.length : data.byteLength !== undefined ? data.byteLength : null;
    if (debug) console.log("length:", length);
    
    if (typeof data === "string") {
        return length > 4 && (data.endsWith('.jpg') || data.endsWith('.jpeg'));

    } else {
        if (length < 8) {
            return false;
        }
        
        return getByte(data, 0) === 0xFF &&
            getByte(data, 1) === 0xD8 &&
            getByte(data, 2) === 0xFF;
    }
};