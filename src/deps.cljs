{:foreign-libs
 [{:file "ydn-cljs/dev/ydn-db.js"
   :provides ["ydn.db"]}]
 :externs ["ydn-cljs/externs/ydn-db.ext.js"]}

;; TODO: Use the google closure code from ydn-db to get
;; dead code elimination from the closure compiler. DB code
;; in other projects will need to be re-configured slightly
:;{:libs ["ydn-cljs/dev/ydn-db"]}
