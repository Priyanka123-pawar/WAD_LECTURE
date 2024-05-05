const funct1 = (a) => {
    console.log("function 1");
    a();
}



funct1(() => {
    console.log("function 2");
});