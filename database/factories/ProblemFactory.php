<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Problem;
use App\Models\Admin;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Problem>
 */
class ProblemFactory extends Factory
{
    protected $model = Problem::class;

    public function definition(): array
    {
        
        $adminIds = Admin::pluck('id')->toArray();
        $categoryIds = Category::pluck('id')->toArray();
        
        return [
            'admin_id' => $this->faker->randomElement($adminIds),
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
