<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Revenue Chart</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        #myChart {
            border: 1px solid #ddd; /* Thêm đường viền nếu cần */
        }
    </style>
</head>
<body>
  <div class="card">
    <div class="card-body">
        <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
                <div class="avtar bg-light-warning me-1">
                    <i class="ti ti-calendar-minus fs-2"></i>
                </div>
            </div>
            <div class="flex-grow-1 ms-3">
                <h4 class="mb-0">0 đ</h4>
                <h6 class="mb-0">Tổng nạp tháng</h6>
            </div>
        </div>
    </div>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  const canvas = document.getElementById('myChart');
  canvas.width = 300; // Thiết lập kích thước bằng JavaScript
  canvas.height = 200;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
</body>
</html>
