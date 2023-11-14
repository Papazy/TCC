<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Admin extends Model
{
    use HasFactory;
    
    /**
     * Get the user that owns the admin.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the contests of the admin.
     */
    public function contests(): HasMany
    {
        return $this->hasMany(Contest::class);
    }
    
    /**
     * Get the problems of the admin.
     */
    public function problems(): HasMany
    {
        return $this->hasMany(Problem::class);
    }
}
