@extends('admin.app')

@section('content')
<div class="list-product">
    <h3>List Product</h3>
    <table class="product-list-table">
        <tr class="product-list-table-header">
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Image</td>
            <td>Quantity</td>
            <td>Option</td>
        </tr>
        @foreach ($productlist as $product)
        <tr>
            <td>{{ $product->product_id }}</td>
            <td>{{ $product->name }}</td>
            <td>${{ $product->price }}</td>
            <td><img src="#" alt="Product Image" style="width:70px;"></td>
            <td>15</td>
            <td>
                <button type="submit" class="btn btn-primary btn-sm">Edit</button>
                <button type="submit" class="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
        @endforeach
    </table>
</div>
@endsection
