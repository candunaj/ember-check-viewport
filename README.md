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

&lt;div {{check-viewport onEnterViewport=(action 'viewportEntered') onExitViewport=(action 'viewportExited') enabled=true}}&gt;
  ...content
&lt;/div&gt;

check-viewport mofifier will fire action onEnterViewport if at least part of element is in window. So it is not necessarily visible (because it can be hidden behind another element). But when onExitViewport fires then you can be sure it is not visible. So it can be used for performance purposes. 


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

* `git clone <repository-url>`
* `cd ember-check-viewport`
* `npm install`

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
