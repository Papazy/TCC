<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Contest;
use App\Models\Admin;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contest>
 */
class ContestFactory extends Factory
{
    protected $model = Contest::class;
    
    public function definition(): array
    {
        // Mengambil semua ID admin yang sudah ada dalam basis data
        $adminIds = Admin::pluck('id')->toArray();

        return [
            'admin_id' => $this->faker->randomElement($adminIds),
            'title' => $this->faker->sentence,
            'slug' => $this->faker->slug,
            'description' => $this->faker->paragraph,
            'start_time' => $this->faker->dateTimeBetween('now', '+1 month'),
            'end_time' => $this->faker->dateTimeBetween('+2 months', '+3 months'),
            // ...
        ];
    }
}
