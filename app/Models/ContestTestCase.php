<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContestTestCase extends Model
{
    use HasFactory;

    public function problem(): belongsTo
    {
        return $this->belongsTo(ContestProblem::class);
    }
}
