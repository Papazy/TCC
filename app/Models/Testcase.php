<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testcase extends Model
{
    use HasFactory;
    public function problems(){
        return $this->belongsTo(Problems::class, 'problem_id', 'id');
    }
}
