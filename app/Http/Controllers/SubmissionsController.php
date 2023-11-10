<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


use Illuminate\Http\Request;

class SubmissionsController extends Controller
{
    public function submissions(){
        return Inertia::render('Submissions/Submissions');
    }

    public function mySubmissions(){
        return Inertia::render('Submissions/MySubmissions');
    }
}
