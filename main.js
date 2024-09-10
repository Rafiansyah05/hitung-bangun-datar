const inputP = document.getElementById('inputP');
const inputL = document.getElementById('inputL');

const inputAS = document.getElementById('inputAS');
const inputBS = document.getElementById('inputBS');
const inputCS = document.getElementById('inputCS');

const inputA = document.getElementById('inputAJ');
const inputD = document.getElementById('inputDJ');
const inputT = document.getElementById('inputTJ');

const hasil1 = document.getElementById('hasil1');
const hasil2 = document.getElementById('hasil2');
const hasil3 = document.getElementById('hasil3');

function hitungPanjang() {
  hasil1.style.display = 'block';

  var P = inputP.value;
  var L = inputL.value;

  var luas = P * L;
  var keliling = 2 * P + 2 * L;

  document.getElementById('luas1').innerHTML = 'Luas =' + luas;
  document.getElementById('keliling1').innerHTML = 'Keliling =' + keliling;
}

function hitungSegitiga() {
  hasil2.style.display = 'block';

  var AS = inputAS.value;
  var BS = inputBS.value;
  var CS = inputCS.value;

  var luas = 0.5 * CS * BS;
  var keliling = 2 * AS + CS;

  document.getElementById('luas2').innerHTML = 'Luas =' + luas;
  document.getElementById('keliling2').innerHTML = 'Keliling =' + keliling;
}

function hitungJajar() {
  hasil3.style.display = 'block';

  var A = inputA.value;
  var D = inputD.value;
  var T = inputT.value;

  var luas = A * T;
  var keliling = 2 * A + 2 * D;

  document.getElementById('luas3').innerHTML = 'Luas =' + luas;
  document.getElementById('keliling3').innerHTML = 'Keliling =' + keliling;
}
