<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TestCase extends Model
{
    use HasFactory;
    public function problem(): belongsTo
    {
        return $this->belongsTo(Problem::class);
    }
}
