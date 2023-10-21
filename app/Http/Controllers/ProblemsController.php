<?php

namespace App\Http\Controllers;

use App\Models\Problems;
use Illuminate\Http\Request;

class ProblemsController extends Controller
{
    public function show($id){
        $problem = Problems::with('contoh_case')->find($id);
        // $testcase = $problem->testcases;

        // dd($problem->contoh_case);
        
        return view('Soal', [
            'data' => $problem,
            // 'testcase' => $testcase,
        ]);
    }
}
