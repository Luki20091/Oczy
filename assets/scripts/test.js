var count = document.getElementById("c-item");
var answer = document.getElementById("answer");
var result = 0;




document.getElementById("next").addEventListener("click", test);



$(document).ready(function () {

    $('#answer').keydown(function (event) {
        if (event.keyCode == 13) {
            test();
            return false;
        }
        return true;
    });
    return true;
});

function test() {
    if (count.innerHTML == 1 && answer.value != "") {
        document.getElementById("img1").classList.remove("visible");
        document.getElementById("img2").classList.add("visible");
        if (document.getElementById("answer").value == "1") {
            result = result + 1;
        };
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
        count.innerHTML = 2;
        return false;
    };
    if (count.innerHTML == 2 && answer.value != "") {
        document.getElementById("img2").classList.remove("visible");
        document.getElementById("img3").classList.add("visible");
        if (document.getElementById("answer").value == "j") {
            result = result + 1;
        };
        if (document.getElementById("answer").value == "J") {
            result = result + 1;
        };
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
        count.innerHTML = 3;
        return false;
    };
    if (count.innerHTML == 3 && answer.value != "") {
        document.getElementById("img3").classList.remove("visible");
        document.getElementById("img4").classList.add("visible");
        if (document.getElementById("answer").value == "v") {
            result = result + 1;
        };
        if (document.getElementById("answer").value == "V") {
            result = result + 1;
        };
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
        count.innerHTML = 4;
        return false;
    };
    if (count.innerHTML == 4 && answer.value != "") {
        document.getElementById("img4").classList.remove("visible");
        document.getElementById("img5").classList.add("visible");
        if (document.getElementById("answer").value == "q") {
            result = result + 1;
        };
        if (document.getElementById("answer").value == "Q") {
            result = result + 1;
        };
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
        count.innerHTML = 5;
        return false;
    };
    if (count.innerHTML == 5 && answer.value != "") {
        document.getElementById("img5").classList.remove("visible");
        document.getElementById("img6").classList.add("visible");
        if (document.getElementById("answer").value == "c") {
            result = result + 1;
        };
        if (document.getElementById("answer").value == "C") {
            result = result + 1;
        };
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
        count.innerHTML = 6;
        return false;
    };
    if (count.innerHTML == 6 && answer.value != "") {
        document.getElementById("img6").classList.remove("visible");
        document.getElementById("img7").classList.add("visible");
        if (document.getElementById("answer").value == "9") {
            result = result + 1;
        };
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
        count.innerHTML = 7;
        return false;
    };
    if (count.innerHTML == 7 && answer.value != "") {
        document.getElementById("img7").classList.remove("visible");
        document.getElementById("img8").classList.add("visible");
        if (document.getElementById("answer").value == "5") {
            result = result + 1;
        };
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
        count.innerHTML = 8;
        return false;
    };
    if (count.innerHTML == 8 && answer.value != "") {
        document.getElementById("img8").classList.remove("visible");
        document.getElementById("img9").classList.add("visible");
        document.getElementById("next").innerHTML = "Sprawdź";
        if (document.getElementById("answer").value == "h") {
            result = result + 1;
        };
        if (document.getElementById("answer").value == "H") {
            result = result + 1;
        };
        document.getElementById("answer").value = "";
        document.getElementById("answer").focus();
        count.innerHTML = 9;
        return false;
    };
    if (count.innerHTML == 9 && answer.value != "") {
        if (document.getElementById("answer").value == "f") {
            result = result + 1;
        };
        if (document.getElementById("answer").value == "F") {
            result = result + 1;
        };
        if (result >= 0 && result <= 4) {
            document.getElementById("no").style.display = "block";
            document.getElementById("r-item").style.color = "red";
        };
        if (result >= 5 && result <= 7) {
            document.getElementById("ok").style.display = "block";
            document.getElementById("r-item").style.color = "yellow";
        };
        if (result >= 8 && result <= 9) {
            document.getElementById("yas").style.display = "block";
            document.getElementById("r-item").style.color = "lightgreen";
        };
        document.getElementById("answer").value = "";
        document.getElementById("img9").classList.remove("visible");
        document.getElementById("next").classList.remove("visible");
        document.getElementById("answer").style.display = "none";
        document.getElementById("test-question").style.display = "none";
        document.getElementById("h1-test").style.display = "none";
        document.getElementById("h1-test2").style.display = "none";
        document.getElementById("h1-result").style.display = "block";
        document.getElementById("r-item").innerHTML = result;
        return false;
    }
    else {
        document.getElementById("answer").focus();
    };
};

