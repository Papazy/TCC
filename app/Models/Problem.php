<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
    use HasFactory;

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
        return $this->hasMany(Submission::class);
    }

    public function testcase(): HasMany
    {
        return $this->hasMany(TestCase::class);  
    }
}
