for (let i = 1; i <= 5; i++) {
    console.log(i);
}
let i = 1;

while (i <= 5) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}