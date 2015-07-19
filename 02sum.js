var args = process.argv;
var argSize = args.length;

var sum = 0;
i = 2;

while (i < argSize) {
  sum = sum + parseInt(args[i]);
  i++;
}

console.log(sum);
