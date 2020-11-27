const test = require("ava");
const fs = require("fs");
const idJPG = require("./id-jpg");

test("identifying jpg file", t => {
    const buffer = fs.readFileSync("./data/flower.jpg");
    const arrayBuffer = buffer.buffer;
    t.true(idJPG(buffer));
    t.true(idJPG(arrayBuffer));
    t.true(idJPG(new Uint8Array(arrayBuffer)));
    t.true(idJPG(new DataView(arrayBuffer)));
});

test("identifying png file as not JPEG", t => {
    const buffer = fs.readFileSync("./data/flower.png");
    const arrayBuffer = buffer.buffer;
    t.false(idJPG(buffer));
    t.false(idJPG(arrayBuffer));
    t.false(idJPG(new Uint8Array(arrayBuffer)));
    t.false(idJPG(new DataView(arrayBuffer)));
});