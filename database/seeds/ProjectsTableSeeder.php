<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->insert([
            'name' => 'Proyect 1',
            'body' => '<p>This is the default proyect</p>',
            'owner_id' => '1',
            'modified_at' => Carbon::now()
        ]);
    }
}
