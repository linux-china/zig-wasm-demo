Zig Wasm/WASI demo
=====================
Build Wasm/WASI with Zig Language and run demo with [Node](https://nodejs.org/)/[Deno](https://deno.land/)/[Bun](https://bun.sh/) and [wasmtime](https://github.com/bytecodealliance/wasmtime).

# Features

* WebAssembly: src/math.zig with imports and exports
* WASI: src/wasi.zig

# How to get started?

* Build WebAssembly: `npm run build-wasm`
* Build WASI: `npm run build-wasi` and run with `wasmtime main.wasm`
* Run WebAssembly demo with Node: `node index.mjs`
* Run WebAssembly demo with Bun: `bun index.mjs`
* Run WebAssembly demo with Deno: `deno run --compat --unstable -A index.mjs`

# References

* Zig: https://ziglang.org/
* Zig WebAssembly: https://ziglang.org/documentation/0.9.1/#WebAssembly
* zig-wasm-dom: https://github.com/shritesh/zig-wasm-dom
* wit-bindgen: language bindings generator for wit https://github.com/bytecodealliance/wit-bindgen
