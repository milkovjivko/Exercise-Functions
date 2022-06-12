function mainPasswordValidator(password) {
    function isLengthBetweenSixAndTen(string) {
        if ((string.length >= 6 && string.length <= 10)) {
            return true;
        } else {
            return false;
        }
    }
    function doesItHaveOnlyLettersAndNums(string) {
        for (let iterator of string) {
            let charCode = iterator.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)) {
                return false;
            }
        } return true;
    }
    function hasAtLeastTwoDigits(string) {
        let counter = 0;
        for (let iterator of string) {
            let charCode = iterator.charCodeAt(0);
            if (charCode >= 48 && charCode <= 57) {
                counter++;
            }
        }
        return counter >= 2;
    }
    let isLengthValid = isLengthBetweenSixAndTen(password);
    let doesItContainLettersAndNums = doesItHaveOnlyLettersAndNums(password);
    let hasAtLeastTwoNums = hasAtLeastTwoDigits(password);

    if (isLengthValid && doesItContainLettersAndNums && hasAtLeastTwoNums) {
        console.log("Password is valid");
    } else {
        if (!isLengthValid) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!doesItContainLettersAndNums) {
            console.log("Password must consist only of letters and digits");
        }
        if (!hasAtLeastTwoNums) {
            console.log("Password must have at least 2 digits");
        }
    }
}
mainPasswordValidator('logIn')
mainPasswordValidator('MyPass123')
mainPasswordValidator('Pa$s$s') 
