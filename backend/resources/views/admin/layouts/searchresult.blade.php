@extends('admin.app')

@section('content')
    <div class="search-result">
        <h3>Search Results for "{{ $query }}"</h3>
        @if (
            $products->isEmpty() &&
                $categories->isEmpty() &&
                $brands->isEmpty() &&
                $subcategories->isEmpty() &&
                $orders->isEmpty())
            <h4>No results found.</h4>
        @else
            @if ($products->isnotEmpty())
                <h2>Products</h2>
                <table class="product-list-table table table-striped">
                    <thead>
                        <tr class="product-list-table-header">
                            <td>Name</td>
                            <td>Price</td>
                            <td>Image</td>
                            <td>Quantity</td>
                            <td>Option</td>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($products as $product)
                            <tr>
                                <td>{{ $product->name }}</td>
                                <td>${{ $product->price_sale }}</td>
                                <td><img src="{{ asset($product->avatar_product) }}" alt="Product Image" style="width:70px;">
                                </td>

                                <td>{{ $product->quantity }}</td>
                                <td>
                                    <a href="{{ url('/admin/products/edit/' . $product->product_id) }}"
                                        class="btn btn-primary btn-sm">Edit</a>
                                    <form action="{{ url('/admin/products/delete/' . $product->product_id) }}" method="POST"
                                        style="display:inline;" onsubmit="return confirmDelete();">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            @endif

            @if ($categories->isnotEmpty())
                <h2>Categories</h2>
                <table class="categorie-list-table">
                    <tr class="categorie-list-table-header">

                        <td>Name</td>
                        <td>Slug</td>
                        <td>Option</td>
                    </tr>
                    @foreach ($categories as $categorys)
                        <tr>


                            <td>{{ $categorys->name }}</td>
                            <td>{{ $categorys->slug }}</td>
                            <td>
                                <a href="{{ url('/admin/categories/edit/' . $categorys->category_id) }}"
                                    class="btn btn-primary btn-sm">Edit</a>
                                <form action="{{ url('/admin/categories/delete/' . $categorys->category_id) }}"
                                    method="POST" style="display:inline;" onsubmit="return confirmDelete();">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                </form>

                            </td>
                        </tr>
                    @endforeach
                </table>
            @endif


            @if ($brands->isnotEmpty())
                <table class="brand-list-table">
                    <h2>Brands</h2>
                    <tr class="brand-list-table-header">
                        <td>Name</td>
                        <td>Description</td>
                        <td>Option</td>
                    </tr>
                    @foreach ($brands as $branditem)
                        <tr>

                            <td>{{ $branditem->name }}</td>
                            <td>{{ $branditem->description }}</td>
                            <td>
                                <a href="{{ url('/admin/brand/edit/' . $branditem->brand_id) }}"
                                    class="btn btn-primary btn-sm">Edit</a>
                                <form action="{{ url('/admin/brand/delete/' . $branditem->brand_id) }}" method="POST"
                                    style="display:inline;" onsubmit="return confirmDelete();">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                </form>

                            </td>
                        </tr>
                    @endforeach
                </table>
            @endif


            @if ($subcategories->isnotEmpty())
                    <h2>Subcategori</h2>
                    <table class="subcategorie-list-table">
                        <tr class="subcategorie-list-table-header">
                            <td>Name</td>
                            <td>Category</td>
                            <td>Option</td>
                        </tr>
                        @foreach ($subcategories as $subcategory)
                            <tr>
                                <td>{{ $subcategory->name }}</td>

                                <td>
                                    @php
                                        $categoryName = DB::table('categories')
                                            ->where('category_id', $subcategory->category_id)
                                            ->value('name');
                                    @endphp
                                    {{ $categoryName ?? 'No Category' }}
                                </td>

                                <td>
                                    <a href="{{ url('/admin/subcategories/edit/' . $subcategory->subcategory_id) }}"
                                        class="btn btn-primary btn-sm">Edit</a>
                                    <form action="{{ url('/admin/subcategories/delete/' . $subcategory->subcategory_id) }}"
                                        method="POST" style="display:inline;" onsubmit="return confirmDelete();">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </table>
            @endif



            @if ($orders->isNotEmpty())
                <h2>Orders</h2>
                @foreach ($orders as $order)
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="mb-0">Order ID: #{{ $order->order_id }}</h5>
                        </div>
                        <div class="card-body">
                            <div class="order-details mb-3">
                                <p class="mb-1 "><strong>Name:</strong> {{ $order->user->name }}</p>
                                <p class="mb-1"><strong>Phone:</strong> {{ $order->user->phone }}</p>
                                <p class="mb-1"><strong>Address:</strong>{{ $order->user->address }}</p>
                                <p class="mb-1"><strong>Status:</strong> <span
                                        class="status-{{ $order->status }}">{{ $order->status }}</span></p>
                                <p class="mb-1"><strong>Total Price:</strong> ${{ $order->total_price }}</p>
                                <p class="mb-1"><strong>Shipping Address:</strong> {{ $order->shipping_address }}</p>
                                <p class="mb-1"><strong>Order Code:</strong> #{{ $order->order_code }}</p>
                            </div>

                            <div class="order-items row">
                                @foreach ($order->orderItems as $item)
                                    <div class="d-flex align-items-center mb-3 col-4">
                                        <div class="me-3">
                                            <img src="{{ url($item->product->avatar_product) }}"
                                                alt="{{ $item->product->name }}" class="img-fluid"
                                                style="max-width: 100px; height: auto;">
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="mb-1">{{ $item->product->name }}</h6>
                                            <p class="mb-1"><strong>Price:</strong> ${{ $item->price }}</p>
                                            <p class="mb-1"><strong>Quantity:</strong> {{ $item->quantity }}</p>
                                        </div>
                                    </div>
                                @endforeach
                            </div>

                            <form action="{{ route('order.updateStatus', $order->order_id) }}" method="POST">
                                @csrf
                                @method('PUT')
                                <div class="mb-3">
                                    <label for="status" class="form-label"><strong>Update Status:</strong></label>
                                    <select name="status" id="status" class="form-select">
                                        <option value="pending" {{ $order->status === 'pending' ? 'selected' : '' }}>
                                            Pending</option>
                                        <option value="processing" {{ $order->status === 'processing' ? 'selected' : '' }}>
                                            Processing</option>
                                        <option value="completed" {{ $order->status === 'completed' ? 'selected' : '' }}>
                                            Completed</option>
                                        <option value="cancelled" {{ $order->status === 'cancelled' ? 'selected' : '' }}>
                                            Cancelled</option>
                                    </select>
                                </div>
                                <button type="submit" class="btn btn-primary">Update Status</button>
                            </form>
                        </div>
                    </div>
                @endforeach
            @endif
        @endif
    </div>
@endsection
