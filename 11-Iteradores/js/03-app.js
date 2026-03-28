// fizz buzz

// 3 6 9 12... fizz
// 5 10 15 20... buzz
// 15 30 45 60... fizz buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) { // Si el numero es multiplo de 3 y 5
        console.log('fizz buzz');
    } else if (i % 3 === 0) { // Si el numero es multiplo de 3
        console.log('fizz');
    } else if (i % 5 === 0) { // Si el numero es multiplo de 5
        console.log('buzz');
    } else { // Si el numero no es multiplo de 3 ni de 5
        console.log(i);
    }
}