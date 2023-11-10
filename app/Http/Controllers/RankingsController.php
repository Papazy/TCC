<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


use Illuminate\Http\Request;

class RankingsController extends Controller
{
    public function rankings(){
        return Inertia::render('Ranking/Rankings');
    }

    public function scorers(){
        return Inertia::render('Ranking/Scorers');
    }
}
