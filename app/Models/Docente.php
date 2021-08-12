<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Docente extends Model
{
    use HasFactory;
    protected $fillable = ['nombre','apePaterno','apeMaterno','rfc','curp','ingresoGob',
                            'ingresoSep','ingresoDgti','observaciones'];
    
}
