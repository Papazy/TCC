<?php

namespace Database\Seeders;

use App\Models\Problem;
use App\Models\TestCase;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProblemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Menggunakan ContestProblem::factory untuk membuat 10 masalah kontes
        Problem::factory(30)->create()->each(function ($problem) {
            // Menggunakan TestCase::factory untuk membuat 3 testcase untuk setiap masalah kontes
            TestCase::factory(3)->create([
                'problem_id' => $problem->id,
                'input' => '1 2 3 9 5',
                'output' => '30',
                // ...
            ]);
        });
    }
}
