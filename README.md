### Cara menjalankan (Harap Baca!) : 
- Clone repo, ketik : 
```bash
git clone git@github.com:Papazy/TCC.git
```
- Setelah repo di clone, install composer dependencies. ketik : 
```bash
composer install
```
- kemudian install dependencies node.js dengan perintah :
```bash
npm install
```

- Buat file .env caranya : Salin file .env.example 
```bash
cp .env.example .env
```
Kemudian ubah nama filenya menjadi .env, Atur konfigurasi database, seperti nama database, username, password, dan host.
- Jalankan perintah 
```bash
php artisan storage:link
```
untuk symlink public dan storage
- Jalankan perintah 
```bash
php artisan key:generate
```
 untuk membuat APP_KEY baru
- Jika ingin melakukan migrate untuk membuat tabel-tabel pada database yang telah diatur pada file .env, jalankan 
```bash
php artisan migrate
```
- Jika ingin melalukan seed data untuk mengisi data dump ke dalam database jalankan 
```bash
php artisa db:seed
```
- Jalankan perintah 
```bash
php artisan serve
```
untuk menjalankan server lokal
- Jalankan perintah 
```bash
npm run dev
```
untuk menjalankan server node.js