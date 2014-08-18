# ydn-cljs

YDN-DB library packaged in a JAR for ClojureScript. This comes with
IndexedDB, WebSQL, WebStorage, and UserData (for IE6) enabled.

See the YDN-DB [homepage](http://dev.yathit.com/) for more information.

## Usage

Add this dependency to your project.clj:
```clj
[com.ydn/db "1.0.3"]
```

If you're going to do advanced compilation, don't forget to use the externs file:
```clj
:externs ["db/externs/ydn-db.js"]
```
