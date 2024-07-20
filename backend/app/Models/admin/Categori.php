<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Categori extends Model
{
    use HasFactory;
    protected $table = "category";
    public function getlist()
    {
        $sql = "SELECT * FROM " . $this->table;
        $r = DB::select($sql);
        return $r;
    }
}
