<?php

namespace App\Models\auth;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
class User extends Authenticatable
{
    use HasFactory,Notifiable,HasApiTokens;
    protected $fillable = [
        'name',
        'email',
        'password',
        'address',  
        'phone'   

    ];
    protected $hidden = [
        'password',
        'role',
    ];
}
