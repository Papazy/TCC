<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ContestProblem;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\ContestTestCase;

class ContestProblemSeeder extends Seeder
{
    public function run()
    {
        // Menggunakan ContestProblem::factory untuk membuat 10 masalah kontes
        ContestProblem::factory(10)->create()->each(function ($contestProblem) {
            // Menggunakan TestCase::factory untuk membuat 3 testcase untuk setiap masalah kontes
            ContestTestCase::factory(3)->create([
                'contest_problem_id' => $contestProblem->id,
                'input' => '1 2 3 9 5',
                'output' => '30',
                // ...
            ]);
        });
    }
}

