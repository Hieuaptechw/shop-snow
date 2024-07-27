<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->morphs('tokenable'); // Tạo các cột tokenable_id và tokenable_type
            $table->string('name'); // Tên của token
            $table->string('token', 64)->unique(); // Token unique
            $table->text('abilities')->nullable(); // Khả năng của token
            $table->timestamp('last_used_at')->nullable(); // Thời điểm token được sử dụng lần cuối
            $table->timestamp('expires_at')->nullable(); // Thời điểm token hết hạn
            $table->timestamps(); // Các cột created_at và updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personal_access_tokens');
    }
};
