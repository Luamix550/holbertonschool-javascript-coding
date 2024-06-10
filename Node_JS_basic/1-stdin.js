
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', function() {
  const input = process.stdin.read();
    if (input !== null) {
      const name = input.toString().trim();
      process.stdout.write('Your name is: ' + name + '\n');
    }
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing\n');
});
