let result = document.getElementById('result');

function clearResult() {
  result.value = '';
}

function insert(value) {
  result.value += value;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}