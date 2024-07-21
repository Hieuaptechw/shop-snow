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
            <h3>{{ isset($category) ? 'Edit Category' : 'Add Category' }}</h3>
            <form method="POST" action="{{ isset($category) ? url('/admin/categories/add/'. $category->category_id) : url('/admin/categories/update/.') }}">
                @csrf
                @if(isset($category))
                    @method('POST')
                @endif
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" name="name" id="floatingInput" placeholder="Category Name" value="{{ isset($category) ? $category->name : '' }}" required>
                    <label for="floatingInput">Category:</label>
                </div>
                <button type="submit" class="btn btn-primary">{{ isset($category) ? 'Update' : 'Add' }}</button>
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
                        <form action="{{ url('/admin/categories/delete/' . $category->category_id) }}" method="POST"
                            style="display:inline;"  onsubmit="return confirmDelete();">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                        </form>
                        <a href="{{  url('/admin/categories/edit/' . $category->category_id) }}" class="btn btn-primary btn-sm">Edit</a>
                    </td>
                </tr>
            @endforeach
        </table>

        <!-- Phân trang -->
        {{ $categories->links() }}
    </div>
</div>
<script>
    function confirmDelete() {
    return confirm('Bạn có chắc chắn muốn xoá ?');
}
</script>
@endsection