var listNumber = [];
function exNumBer() {
    var txtNumber = document.getElementById("numberInput").value * 1;
    listNumber.push(txtNumber);
    document.getElementById("Result").innerHTML = listNumber;
}

// ***********

function ex1() {
    if (listNumber.length === 0) {
        document.getElementById("Result1").innerHTML = "Xin hãy nhập số vào mảng";
        return;
    }
    var sum = 0;
    var tong = `Tổng Số Dương : `;
    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number >= 0) {
            sum += number;
        }
    }
    tong += sum;
    document.getElementById("Result1").innerHTML = tong;
}
// *************

function ex2() {
    if (listNumber.length === 0) {
        document.getElementById("Result2").innerHTML = "Xin hãy nhập số vào mảng";
        return;
    }
    var count = 0
    var dem = ` Số dương : `;
    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number >= 0) {
            count++;
        }
    }
    dem += count;
    document.getElementById("Result2").innerHTML = dem;
}


// ***************
function ex3() {
    if (listNumber.length === 0) {
        document.getElementById("Result3").innerHTML = "Xin hãy nhập số vào mảng";
        return;
    }
    var nho = `SỐ NHỎ NHẤT : `;
    var viTri = 0;
    var min = listNumber[viTri];
    for (var i = 1; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (min > number) {
            min = number;
        }
    }
    nho += min;
    document.getElementById("Result3").innerHTML = nho;
}
// *****************

function ex4() {
    if (listNumber.length === 0) {
        document.getElementById("Result4").innerHTML = "Xin hãy nhập số vào mảng";
        return;
    }
    var duongnho = `Số Dương Nhỏ Nhất : `;
    var soNhoNhat = listNumber[0];
    for (var i = 0; i < listNumber.length; i++) {
        if (soNhoNhat > listNumber[i] && listNumber[i] > 0) {
            soNhoNhat = listNumber[i];
        }
    }
    duongnho += soNhoNhat;
    document.getElementById("Result4").innerHTML = duongnho;
}

function ex5() {
    if (listNumber.length === 0) {
        document.getElementById("Result5").innerHTML = "Xin hãy nhập số vào mảng";
        return;
    }
    var chan = `Số chẵn cuối cùng : `;
    var tong = 0;
    for (var i = 0; i < listNumber.length; i++) {
        var number = listNumber[i];
        if (number % 2 === 0 && listNumber[i] > 0) {
            tong = number;
        }
        if (tong == 0) {
            tong = document.getElementById("Result5").innerHTML = -1;
        }
    }
    chan += tong;
    document.getElementById("Result5").innerHTML = chan;

}

function ex6() {
    var inPut1 = +document.getElementById("inPut1").value;
    var inPut2 = +document.getElementById("inPut2").value;
    var index3 = 0;
    var change = `MẢNG SAU KHI ĐỔI : `;
    index3 = listNumber[inPut1];
    listNumber[inPut1] = listNumber[inPut2];
    listNumber[inPut2] = index3;
    for (var i = 0; i < listNumber.length; i++) {
        change += `${listNumber[i]}`;
        if (i < listNumber.length - 1) {
            change += ', ';
        }
    }

    document.getElementById("Result6").innerHTML = change;
}
// ***********
function ex7() {
    if (listNumber.length === 0) {
        document.getElementById("Result7").innerHTML = "Vui lòng nhập số vào mảng";
        return;
    }
    var sapXep = "Mảng sau khi sắp xếp : ";
    for (var i = 0; i < listNumber.length - 1; i++) {
        for (var j = i + 1; j < listNumber.length; j++) {
            if (listNumber[i] > listNumber[j]) {
                var temp = listNumber[i];
                listNumber[i] = listNumber[j];
                listNumber[j] = temp;
            }
        }
    }
    sapXep += listNumber.join(', ');
    document.getElementById("Result7").innerHTML = sapXep;
}
// **************
function soNguyenTo(n) {
    if (n === 1 || n === 0) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    for (var x = 2; x < n; x++) {
        if (n % x === 0) {
            return false;
        }
    }
    return true;
}
function ex8() {
    if (listNumber.length === 0) {
        document.getElementById("Result8").innerHTML = "Vui lòng nhập số vào mảng";
        return;
    }

    var firstPrime = 0;
    var soHang = `SỐ NGUYÊN TỐ ĐẦU TIÊN : `;

    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            if (soNguyenTo(listNumber[i]) === true) {
                firstPrime = listNumber[i];
            }
        }
    }

    if (firstPrime == 0) {
        soHang = document.getElementById("Result8").innerHTML = -1;
    }
    soHang += firstPrime;
    document.getElementById("Result8").innerHTML = soHang;
}
// ********************
function ex9() {
    if (listNumber.length === 0) {
        document.getElementById("inputNumber").innerHTML = "Vui lòng nhập số vào mảng";
        return;
    }
    var countPrime = 0;
    var soThuc = `Các Số Nguyên Trong Mảng : `;

    for (var i = 0; i < listNumber.length; i++) {
        if (listNumber[i] > 0) {
            if (soNguyenTo(listNumber[i]) === true) {
                countPrime++;
            }
        }
    }
    soThuc += countPrime;
    document.getElementById("Result9").innerHTML = soThuc;
}