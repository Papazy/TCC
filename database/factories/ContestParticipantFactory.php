<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ContestParticipant;
use App\Models\User;
use App\Models\Contest;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContestParticipant>
 */
class ContestParticipantFactory extends Factory
{
    protected $model = ContestParticipant::class;
    
    public function definition(): array
    {
        // Mengambil semua ID contest yang sudah ada dalam basis data
        $contestIds = Contest::pluck('id')->toArray();
        // Mengambil semua ID user yang sudah ada dalam basis data
        $userIds = User::pluck('id')->toArray();

        return [
            'user_id' => $this->faker->randomElement($userIds),
            'contest_id' => $this->faker->randomElement($contestIds),
            'score' => $this->faker->numberBetween(0, 100),
            // ...
        ];
    }
}
