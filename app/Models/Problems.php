<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Problems extends Model
{
    use HasFactory;

    public function testcases(){
        return $this->hasMany(Testcase::class, 'problem_id', 'id');
    }

    public function contoh_case(){
        return $this->hasMany(Contoh_case::class, 'problem_id', 'id');
    }
}
