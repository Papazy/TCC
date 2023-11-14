<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Problem;
use App\Models\Language;
use App\Models\Submission;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Submission>
 */
class SubmissionFactory extends Factory
{
    protected $model = Submission::class;
    public function definition()
    {
        $userIds = User::pluck('id')->toArray();
        $problemIds = Problem::pluck('id')->toArray();
        $languageIds = Language::pluck('id')->toArray();

        return [
            'user_id' => $this->faker->randomElement($userIds),
            'problem_id' => $this->faker->randomElement($problemIds),
            'language_id' => $this->faker->randomElement($languageIds),
            'status' => $this->faker->randomElement(['Accepted', 'Wrong Answer', 'Runtime Error']),
            'time' => $this->faker->numberBetween(1, 1000),
            'memory' => $this->faker->numberBetween(1, 1000),
            'code' => $this->faker->paragraph,
            // ...
        ];
    }
}
