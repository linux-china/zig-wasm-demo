extern fn add_callback(i32) void;

extern fn print(msg_ptr: [*]const u8, msg_len: usize) void;

export fn add(a: i32, b: i32) i32 {
    add_callback(a + b);
    const hello = "Hello, Zig!";
    print(hello, hello.len);
    return a+b;
}
