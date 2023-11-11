<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContestProblem extends Model
{
    use HasFactory;
    /**
     * The categories that belong to the ContestProblem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    public function admin(): BelongsToMany
    {
        return $this->belongsToMany(Admin::class);
    }

    public function submission(): HasMany
    {
        return $this->hasMany(ContestSubmission::class);
    }

    public function testcase(): HasMany
    {
        return $this->hasMany(ContestTestCase::class);  
    }
}
