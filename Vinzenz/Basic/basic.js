var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var table2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var _i = 0, table_1 = table; _i < table_1.length; _i++) {
    var a = table_1[_i];
    for (var _a = 0, table2_1 = table2; _a < table2_1.length; _a++) {
        var b = table2_1[_a];
        var result = a * b;
        console.log(a + " x " + b + " = " + result);
    }
}
;
