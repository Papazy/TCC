<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contoh_case extends Model
{
    use HasFactory;

    public function problem(){
        return $this->belongsTo(Problems::class);
    }
    
}
