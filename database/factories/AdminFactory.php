<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Admin;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin>
 */
class AdminFactory extends Factory
{
    protected $model = Admin::class; 

    public function definition(): array
    {
        // Mengambil semua ID user yang sudah ada dalam basis data
        $userIds = User::pluck('id')->toArray();

        return [
            'user_id' => $this->faker->unique()->randomElement($userIds),
            'role' => $this->faker->randomElement(['aslab', 'super']),
            // ...
        ];
    }
}
