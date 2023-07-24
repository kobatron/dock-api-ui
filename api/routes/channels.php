<?php

use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Route::match(['OPTIONS', 'POST'], '/broadcasting/noauth', [
    'as'   => 'boradcast.auth',
    'uses' => function($request = null){
        return response()->json([], 200);
    }
]);
