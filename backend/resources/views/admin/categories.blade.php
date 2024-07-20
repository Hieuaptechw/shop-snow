@extends('admin.app')
@section('content')
<div class="categories">
    <div class="categorie-from">
        <div class="row">
            <H3>Add Categori</H3>
            <form action="">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">Categori:</label>
                </div>
            </form>
        </div>
    </div>
    <div class="categorie-list">
    <H3>List Categori</H3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Option</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>TV</td>
                    <td><a href="#">Delete</a>|<a href="#">Edit</a>
                </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Tu Lanh</td>
                    <td><a href="#">Delete</a>|<a href="#">Edit</a>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Dieu Hoa</td>
                    <td><a href="#">Delete</a>|<a href="#">Edit</a>
                </tr>
            </tbody>
        </table>
    </div>
</div>
@endsection