@extends('admin.app')
@section('content')
    <div class="admin-dashboard">
        @if (session('token'))
            <script>
                var token = "{{ session('token') }}";
                localStorage.setItem('adminToken', token);
            </script>
        @endif
        <div class="dashboard-content row">
            <h3>Shop Management Overview</h3>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="avtar bg-light-primary me-3">
                                <i class="bi bi-bar-chart"></i>
                            </div>
                            <div>
                                <h4 class="mb-0">{{ $totalProducts }}</h4>
                                <p class="mb-0 text-opacity-75 capitalize">Total Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="avtar bg-light-warning me-3">
                                <i class="bi bi-truck"></i>
                            </div>
                            <div>
                                <h4 class="mb-0">{{ $totalOrderProcessing }}</h4>
                                <p class="mb-0 text-opacity-75 capitalize">Orders in Transit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="avtar bg-light-warning me-3">
                                <i class="bi bi-cart-check"></i>
                            </div>
                            <div>
                                <h4 class="mb-0">{{ $totalOrderPending }}</h4>
                                <p class="mb-0 text-opacity-75 capitalize">Pending Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="avtar bg-light-info me-3">
                                <i class="bi bi-receipt"></i>
                            </div>
                            <div>
                                <h4 class="mb-0">{{ $totalOrderCompleted }}</h4>
                                <p class="mb-0 text-opacity-75 capitalize">Completed Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="avtar bg-light-success me-3">
                                <i class="bi bi-people"></i>
                            </div>
                            <div>
                                <h4 class="mb-0">{{ $totalCustomers }}</h4>
                                <p class="mb-0 text-opacity-75 capitalize">Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="avtar bg-light-danger me-3">
                                <i class="bi bi-cart"></i>
                            </div>
                            <div>
                                <h4 class="mb-0">{{ $totalSoldProduct }}</h4>
                                <p class="mb-0 text-opacity-75 capitalize">Total Sold Products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="avtar bg-light-danger me-3">
                                <i class="bi bi-graph-up"></i>
                            </div>
                            <div>
                                <h4 class="mb-0">{{ $totalRevenueMonth }}$</h4>
                                <p class="mb-0 text-opacity-75 capitalize">Revenue This Month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card">
                    <div class="card-body p-3">
                        <div class="d-flex align-items-center">
                            <div class="avtar bg-light-success me-3">
                                <i class="bi bi-wallet"></i>
                            </div>
                            <div>
                                <h4 class="mb-0">{{ $totalRevenueYear }}$</h4>
                                <p class="mb-0 text-opacity-75 capitalize">Revenue This Year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dashboard-content row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body p-3">
                        <h5 class="card-title">Revenue and Profit</h5>

                        <canvas id="revenue-chart"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body p-3">
                        <h5 class="card-title">Recent Orders</h5>

                        <ul class="list-group">
                            @foreach ($recentOrder as $order)
                                <li class="list-group-item">
                                    Order: {{ $order->order_code }} - Customer {{ $order->user_name }} -
                                    {{ $order->status }}
                                </li>
                            @endforeach
                        </ul>

                        <div class="mt-3">
                            {{ $recentOrder->links() }}
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body p-3">
                        <h5 class="card-title">Recent Reviews</h5>
                        <ul class="list-group">
                            @foreach ($recentReviews as $review)
                                <li class="list-group-item">
                                    Review: #{{ $review->review_id }} - Customer {{ $review->user_name }} - {{ $review->comment }}
                                </li>
                            @endforeach
                        </ul>
                
                        <!-- Hiển thị phân trang -->
                        <div class="mt-3">
                            {{ $recentReviews->links() }}
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var ctx = document.getElementById('revenue-chart').getContext('2d');
            var revenueData = @json($monthlyRevenue);
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December'
                    ],
                    datasets: [{
                            label: 'Revenue',
                            data: revenueData,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',

                            borderWidth: 1
                        },

                    ]
                },
                options: {
                    scales: {
                        x: {
                            beginAtZero: true
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        });
    </script>
@endsection
