# be-comdev
langkah-langkah access file:
1. clone repo ini
2. setelah di clone, buka terminal di vscode
3. lalu lakukan perintah npm install
4. lalu atur configurasi untuk menghubugnkan kepada database dengan edit file config.json di config sesuaikan dengan settingan pg admin masing-masing
5. npx sequelize db:create (membuat database di terminal vs code jangan di buat di pg admin)

6. npx sequelize-cli model:generate --name Users --attributes name:string,username:string,email:string,password:string,position:string,picture:string,about:string,gooogleId:string,registeredVia:string,role_id:string

7. npx sequelize-cli model:generate --name Roles --attributes role_name:string

8. npx sequelize db:migrate

9. untuk run lakukan perintah : npm run dev