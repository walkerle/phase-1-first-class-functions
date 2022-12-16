function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    // return function randomFunction() {};

    // Arrow Function example
    const randomFunction = () => '';
    return randomFunction
}

function returnsAnAnonymousFunction() {
    return () => x;
    // return function () {
    //     };
}