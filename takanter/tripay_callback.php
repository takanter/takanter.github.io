<?php
// Ambil semua data (body JSON) dari Tripay
$payload = file_get_contents('php://input');

// Ambil semua Header (Penting! Untuk baca Tripay-Signature)
$headers = [];
foreach (getallheaders() as $name => $value) {
    $headers[] = "$name: $value";
}

// GANTI INI: URL Edge Function Supabase lu!
$supabase_url = 'https://dpleaehriokcyiztudbn.supabase.co/functions/v1/NAMA_FUNCTION_TRIPAY_LU';

// Kirim ulang (Forward) data persis seperti aslinya ke Supabase
$ch = curl_init($supabase_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// Kembalikan status dari Supabase ke Tripay
http_response_code($http_code);
echo $response;
?>
