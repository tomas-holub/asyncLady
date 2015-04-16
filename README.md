asyncLady
=========

Simple async js loader - waits for one file and then loads the others in parallel

Usage:
```javascript
AsyncLady.waitFor('path/to/jquery').thenLoad([
    'path/to/jquery/based/code1', 
    'path/to/jquery/based/code2'
]);
```
