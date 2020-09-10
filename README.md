# q work sample

### Prerequisites
* PHP ^7.2.5

### Installation

* Clone the repository with `git clone git@github.com:oelek/q-work-sample.git`
* Change working dir `cd q-work-sample`
* Install dependencies `composer install`
* Copy .env.example with `composer run post-root-package-install`
* Generate key with `php artisan key:generate`
* Build frontend with `yarn install && yarn prod`
* Start server `php artisan serve`

#### Description
Finds the most recurring word in a text file and replaces it with foo{word}bar.

#### Routes
|Verb    |  URI                             | Description               |
|--------|----------------------------------|---------------------------|
| POST   |  /api/upload                     | Process text file         |

#### Files
* **Routes** `routes/api.php`
* **Controller** `app/Http/Controllers/UploadController.php`
* **Service** `app/services/ReplaceServiceText/ReplaceTextService.php`

