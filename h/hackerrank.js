console.log("Pausa");

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

console.log("Pausa 1");

process.stdin.on('data', function (data) {
    input_stdin += data;
});

console.log("Pausa 2");

process.stdin.on('end', function () {
    console.log(input_stdin)
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solveMeFirst(a, b) {
  // Hint: Type return a+b below
}


function main() {
  console.log("Main");

    var a = parseInt(readLine());
    var b = parseInt(readLine());;

    console.log("Aca");

    var res = solveMeFirst(a, b);
    console.log(res);
}
