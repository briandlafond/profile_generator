const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => { //(callback function)
  console.log(`Thank you for your valuable feedback: ${name}`);
  rl.question('What do you like to eat? ', (food) => {
    console.log(`Thank you for your valuable feedback: ${food}`);
    rl.question('Where do you like to hang out? ', (location) => {
      console.log(`Thank you for your valuable feedback: ${location}`);
      rl.question('Are you an animal person? ', (animal) => {
        console.log(`Thank you for your valuable feedback: ${animal}`);

        console.log(`${name}, ${food}, ${location}, ${animal}`); // needs to log prior to rl.close as it will shut down the readline
        rl.close();

      });

    });

  });

});