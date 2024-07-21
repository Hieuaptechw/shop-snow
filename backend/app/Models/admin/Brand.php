<?php

namespace App\Models\admin;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
class Brand extends Model
{
    use HasFactory;
    protected $table = "brand";
    protected $fillable = ['name'];
    protected $primaryKey = 'brand_id';
    public function getlist()
    {
        $sql = "SELECT * FROM " . $this->table;
        $r = DB::select($sql);
        return $r;
    }

    public function insert($arrData)
    {
       DB::table("category")->insert($arrData);
    }
}
