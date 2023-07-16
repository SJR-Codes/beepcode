
let usrname = document.getElementById('usrname');
let pssword = document.getElementById('pssword');
let qrcanvas = document.getElementById("qr");

var qr = window.qr = new QRious({
    element: qrcanvas,
    size: 350,
    value: ''
});

//thanks https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
function shuffle(s) {
    var arr = s.split('');           // Convert String to array
    
    arr.sort(function() {
      return 0.5 - Math.random();
    });  
    s = arr.join('');                // Convert Array to string
    return s;                        // Return shuffled string
}

function picker(cnt, str) {
    let rstr = '';
    for (let i = 0; i < cnt; i++) {
        let rnum = Math.floor(Math.random() * str.length);
        rstr += str[rnum];
    }

    return rstr;
}

function generateqr() {
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

function generatepwd() {
    //alert("Implemented soonish...");
    let nums = "0123456789";
    let alfs = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let chars = " +-*/^~-_:;,.<>!#¤%&()=?€§½";
    let rstr = '';
    
    rstr += picker(28, alfs);
    rstr += picker(4, chars);
    rstr += picker(4, nums);

    pssword.value = shuffle(rstr);
    generateqr();
} 

usrname.addEventListener("input", () => {
    generateqr();
});

pssword.addEventListener("input", () => {
    generateqr();
});