<?php

namespace Database\Factories;

use App\Models\Problem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TestCase>
 */
class TestCaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $problemIds = Problem::pluck('id')->toArray();
        
        return [
            'problem_id' => $this->faker->randomElement($problemIds),
            'input' => '1 2 3 9 5',
            'output' => '30',
        ];
    }
}
