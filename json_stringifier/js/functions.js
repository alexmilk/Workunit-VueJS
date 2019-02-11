function jsonSubmit() {
    let obj = document.getElementById("input").value;
    let jsn = JSON.stringify(obj);
    document.getElementById("result").innerHTML = jsn;
}