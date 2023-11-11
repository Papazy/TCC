<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContestParticipant extends Model
{
    use HasFactory;

    public function contest(){
        return $this->belongsTo(ContestParticipant::class);
    }
    public function submissions()
    {
        return $this->hasMany(Submission::class);
    }
}
