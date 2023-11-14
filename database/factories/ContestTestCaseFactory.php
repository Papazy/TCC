<?php

namespace Database\Factories;

use App\Models\ContestProblem;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TestCase>
 */
class ContestTestCaseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $contestProblemIds = ContestProblem::pluck('id')->toArray();
        
        return [
            'contest_problem_id' => $this->faker->randomElement($contestProblemIds),
            'input' => '1 2 3 9 5',
            'output' => '30',
        ];
    }
}
