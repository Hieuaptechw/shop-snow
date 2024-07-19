@extends('admin.app')
@section('content')
<div class="admin-dashboard">

    <div class="dashboard-content row">
        <div class="col-7">
            <h3>Today's Sales</h3>
            <div class="row">
                <div class="dashboard-item col-md-3">
                    <div class="dashboard-item-icon icont1">
                        <i class="bi bi-bar-chart-line-fill"></i>
                    </div>
                    <h3 class="m-0">$1k</h3>
                    <h5 class="m-0 p-0">Total Sales</h5>
                    <span>Last day +8%</span>
                </div>
                <div class="dashboard-item col-md-3">
                    <div class="dashboard-item-icon icont2">
                        <i class="bi bi-clipboard2-pulse-fill"></i>
                    </div>
                    <h3 class="m-0">300</h3>
                    <h5 class="m-0 p-0">Total Sales</h5>
                    <span>Last day +8%</span>
                </div>
                <div class="dashboard-item col-md-3">
                    <div class="dashboard-item-icon icont3">
                        <i class="bi bi-tag-fill"></i>
                    </div>
                    <h3 class="m-0">5</h3>
                    <h5 class="m-0 p-0">Total Sales</h5>
                    <span>Last day +8%</span>
                </div>
                <div class="dashboard-item col-md-3">
                    <div class="dashboard-item-icon icont4">
                        <i class="bi bi-person-add"></i>
                    </div>
                    <h3 class="m-0">8</h3>
                    <h5 class="m-0 p-0">Total Sales</h5>
                    <span>Last day +8%</span>
                </div>
            </div>
        </div>
        <div class="col-5">
            <h3>Today's Order</h3>
            <div id="piechart" style="width: 300px; height: 200px;"></div>
        </div>
    </div>
    <div class="dashboard-content row">

        <div class="col-12 product-performance">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                   
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

        var data = google.visualization.arrayToDataTable([
            ['Task', '6'],
            ['Tv', 15],
            ['Tv', 10],
            ['Water mill', 5],

        ]);

        var options = {
            title: ""
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }

</script>
@endsection