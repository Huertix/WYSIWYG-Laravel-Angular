<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            array(
                array(
                    'name' => 'David',
                    'email' => 'me@raumbild.com',
                    'password' => bcrypt('123')
                ),
                array(
                    'name' => 'Mikel',
                    'email' => 'other@raumbild.com',
                    'password' => bcrypt('123')
                )
            )
        );
    }
}
