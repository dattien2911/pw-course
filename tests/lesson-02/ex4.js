const myHeight = 170;

if (myHeight < 100) {
    console.log("Height must be greater than 100cm");
}
else {
    const idealWeight =  (myHeight - 100) * 9 / 10;
    const maxWeight = myHeight - 100;
    const minWeight = (myHeight - 100) * 8 / 10;
    console.log(`Your ideal weight is: ${idealWeight}, maximum weight is: ${maxWeight} and minimum weight is: ${minWeight}`)
}

