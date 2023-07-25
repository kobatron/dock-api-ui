# Submission by Tarek Adam
- custom composer/vendor package for ByThePixel
- sockets without 3rd party service
- persistant client side storage accross page loads.
- http://openweathermap.org api (see email for .env api key)

# Package Build
- https://github.com/kobatron/bythepixel-composer-package
- code appears in vendor/bythepixel

# REPO
0. `git clone https://github.com/kobatron/dock-api-ui.git tarek-adam-challenge`

# Steps: api & docker
These instructions use both your base machine as well as docker instances.
1. go to `cd tarek-adam-challenge/api`
2. add the dot-env.txt from email into tarek-adam-challenge/api/.env (rename file to .env)
4. bring up docker from tarek-adam-challenge/api dir `docker-compose up --build -d`
5. ssh into a laravel node `docker exec -it fullstack-challenge-laravel-worker-1 bash`
6. from docker command line `composer install`
7. take a look at /var/www/htmlvendor/by-the-pixel !!!
8. `php artisan migrate`
9. `php artisan db:seed`

# Steps: frontend
These instractions are on your base machine.
1. go to `cd tarek-adam-challenge/frontend`
2. run `npm install`
3. run 'npm run dev'
4. open http://localhost:5173/
5. Open the browser dev console to observe socket activity.

# Notes on .env
- more redis
- database job que
- no need for test db (db transactions instead)
- weather api key

# Notes on docker
- socket server
- job que worker
- web server should be changed to supervised service but I didn't mess with that config.

# Fullstack Challenge

## Instructions
Using Laravel and VueJS, create an application which shows the weather for a set of users.
- Clone this repository (not fork). 
- Once completed, send a link of the clone repository to interviewer and let them know how long the exercise took. 
- Update the frontend landing page to show a list of users and their current weather.
- Clicking a user opens a modal or screen which shows that users detailed weather report.
- Weather update should be no older than 1 hour.
- Internal API request(s) to retrieve weather data should take no longer than 500ms. Consider that external APIs could and will take longer than this from time to time and should be accounted for. 
- We are looking for attention to detail!
- Instructions are purposely left somewhat open-ended to allow the developer to make some of their own decisions on implementation and design. 
- This is not a designer test so the frontend does not have to look "good", but of course bonus points if you can make it look appealing. 

## Things to consider:
- Chose your own weather api such as https://openweathermap.org/api or https://www.weather.gov/documentation/services-web-api.
- Testability.
- Best practices.
- Design patterns.
- Availability of external APIs is not guaranteed and should not cause page to crash.
- Twenty randomized users are added via the seeder process, each having their own unique location (longitude and latitude).
- Redis is available (Docker service) if you wish to use it.
- Queues, workers, websockets could be useful.
- Feel free to use a frontend UI library such as PrimeVue, Vuetify, Bootstrap, Tailwind, etc. 
- Anything else you want to do to show off your coding chops!

## To run the local dev environment:

### API
- Navigate to `/api` folder
- Ensure version docker installed is active on host
- Copy .env.example: `cp .env.example .env`
- Start docker containers `docker compose up` (add `-d` to run detached)
- Connect to container to run commands: `docker exec -it fullstack-challenge-app-1 bash`
  - Make sure you are in the `/var/www/html` path
  - Install php dependencies: `composer install`
  - Setup app key: `php artisan key:generate`
  - Migrate database: `php artisan migrate` 
  - Seed database: `php artisan db:seed`
  - Run tests: `php artisan test`
- Visit api: `http://localhost`

### Frontend
- Navigate to `/frontend` folder
- Ensure nodejs v18 is active on host
- Install javascript dependencies: `npm install`
- Run frontend: `npm run dev`
- Visit frontend: `http://localhost:5173`
