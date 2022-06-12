function addandSubtract(first, second, third) {

    let subtract = (sumFirstAndSecond, thirdNumber) => {
        return sumFirstAndSecond - thirdNumber;
    }
    let sum = (first, second) => {
        return first + second;
    }
    let sumFirstAndSecond = sum(first, second);
    let finalResult = subtract(sumFirstAndSecond, third);
    console.log(finalResult);

}
addandSubtract(23, 6, 10)