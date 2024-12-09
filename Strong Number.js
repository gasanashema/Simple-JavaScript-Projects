function strong(n) {
    
    const factorial = (n) => {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };

    
    const sumOfFactorials = n
        .toString()
        .split('')
        .reduce((sum, digit) => sum + factorial(Number(digit)), 0);

    
    return sumOfFactorials === n ? "STRONG!!!!" : "Not Strong !!";
}
