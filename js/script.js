function calculateTriangleArea(base, height) {
  return 0.5 * base * height;
}

function calculateTrianglePerimeter(a, b, c) {
  return a + b + c;
}

function calculateParallelogramArea(base, height) {
  return base * height;
}

function calculateParallelogramPerimeter(a, b) {
  return 2 * (a + b);
}

document.getElementById('areaForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let base = parseFloat(document.getElementById('base').value);
  let height = parseFloat(document.getElementById('height').value);

  if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      alert("Masukkan nilai positif yang valid untuk alas dan tinggi.");
      return;
  }

  let area = calculateTriangleArea(base, height);
  document.getElementById('areaResult').innerText = "Luas Segitiga: " + area.toFixed(2);
});

document.getElementById('perimeterForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let sideA = parseFloat(document.getElementById('sideA').value);
  let sideB = parseFloat(document.getElementById('sideB').value);
  let sideC = parseFloat(document.getElementById('sideC').value);

  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
      alert("Masukkan nilai positif yang valid untuk semua sisi.");
      return;
  }

  let perimeter = calculateTrianglePerimeter(sideA, sideB, sideC);
  document.getElementById('perimeterResult').innerText = "Keliling Segitiga: " + perimeter.toFixed(2);
});

document.getElementById('parallelogramAreaForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let base = parseFloat(document.getElementById('basePar').value);
  let height = parseFloat(document.getElementById('heightPar').value);

  if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
      alert("Masukkan nilai positif yang valid untuk alas dan tinggi.");
      return;
  }

  let area = calculateParallelogramArea(base, height);
  document.getElementById('parallelogramAreaResult').innerText = "Luas Jajargenjang: " + area.toFixed(2);
});

document.getElementById('parallelogramPerimeterForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  let sideA = parseFloat(document.getElementById('sideAPar').value);
  let sideB = parseFloat(document.getElementById('sideBPar').value);

  if (isNaN(sideA) || isNaN(sideB) || sideA <= 0 || sideB <= 0) {
      alert("Masukkan nilai positif yang valid untuk semua sisi.");
      return;
  }

  let perimeter = calculateParallelogramPerimeter(sideA, sideB);
  document.getElementById('parallelogramPerimeterResult').innerText = "Keliling Jajargenjang: " + perimeter.toFixed(2);
});

document.querySelectorAll('input[name="shape"]').forEach(function(radio) {
  radio.addEventListener('change', function(event) {
      let shape = event.target.value;
      if (shape === 'triangle') {
          document.getElementById('triangleCalculator').style.display = 'block';
          document.getElementById('parallelogramCalculator').style.display = 'none';
      } else if (shape === 'parallelogram') {
          document.getElementById('triangleCalculator').style.display = 'none';
          document.getElementById('parallelogramCalculator').style.display = 'block';
      }
  });
});
