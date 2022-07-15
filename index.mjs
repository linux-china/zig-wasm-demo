import {readFileSync} from 'node:fs';

const source = readFileSync("./math.wasm");

function getString(ptr, len) {
    const slice = wasmInstance.exports.memory.buffer.slice(ptr, ptr + len);
    const textDecoder = new TextDecoder();
    return textDecoder.decode(slice);
}

const wasmInstance = await WebAssembly.instantiate(new Uint8Array(source), {
    env: {
        add_callback: (result) => {
            console.log(`The result is ${result}`);
        },
        print: (ptr, len) => {
            console.log(getString(ptr, len));
        }
    }
}).then(result => {
    return result.instance;
});

wasmInstance.exports.add(1, 2);
