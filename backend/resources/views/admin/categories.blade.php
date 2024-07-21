@extends('admin.app')
@section('content')
<div class="categories">
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    @if (session('fail'))
        <div class="alert alert-fail">
            {{ session('fail') }}
        </div>
    @endif
    <div class="categorie-from">
        <div class="row">
            <H3>Add Categori</H3>
            <form method="POST" action="{{ url('/admin/categories/add') }}">
                @csrf
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="name" id="floatingInput" placeholder="Category Name"
                        Required>
                    <label for="floatingInput">Category:</label>
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>

        </div>
    </div>
    <div class="categorie-list">
        <h3>List Category</h3>
        <table class="categorie-list-table">
            <tr class="categorie-list-table-header">
                <td>ID</td>
                <td>Name</td>
                <td>Option</td>
            </tr>
            @foreach ($categories as $category)
                <tr>
                    <td>{{ $category->category_id }}</td>
                    <td>{{ $category->name }}</td>
                    <td>
                     <form action="" method="post">
                     <a href="delete/{{ $category->category_id }}">Delete</a> | <a
                            href="edit/{{ $category->category_id }}">Edit</a>
                     </form>
                    </td>
                </tr>
            @endforeach
        </table>

        <!-- Phân trang -->
        {{ $categories->links() }}
    </div>
</div>
@endsection