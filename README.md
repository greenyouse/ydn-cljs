# ydn-cljs

The YDN-DB library packaged in a JAR for ClojureScript. This comes with
IndexedDB, WebSQL, WebStorage and UserData (for IE6). All of the
features are enabled too  (Core, CRUD, Cursor, Encryption, Events,
Full-text-search, Query, SQL, and Synchronization).  

See the YDN-DB [homepage](http://dev.yathit.com/) for more information.

## Installation

Add this dependency to your project.clj:
```clj
[com.greenyouse/ydn-cljs "1.1.2-alpha"]
```

and this to your library:

```clj
(ns application.core
  (:require ydn.db))
 ```

## Contribute

I'm having some trouble getting the Google Closure version of YDN-DB to
work correctly. If you're interested in helping me out, check the
`gclosure` branch. This version includes all the features (Core, CRUD,
Cursor, Encryption, Events, Full-text-search, Query, SQL, and
Synchronization).

Thanks!
