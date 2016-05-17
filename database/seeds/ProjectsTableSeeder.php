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
        DB::table('projects')->insert(
            array(
                array(
                    'name' => 'Project 1',
                    'comment' => 'This is project 1',
                    'body' => '<p>This is the default project</p>',
                    'owner_id' => '1'
                ),
                array(
                    'name' => 'My Project',
                    'comment' => 'This is my project',
                    'body' => '<p>My project</p>',
                    'owner_id' => '1'
                ),
                array(
                    'name' => 'Other User',
                    'comment' => 'Project from other user',
                    'body' => '<p>My project, I am other user</p>',
                    'owner_id' => '2'
                )
            ));
    }
}