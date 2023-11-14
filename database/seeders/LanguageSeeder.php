<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seeder untuk Language
        $languages = ['Java', 'C++', 'JavaScript', 'Python', 'Ruby', 'Go', 'Swift'];
        foreach ($languages as $language) {
            Language::create([
                'name' => $language,
                // tambahkan kolom lain jika diperlukan
            ]);
        }
    }
}
