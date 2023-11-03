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
        Schema::create('contest_submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contest_participant_id')->constrained();
            $table->foreignId('contest_problem_id')->constrained();
            $table->foreignId('language_id')->constrained();
            $table->string('status');
            $table->integer('time');
            $table->integer('memory');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contest_submissions');
    }
};
