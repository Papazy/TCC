<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ContestNotification;
use App\Models\Contest;

class ContestNotificationFactory extends Factory
{
    protected $model = ContestNotification::class;

    public function definition()
    {
        $contestIds = Contest::pluck('id')->toArray();

        return [
            'contest_id' => $this->faker->randomElement($contestIds),
            'message' => $this->faker->paragraph,
            // ...
        ];
    }
}