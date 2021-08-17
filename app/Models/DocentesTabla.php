<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DocentesTabla extends Model
{
    use HasFactory;
    protected $fillable = ['unidad','sub_unidad','categoria','horas','plaza','motivo',
                            'puesto'];
}
