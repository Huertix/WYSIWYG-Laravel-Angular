<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{

    protected $fillable = array('name', 'comment', 'body', 'owner_id');

    protected $table = 'projects';

    public function user(){
        return $this->belongsTo('App\User');
    }
}
