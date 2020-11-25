const test = require("ava");
const fs = require("fs");
const isJPEG = require("./is-jpeg");

test("identifying jpg file", t => {
    const buffer = fs.readFileSync("./data/flower.jpg");
    const arrayBuffer = buffer.buffer;
    t.true(isJPEG(buffer));
    t.true(isJPEG(arrayBuffer));
    t.true(isJPEG(new Uint8Array(arrayBuffer)));
    t.true(isJPEG(new DataView(arrayBuffer)));
});

test("identifying png file as not JPEG", t => {
    const buffer = fs.readFileSync("./data/flower.png");
    const arrayBuffer = buffer.buffer;
    t.false(isJPEG(buffer));
    t.false(isJPEG(arrayBuffer));
    t.false(isJPEG(new Uint8Array(arrayBuffer)));
    t.false(isJPEG(new DataView(arrayBuffer)));
});