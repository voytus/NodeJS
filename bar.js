//printing stack traces
function foo() {
    console.log("foo");
    bar();
}

function bar() {
    console.log("bar");
    other();
}

function other() {
    console.trace();

 }
foo();
console.log();