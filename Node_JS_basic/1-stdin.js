process.stdout.write('Welcome to Holberton School, what is your name?\n')

process.stdin.on('readable', function() {
  let name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

process.on('exit', function() {
  process.stdout.write('This important software is now closing\n');
});
