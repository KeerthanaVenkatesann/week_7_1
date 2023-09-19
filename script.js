let num = 0;

function incree() {
  num++;

  count();
}

function count() {
  document.getElementById("numbers").innerHTML = num;
}

function decree() {
  if (num > 0) {
    num--;
  }
  count();
}

function count() {
  document.getElementById("numbers").innerHTML = num;
}
