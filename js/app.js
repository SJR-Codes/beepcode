
let usrname = document.getElementById('usrname');
let pssword = document.getElementById('pssword');
let qrcanvas = document.getElementById("qr");

var qr = window.qr = new QRious({
    element: qrcanvas,
    size: 350,
    value: ''
});

function generatepwd () {
    // What to do
} 

const generateqr = v => {
    if (usrname.value && pssword.value) {
        qr.value = usrname.value + "\t" + pssword.value;
    }
    else if (usrname.value) {
        qr.value = usrname.value;
    }
    else if (pssword.value) {
        qr.value = pssword.value;
    }
};

usrname.addEventListener("input", () => {
    generateqr(usrname.value);
});

pssword.addEventListener("input", () => {
    generateqr(pssword.value);
});