# ydn-cljs

The YDN-DB library packaged in a JAR for ClojureScript. This comes with
IndexedDB, WebSQL, WebStorage, and UserData (for IE6) enabled. All of
the features are enabled too (Core, CRUD, Cursor, Encryption, Events,
Full-text-search, Query, SQL, and Synchronization). 

See the YDN-DB [homepage](http://dev.yathit.com/) for more information.

## Installation

Add this dependency to your project.clj:
```clj
[com.greenyouse/ydn-cljs "1.1.2"]
```

and this to your library:

```clj
(ns application.core
  (:require ydn.db))
 ```
