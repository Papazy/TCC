<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contest_problems', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contest_id')->constrained();
            $table->foreignId('category_id')->constrained();
            $table->string('title');
            $table->text('description');
            $table->integer('point');
            $table->text('input_format');
            $table->text('output_format');
            $table->text('constraints');
            $table->text('examples');
            $table->text('difficulty');
            $table->text('editorial');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contest_problems');
    }
};
