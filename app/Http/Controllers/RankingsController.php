<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


use Illuminate\Http\Request;

class RankingsController extends Controller
{
    public function rankings(){
        return Inertia::render('Rankings/Rankings');
    }
}
