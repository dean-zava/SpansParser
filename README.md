# Span Viewer

## Running The Client & Server
To download dependecies, run from the repository root directory:
```sh
npm i
```

Running the server:
```sh
node server.js
```

Running the client:
```sh
npm start
```

## Usage
The query should be a conjuction of one or more clauses. Each clause will contain a field, an operand, and a value to filter by. fields can be either internal tag keys, or span attributes (e.g. duration, timestamp etc.). Supported opernads are: "=", "<" or ">".
Example queries:
```sh
resource.type=http && duration > 60001498 && span.kind=server
```
```sh
peer.port=41148
```
To get the result press the send button.

## Implementation Notes & Possible Improvments
* Perhaps creating an easier UI that includes options that are more inforamtive and user friendly. 
  * Such UI may enable us the option to ask the user whether the following field is a tag key, and therefor potentially improve efficiency by sparing the span attribute check.
* Support filtering with logs.
* I am generally prefering Python over Node.js, It's just the I am not familar with Django yet, while I have some familiarity with Express.
