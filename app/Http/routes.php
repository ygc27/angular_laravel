<?php

Route::get('/', function () {
    return view('layout');
});

Route::get('listarUsers',['uses'=>'UsersController@index']);
Route::put('user/atualizar/{id}',['uses'=>'UsersController@update']);
Route::delete('user/delete/{id}',['uses' => 'UsersController@destroy']);
Route::post('user/cadastrar',['uses' => 'UsersController@store']);