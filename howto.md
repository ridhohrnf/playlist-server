cara install express dan agar bisa menggunakan import, bukan require lagi
1.cd folder-project
2.npm init -y

<!-- terdapat package.json untuk mendapatkan tau apa yang diinstal dari aplikasi yang kita buat.
ada dependencies express untuk memberitahu di project tersebut terdapat npm/package apa saja(Setting dari project kita) -->

3.npm install express 4. di bagian package.json tambahkan type:"module" di line paling bawah
5.npm install -D nodemon

<!-- nodemon untuk development bagus banget karena ada debugging mode, tapi saat perubahan di project, akan langsung di restart, tapi bagusnya untuk di development saja -->

<!-- akan terbuat node modules, jangan di up di github dakrena banyak bgt dan akan membebani -->

conversi file app-one dari node js ke express js

how to
npm install

<!-- akan terinstall berdasarkan package json karena node_modules tidak terinstall -->
