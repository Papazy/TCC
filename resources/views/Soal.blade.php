<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Soal</title>
</head>
<body>
    <h1>Menampilkan satu Soal</h1>

    {{-- {{ dd($data) }} --}}
    <div style="font-size: 1.5rem">
        <h2>{{ $data->title }}</h2>
        <h3>Deskripsi</h3>
        <p>{{ $data->deskripsi }}</p>
        <h3>format_input</h3>
        <p>{{ $data->format_input }}</p>
        <h3>format_output</h3>
        <p>{{ $data->format_output }}</p>
        <h3>batasan</h3>
        <ul>
            @foreach (explode("&",$data->batasan) as $text)
                <li>{{ $text }}</li>
            @endforeach
        </ul>
    </div>
    <h2>Testcase</h2>
    @foreach($data->contoh_case as $case ) 
        <h3>Contoh Masukan</h3>
        <p>{!! $case->input !!}</p>
        <h3>Contoh Keluaran</h3>
        <p>{!! $case->output !!}</p>
        <br>
    @endforeach 

</body>
</html>