JavaScript Databinding
=====================

Description
-------------

This is a sample application that shows the usage of angular as databinding layer.


UI
---------
The ui only contains a controller javascript, that connects the model with the view.

- index1.html / controller1.js: Implements the validation all alone.
- index2.html / controller1.js: Implements the validation using the angular tags.

Backend
-----------
The backend is a simple servlet that stores data in memory.

- A POST to `/js-tdd/rest/customer/*` will create a new customer, assign an id and return the new customer
- A GET to `/js-tdd/rest/customer/<id>` will load the customer with the given id

Project-Setup
-----------
This is a default maven WAR project. The jetty is configured so that id does an overlay between the
directories `src/main/webapp` and `src/test/webapp`.


Unit-Tests are included in the `test` phase,
end2end tests are included in the `integration-test` phase.

The js-test-driver server can be started via the jstd-server.sh command.

The unit tests resp. end2end tests can be run via the jstd-unit.sh resp jstd-end2end.sh commands.

The tests may also be run in the jasmine html runner via the url `http://localhost:8080/js-tdd/SpecRunner.html`


