<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContestSubmission extends Model
{
    use HasFactory;

    public function problem()
    {
        return $this->belongsTo(ContestProblem::class);
    }
    public function participant()
    {
        return $this->belongsTo(ContestParticipant::class);
    }
}
