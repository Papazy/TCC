<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ContestProblem;
use App\Models\Contest;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ContestProblem>
 */
class ContestProblemFactory extends Factory
{
    protected $model = ContestProblem::class;
    
    public function definition()
    {
        $contestIds = Contest::pluck('id')->toArray();
        $categoryIds = Category::pluck('id')->toArray();

        return [
            'contest_id' => $this->faker->randomElement($contestIds),
            'category_id' => $this->faker->randomElement($categoryIds),
            'title' => $this->faker->sentence,
            'slug' => $this->faker->slug,
            'description' => $this->faker->paragraph,
            'point' => $this->faker->numberBetween(1, 100),
            'input_format' => $this->faker->text,
            'output_format' => $this->faker->text,
            'constraints' => $this->faker->text,
            'examples' => $this->faker->text,
            'difficulty' => $this->faker->randomElement(['easy', 'medium', 'hard']),
            'editorial' => $this->faker->paragraph,
            // ...
        ];
    }
}
