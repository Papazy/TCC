<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RankingsController;
use App\Http\Controllers\ProblemsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/user', [ProfileController::class, 'profile'])->name('profile');

Route::get('/ranking', [RankingsController::class, 'rankings'])->name('rankings');
// Home
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


// Problem
Route::get('/problems', function () {
    return Inertia::render('Problem');
})->name('problems');

// Problem Tab
    Route::get('/problems/{tag}', function ($tag) {
        $dataa = array(
            (object)[
            'title' => 'JavaScript Frameworks Comparison',
            'editorial' => true,
            'attempt' => false,
            'description' => 'Compare popular JavaScript frameworks for web development.',
            'tags' => ['javascript', 'web-development'],
            ],
            (object)[
            'title' => 'JavaScript2 Frameworks Comparison',
            'editorial' => true,
            'attempt' => false,
            'description' => 'Compare2 popular JavaScript frameworks for web development.',
            'tags' => ['javascript', 'web-development'],
        ]
    );

    if($tag == "new"){
        $dataa = array(
            (object)[
            'title' => 'JavaScript Frameworks Comparison',
            'editorial' => true,
            'attempt' => false,
            'description' => 'Compare popular JavaScript frameworks for web development.',
            'tags' => ['javascript', 'web-development'],
            ],
            (object)[
            'title' => 'JavaScript2 Frameworks Comparison',
            'editorial' => true,
            'attempt' => false,
            'description' => 'Compare2 popular JavaScript frameworks for web development.',
            'tags' => ['javascript', 'web-development'],
        ]
    );
    }else if($tag == "popular"){
        $dataa = array(
            (object)[
            'title' => 'JavaScript popular Frameworks Comparison',
            'editorial' => true,
            'attempt' => false,
            'description' => 'Compare puewapopular JavaScript frameworks for web development.',
            'tags' => ['javascript', 'web-development'],
            ],
            (object)[
            'title' => 'JavaScript2 popular Frameworks Comparison',
            'editorial' => true,
            'attempt' => false,
            'description' => 'Compare popular JavaScript frameworks for web development.',
            'tags' => ['javascript', 'web-development'],
        ]
    );
    }else{
        $dataa = array(
            (object)[
            'title' => 'JavaScript yang terkahidsa Frameworks Comparison',
            'editorial' => true,
            'attempt' => false,
            'description' => 'Compare popular JavaScript frameworks for web development.',
            'tags' => ['javascript', 'web-development'],
            ],
            (object)[
            'title' => 'JavaScript2 Fdsafdsaframeworks Comparison',
            'editorial' => true,
            'attempt' => false,
            'description' => 'Compare2 popular JavaScript frameworks for web development.',
            'tags' => ['javascript', 'web-development'],
        ]
    );
    }
       
        // dd(collect($dataa));
        return Inertia::render('Problem', [
            'problemCard' => $dataa
        ]);
    })->name('problem');

// Contest
Route::get('/contest', function () {
    return Inertia::render('Contest'); //ini nama halaman yang mau di render
})->name('contests');

Route::get('/contest/problem/detail', function () {
    return Inertia::render('Contest/ContestProblemDetail');
})->name('ContestProblemDetail');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/soal/{id}', [ProblemsController::class, 'show']);


require __DIR__.'/auth.php';
