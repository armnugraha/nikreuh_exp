# Nikreuh-nodejs

Nikreuh Backend with NodeJS + ExpressJS + Sequelize

first run
1. clone
2. npm i
3. sequelize
4. npm run start
5. sequelize db:migrate
6. sequelize db:seed:all

Merge From BtBckt
sequelize db:migrate:undo:all
sequelize db:seed:undo:all

Install Bcrypt
npm install bcrypt --save

make model + migration
https://medium.com/@arisupriatna/belajar-sequelize-0-e7dca1f16cde

sequelize model:generate --name roles --attributes name:string
sequelize seed:generate --name mount-seeder
sequelize seed:generate --name mount-file-seeder
sequelize seed:generate --name mount-review-seeder
sequelize seed:generate --name mount-review-file-seeder

sequelize db:seed --seed 20200329020737-mount-seeder

sequelize model:generate --name mounts --attributes user_id:integer,name:string,address:string,altitude:integer,rank:integer,thumb:text,type:string,desc:string,price:integer,start_time:date,end_time:date,full_time:boolean,start_date:date,end_date:date,status_open:boolean,center_coordinate:string

sequelize model:generate --name mount_files --attributes mount_id:integer,file:text

sequelize model:generate --name mount_reviews --attributes mount_id:integer,user_id:integer,rate:float,desc:string

sequelize model:generate --name mount_review_files --attributes mount_id:integer,file:text

sequelize model:generate --name outdoor_gears --attributes mount_id:integer,name:string

sequelize model:generate --name mount_announcements --attributes mount_id:integer,title:string,note:string,start_date:date,end_date:date,file:text

## Tutorial Sequelize Crud
https://medium.com/skyshidigital/membuat-restful-api-menggunakan-express-dan-sequelize-ef0e10da36ff
https://blog.soshace.com/create-simple-pos-with-react-node-and-mongodb-4-optimize-app-and-setup-deployment-workflow/?fbclid=IwAR3orw-eQ8supSE-DEUp5RrX4CBpofKJyCeSdCeDkzxAf8SMGVCkxVq9SBY

## Problem
connection reset by cors
https://jonathanmh.com/how-to-enable-cors-in-express-js-node-js/
https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue

## Tutorial
https://itnext.io/building-restful-api-with-node-js-express-js-and-postgresql-the-right-way-b2e718ad1c66
https://www.sitepoint.com/build-simple-beginner-app-node-bootstrap-mongodb/?fbclid=IwAR0LYMY5EBLRvBL8L7RoWkmliaRT_3Ju3do3DJh-wCgr7Evf5QY1chM1Ayo
https://itnext.io/back-end-pagination-with-nodejs-expressjs-mongodb-mongoose-ejs-3566994356e0
https://dev.to/raymag/build-a-quiz-rest-api-with-nodejs-2p64?fbclid=IwAR0UgB6PpdLJLXO54y0YJGK4nqg4qT0mojia5tnfyIyb8_sMKyrWPJ30xps
https://github.com/hariom282538/NodeJS-CRUD
https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
https://github.com/the-benchmarker/web-frameworks/blob/master/README.md?fbclid=IwAR37L2uve1AitvwVezICC-eNCR8eF1pk8Pjn_KSwd3BRm7nqQkdNQ29Cmi8

## TUTORIAL V2
Install package sequelize global
Sequelize
https://sequelize.readthedocs.io/en/latest/docs/getting-started/

Basic Query Sequelize
https://sequelize.org/master/manual/querying.html#where
https://sequelize.org/master/manual/model-querying-basics.html
http://zetcode.com/javascript/sequelize/