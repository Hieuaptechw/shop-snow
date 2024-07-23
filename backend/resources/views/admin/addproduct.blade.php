@extends('admin.app');
@section('content')
    <div class="add-product row">
        <div class="col-md-8 ">
            <div class="product-information row">
                <h4>Product information</h4>
                <div class="col-md-12 mb-3">
                    <label for="product-name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="product-name" placeholder="Product title" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="product-name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="product-name" placeholder="Product title" required>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="product-name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="product-name" placeholder="Product title" required>
                </div>
                <div class=" col-md-12 mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description (Optional)</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                  </div>
            </div>
            <div class="product-img row">
                <div class=" col-md-12 mb-3">
                    <h4>Product image</h4>
                    <label for="exampleFormControlTextarea1" class="form-label">Description (Optional)</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                  </div>
            </div>
        </div>
        <div class=" col-md-4">
            <div class="product-price">
                <h4>Product price</h4>
                <label for="product-name" class="form-label">Name</label>
                <input type="text" class="form-control" id="product-name" placeholder="Product title" required>
                <label for="product-name" class="form-label">Name</label>
                <input type="text" class="form-control" id="product-name" placeholder="Product title" required>
            </div>
            <div class="product-organize">
                <h4>Organize</h4>
                <label for="validationCustom04" class="form-label">Brand</label>
                <select class="form-select" id="validationCustom04" required>
                  <option selected disabled value="">Choose...</option>
                  <option>...</option>
                </select>
                <label for="validationCustom04" class="form-label">Categori</label>
                <select class="form-select" id="validationCustom04" required>
                    <option selected disabled value="">Choose...</option>
                    <option>...</option>
                  </select>
                <label for="product-name" class="form-label">Name</label>
                <input type="text" class="form-control" id="product-name" placeholder="Product title" required>
            </div>
            <div class="product-variant">
                <h4>Variants</h4>
                <label for="product-name" class="form-label">Name</label>
                <input type="text" class="form-control" id="product-name" placeholder="Product title" required>
                <label for="product-name" class="form-label">Name</label>
                <input type="text" class="form-control" id="product-name" placeholder="Product title" required>
            </div>
            
          

        </div>

    </div>
@endsection
