# Rails Website Template

A template for creating rails websites that includes the following:

* User System (Devise)
* Twitter Bootstrap + Flatstrap + Font Awesome
* Basic Blog
* Admin Panel
* SummerNote editor
* Image upload/File System
* Translation (pt-BR, EN)
* Contact System
- Maintaince Mode
* Email System (PaperClip + Mandrill)

## Installation

1. Clone the project: ```https://github.com/jamesperet/rails_website_template.git```
2. Create *postgres* databases for **development** and **test** enviorments.
3. Configure the databases in ```config/database.yml```
4. Run  ```rake db:migrate```
5. Run  ```rake bootstrap:all```
6. Start the server: ```rails server -p 3000```
7. Login as ```admin@website.com``` with the password ```12345678```

## Heroku Deploy

1. Create a new heroku app: ```heroku create new-app-name```
2. Run ```figaro heroku:set -e production``` to set enviorment variables on heroku
3. Run ```heroku addons:add heroku-postgresql``` to create and configure a *postgres* database in heroku server
4. Run ```git push heroku master``` to deploy the repo

## Todo's

* Log
* Tests
* Background processing (redis)
* Search System
* Wiki/Codex
* Portfolio
* Store
* Inventory
* Module Controller
* geo location/maps
* Help
* new admin email 
* Invite user/admin
* admin panel tour
* rewrite readme file
* Install instructions
* Heroku Deploy button

## Example Websites

- [Velvet Design](http://www.velvetdesign.com.br) (Under Development)
- [jamesperet.com v2](http://jamesperet.com) (Under Development)
- [GoldTone](http://goldtone.com) (Under Development)
- [benjaminperet](http://benjaminperet.com) (Under Development)
- [High Effects](http://higheffects.com.br) (Under Development)


