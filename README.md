ember-check-viewport
==============================================================================
Checking visibility of element 60FPS

Installation
------------------------------------------------------------------------------

```
ember install ember-check-viewport
```


Usage
------------------------------------------------------------------------------

<div {{check-viewport onEnterViewport=(action 'viewportEntered') onExitViewport=(action 'viewportExited') enabled=true}}>
  ...content
</div>

check-viewport mofifier will fire action onEnterViewport if at least part of element is in window. So it is not necessarily visible (because it can be hidden behind another element). But when onExitViewport fires then you can be sure it is not visible. So it can be used for performance purposes. 


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-check-viewport`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
