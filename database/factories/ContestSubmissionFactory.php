<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ContestSubmission;
use App\Models\ContestParticipant;
use App\Models\ContestProblem;
use App\Models\Language;

class ContestSubmissionFactory extends Factory
{
    protected $model = ContestSubmission::class;

    public function definition()
    {
        $contestParticipantIds = ContestParticipant::pluck('id')->toArray();
        $contestProblemIds = ContestProblem::pluck('id')->toArray();
        $languageIds = Language::pluck('id')->toArray();

        return [
            'contest_participant_id' => $this->faker->randomElement($contestParticipantIds),
            'contest_problem_id' => $this->faker->randomElement($contestProblemIds),
            'language_id' => $this->faker->randomElement($languageIds),
            'status' => $this->faker->randomElement(['Accepted', 'Wrong Answer', 'Runtime Error']),
            'time' => $this->faker->numberBetween(1, 1000),
            'memory' => $this->faker->numberBetween(1, 1000),
            // ...
        ];
    }
}