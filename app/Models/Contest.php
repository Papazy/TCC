<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Contest extends Model
{
    use HasFactory;
    
    /**
     * Get the Admin that owns the contest.
     */
    public function admin(): BelongsTo
    {
        return $this->belongsTo(Admin::class);
    }
    
    /**
     * Get the contest_participants of the contest.
     */
    public function contest_participants(): HasMany
    {
        return $this->hasMany(ContestParticipant::class);
    }
}
