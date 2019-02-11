function jsonSubmit() {
    let obj = document.getElementById("input").value;
    let parsObj = JSON.parse(obj);
    let jsn = JSON.stringify(parsObj);
    document.getElementById("result").innerHTML = jsn;
}