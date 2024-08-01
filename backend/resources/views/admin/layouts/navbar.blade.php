<div class="row navbar">
  <div class="col-8">
  <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Admin</a></li>
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
        </ol>
    </nav>
  </div>
  <div class="col-4">
    <div class="header-content">
      <form class="form-inline my-2 my-lg-0 d-flex">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        <a href=""  onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="bi bi-box-arrow-right"></i>LogOut</a>
      </form>
    </div>
  </div>
</div>
<form id="logout-form" action="{{ url('/admin/logout') }}" method="POST" style="display: none;">
  @csrf
</form>