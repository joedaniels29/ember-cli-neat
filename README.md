# ember-cli-neat


###WORK IN PROGRESS. DO NOT USE YET.


Include bourbon's neat in an ember-cli app.

When the addon is installed, it will add neat 1.7.1 as
a bower dependency. (The newer bourbon 4.0.x is not compatible with node-sass at the time of
this writing).

## Dependencies

Your project should already be set up to handle sass/scss builds. If you're not, do so by running:

    npm install broccoli-sass --save-dev

## Usage

In your ember-cli (>= 0.1.1) project, run:

    npm install ember-cli-neat --save-dev
    ember g ember-cli-neat

The generator will create an `app.scss` with the sole contents being:

      @import "neat";

If you already have content in your `app.scss`, you can just choose "n" and add that
line to the top of `app.scss` yourself.

## Developing this Addon

* `ember server`
* Visit the dummy app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
