/**
* @fileoverview Externs for YDN-DB
*
* @externs
*/


/**
 * @type {Object}
 * @const
 */
var ydn = {};

/**
 * @type {Object}
 */
ydn.db = {};

/**
 * @define {string} version string.
 */
ydn.db.version;

/**
 * Create a suitable storage mechanism from indexdb, to websql to
 * localStorage.
 *
 * If database name and schema are provided, this will immediately initialize
 * the database and ready to use. However if any of these two are missing,
 * the database is not initialize until they are set by calling
 * {@link #setName} and {@link #setSchema}.
 * @see goog.db Google Closure Library DB module.
 * @param {string=} opt_dbname database name.
 * @param {(ydn.db.schema.Database|!DatabaseSchema)=} opt_schema database
 * schema
 * or its configuration in JSON format. If not provided, default empty schema
 * is used.
 * @param {!StorageOptions=} opt_options options.
 * @extends {ydn.db.sql.Storage}
 * @constructor *
 */
ydn.db.Storage = function(opt_dbname, opt_schema, opt_options) {};


/**
 * Delete database. This will attempt to delete in all mechanisms.
 * @param {string} db_name name of database.
 * @param {string=} opt_type delete only specific types.
 * @return {!ydn.db.Request}
 */
ydn.db.deleteDatabase = function(db_name, opt_type) {};


/**
 * Builds a new Key object of known id.
 *
 * @param {string|!ydn.db.Key.Json} store_or_json_or_value store name of key
 * object in JSON format.
 * @param {!IDBKey=} opt_id key id.
 * @param {ydn.db.Key=} opt_parent optional parent key.
 * @constructor
 */
ydn.db.Key = function(store_or_json_or_value, opt_id, opt_parent) {};


/**
 * @typedef {{
 *  store: string,
 *  id: (string|number),
 *  parent: (ydn.db.Key|undefined)
 * }}
 */
ydn.db.Key.Json;


/**
 * @return {!Object} key in JSON object.
 */
ydn.db.Key.prototype.toJSON = function() {};


/**
 * @override
 * @return {string} seperator string.
 */
ydn.db.Key.prototype.valueOf = function() {};


/**
 * @inheritDoc
 */
ydn.db.Key.prototype.toString = function() {};


/**
 *
 * @return {string} return store name.
 */
ydn.db.Key.prototype.getStoreName = function() {};


/**
 *
 * @return {!IDBKey} key id.
 */
ydn.db.Key.prototype.getId = function() {};


/**
 *
 * @return {string|number} normalized key.
 */
ydn.db.Key.prototype.getNormalizedId = function() {};


/**
 *
 * @return {ydn.db.Key} return parent key if it has.
 */
ydn.db.Key.prototype.getParent = function() {};


/**
 *
 * @param {*} key key to test.
 * @return {boolean} return true if given key is a valid key for IndexedDB.
 */
ydn.db.Key.isValidKey = function(key) {};


/**
 * Clone IDBKey.
 * @param {IDBKey} key given key.
 * @return {IDBKey} key to clone.
 */
ydn.db.Key.clone = function(key) {};


/**
 * @param {!Object} obj An object to get the value from.  Can be array-like.
 * @param {...(string|number|!Array.<number|string>)} var_args A number of
 *     keys (as strings, or nubmers, for array-like objects).  Can also be
 *     specified as a single array of keys.
 * @return {IDBKey|undefined} The resulting value.  If, at any point, the
 * value for a key is undefined, returns undefined.
 * @see goog.object.getValueByKeys
 */
ydn.db.utils.getValueByKeys = function(obj, var_args) {};


/**
 * Set object of given key path.
 * @param {Object} obj
 * @param {string} key_path doted key path.
 * @param {*} value value to set.
 */
ydn.db.utils.setValueByKeys = function(obj, key_path, value) {};

/**
 *
 * @param {*} key key to encode.
 * @return {string} encoded key as string.
 */
ydn.db.utils.encodeKey = function(key) {};


/**
 *
 * @param {string} encodedKey key to decoded.
 * @return {IDBKey} decoded key.
 */
ydn.db.utils.decodeKey = function(encodedKey) {};

/**
 *
 * @param {number} number
 * @return {Object} IEEE754 number.
 */
ydn.db.utils.ieee754 = function(number) {};

/**
 *
 * @return {number?}
 */
ydn.db.utils.HexStringReader.prototype.read = function() {};

/**
 *
 * @param $byte
 */
ydn.db.utils.HexStringWriter.prototype.write = function($byte) {};


/**
 *
 * @return {ydn.db.utils.HexStringWriter}
 */
ydn.db.utils.HexStringWriter.prototype.trim = function() {};


/**
 * @return {string}
 */
ydn.db.utils.HexStringWriter.prototype.toString = function() {};


/**
 *
 * @param {*} first
 * @param {*} second
 * @return {number} returns 1 if the first key is
 * greater than the second, -1 if the first is less than the second, and 0 if
 * the first is equal to the second.
 */
ydn.db.utils.cmp = function (first, second) {};

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.ConstraintError = function(opt_msg) {};

/**
 *
 * @type {string}
 */
ydn.db.ConstraintError.prototype.name;

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.InvalidKeyException = function(opt_msg) {};

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.VersionError = function(opt_msg) {};


/**
 * @type {string} name of error.
 */
ydn.db.VersionError.prototype.name;

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.InternalError = function(opt_msg) {};

/**
 * @type {string} name of error.
 */
ydn.db.InternalError.prototype.name;

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.ScopeError = function(opt_msg) {};

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.InvalidStateError = function(opt_msg) {};

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.InvalidAccessError = function(opt_msg) {};

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.NotFoundError = function(opt_msg) {};

/**
* @type {string} name of error.
*/
ydn.db.NotFoundError.prototype.name;

/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
ydn.db.DataCloneError = function(opt_msg) {};

/**
 *
 * @param {SQLError} e original error.
 * @param {*=} opt_msg optional message.
 * @constructor
 * @extends {Error}
 */
ydn.db.SQLError = function(e, opt_msg) {};

/**
 *
 * @param {Error} e original message.
 * @param {*=} opt_msg optional message.
 * @constructor
 * @extends {Error}
 */
ydn.db.SecurityError = function(e, opt_msg) {};

/**
 *
 * @param {*=} opt_msg optional message.
 * @constructor
 * @extends {Error}
 */
ydn.db.SqlParseError = function(opt_msg) {};

/**
 *
 * @param {*=} opt_msg optional message.
 * @constructor
 * @extends {Error}
 */
ydn.db.TimeoutError = function(opt_msg) {};

/**
 * @param {*} result request result.
 * @param {*=} opt_msg optional message.
 * @constructor
 * @extends {Error}
 */
ydn.db.TxError = function(result, opt_msg) {};

/**
 * @type {*}
 */
ydn.db.TxError.prototype.result;


/**
 * @return {*} request result.
 */
ydn.db.TxError.prototype.getResult = function() {};

/**
 *
 * @param {*} result request result.
 * @param {*=} opt_msg optional message.
 * @constructor
 * @extends {ydn.db.TxError}
 */
ydn.db.TxAbortedError = function(result, opt_msg) {};

/**
 * Event types.
 *
 * Note: these event type string are exported.
 * @enum {string}
 */
ydn.db.events.Types = {};

/**
 *
 * @param {ydn.db.events.Types} event_type event type.
 * @param {Object=} event_target target.
 * @extends {goog.events.Event}
 * @constructor
 * @struct
 * @suppress {checkStructDictInheritance} suppress closure-library code.
 */
ydn.db.events.Event = function(event_type, event_target) {};

/**
 * @type {string}
 */
ydn.db.events.Event.prototype.store_name;

/**
 *
 * @return {string} effected store name.
 */
ydn.db.events.Event.prototype.getStoreName = function() {};

/**
 *
 * @param {ydn.db.events.Types} event_type type.
 * @param {Object} event_target event target.
 * @param {number} version source.
 * @param {number} old_version old version.
 * @param {Object} old_schema old schema read from the database.
 * @extends {ydn.db.events.Event}
 * @constructor
 * @struct
 * @suppress {checkStructDictInheritance} suppress closure-library code.
 */
ydn.db.events.StorageEvent = function(event_type, event_target, version,
                                      old_version, old_schema) {};

/**
 * @final
 * @type {string}
 */
ydn.db.events.StorageEvent.prototype.name;

/**
 *
 * @type {number}
 */
ydn.db.events.StorageEvent.prototype.version;

/**
 *
 * @type {number}
 */
ydn.db.events.StorageEvent.prototype.oldVersion;

/**
 *
 * @type {Object}
 */
ydn.db.events.StorageEvent.prototype.old_schema_;

/**
 *
 * @return {number} return current version.
 */
ydn.db.events.StorageEvent.prototype.getVersion = function() {};

/**
 *
 * @return {number} return previous version.
 */
ydn.db.events.StorageEvent.prototype.getOldVersion = function() {};

/**
 * @return {Object} return schema read from the database.
 */
ydn.db.events.StorageEvent.prototype.getOldSchema = function() {};

/**
 * Storage error event.
 * @param {Object} event_target event target.
 * @param {Error} error error object in case of error.
 * @param {ydn.db.events.Types=} opt_type default to error.
 * @extends {ydn.db.events.Event}
 * @constructor
 * @struct
 */
ydn.db.events.StorageErrorEvent = function(event_target, error, opt_type) {};

/**
 * @return {string}
 */
ydn.db.events.StorageErrorEvent.prototype.toString = function() {};

/**
 * @type {string}
 */
ydn.db.events.StorageErrorEvent.prototype.name;

/**
 *
 * @type {Error}
 */
ydn.db.events.StorageErrorEvent.prototype.error;

/**
 * @return {Error} return error if connection was an error.
 */
ydn.db.events.StorageErrorEvent.prototype.getError = function() {};

/**
 * Storage terminal fail event.
 * @param {Object} event_target event target.
 * @param {Error} error error object in case of error.
 * @extends {ydn.db.events.StorageErrorEvent}
 * @constructor
 * @struct
 */
ydn.db.events.StorageFailEvent = function(event_target, error) {};

/**
 * @final
 * @type {string}
 */
ydn.db.events.StorageFailEvent.prototype.name;

/**
 *
 * @param {ydn.db.events.Types} event_type  type.
 * @param {Object} event_target target.
 * @param {string} store_name source.
 * @param {*} key source.
 * @param {*} value source.
 * @extends {ydn.db.events.Event}
 * @constructor
 * @struct
 */
ydn.db.events.RecordEvent = function(event_type, event_target, store_name, key,
                                     value) {};

/**
 * @final
 * @type {string}
 */
ydn.db.events.RecordEvent.prototype.name;

/**
 *
 * @type {*}
 */
ydn.db.events.RecordEvent.prototype.key;

/**
 *
 * @type {*}
 */
ydn.db.events.RecordEvent.prototype.value;

/**
 *
 * @return {*} key.
 */
ydn.db.events.RecordEvent.prototype.getKey = function() {};

/**
 *
 * @return {*} value.
 */
ydn.db.events.RecordEvent.prototype.getValue = function() {};

/**
 *
 * @param {ydn.db.events.Types} event_type  type.
 * @param {Object} event_target target.
 * @param {string} store_name source.
 * @param {Array} keys source.
 * @param {Array=} opt_values source.
 * @extends {ydn.db.events.Event}
 * @constructor
 * @struct
 */
ydn.db.events.StoreEvent = function(event_type, event_target, store_name, keys,
                                    opt_values) {};

/**
 * @final
 * @type {string}
 */
ydn.db.events.StoreEvent.prototype.name;

/**
 *
 * @type {Array}
 */
ydn.db.events.StoreEvent.prototype.keys;

/**
 *
 * @type {Array|undefined}
 */
ydn.db.events.StoreEvent.prototype.values;

/**
 *
 * @return {*} get list of keys.
 */
ydn.db.events.StoreEvent.prototype.getKeys = function() {};

/**
 *
 * @return {*} get list of values.
 */
ydn.db.events.StoreEvent.prototype.getValues = function() {};

/**
 * For those browser that not implemented IDBKeyRange.
 * @param {IDBKey|undefined} lower The value of the lower bound.
 * @param {IDBKey|undefined} upper  The value of the upper bound.
 * @param {boolean=} opt_lowerOpen  If true, the range excludes the lower bound
 * value.
 * @param {boolean=} opt_upperOpen If true, the range excludes the lower bound
 * value.
 * @constructor
 */
ydn.db.KeyRange = function(lower, upper, opt_lowerOpen, opt_upperOpen) {};

/**
 *
 * @type {IDBKey|undefined}
 */
ydn.db.KeyRange.prototype.lower;

/**
 *
 * @type {IDBKey|undefined}
 */
ydn.db.KeyRange.prototype.upper;

/**
 *
 * @type {boolean}
 */
ydn.db.KeyRange.prototype.lowerOpen;

/**
 *
 * @type {boolean}
 */
ydn.db.KeyRange.prototype.upperOpen;

/**
 * @override
 * @return {!Object} in JSON format.
 */
ydn.db.KeyRange.prototype.toJSON = function() {};

/**
 *
 * @return {IDBKeyRange}
 */
ydn.db.KeyRange.prototype.toIDBKeyRange = function() {};

/**
 * Robust efficient cloning.
 * @param {(ydn.db.KeyRange|ydn.db.IDBKeyRange)=} kr key range to be cloned.
 * @return {!ydn.db.KeyRange|undefined} cloned key range.
 */
ydn.db.KeyRange.clone = function(kr) {};

/**
 * Creates a new key range for a single value.
 *
 * @param {IDBKey} value The single value in the range.
 * @return {!ydn.db.KeyRange} The key range.
 * @expose
 */
ydn.db.KeyRange.only = function(value) {};

/**
 * Creates a key range with upper and lower bounds.
 *
 * @param {IDBKey|undefined} lower The value of the lower bound.
 * @param {IDBKey|undefined} upper The value of the upper bound.
 * @param {boolean=} opt_lowerOpen If true, the range excludes the lower bound
 *     value.
 * @param {boolean=} opt_upperOpen If true, the range excludes the upper bound
 *     value.
 * @return {!ydn.db.KeyRange} The key range.
 * @expose
 */
ydn.db.KeyRange.bound = function(lower, upper,
                                 opt_lowerOpen, opt_upperOpen) {};

/**
 * Creates a key range with a upper bound only, starts at the first record.
 *
 * @param {IDBKey} upper The value of the upper bound.
 * @param {boolean=} opt_upperOpen If true, the range excludes the upper bound
 *     value.
 * @return {!ydn.db.KeyRange} The key range.
 * @expose
 */
ydn.db.KeyRange.upperBound = function(upper, opt_upperOpen) {};

/**
 * Creates a key range with a lower bound only, finishes at the last record.
 *
 * @param {IDBKey} lower The value of the lower bound.
 * @param {boolean=} opt_lowerOpen If true, the range excludes the lower bound
 *     value.
 * @return {!ydn.db.KeyRange} The key range.
 * @expose
 */
ydn.db.KeyRange.lowerBound = function(lower, opt_lowerOpen) {};

/**
 * Helper method for creating useful KeyRange.
 * @param {IDBKey} value value.
 * @return {!ydn.db.KeyRange} The key range.
 */
ydn.db.KeyRange.starts = function(value) {};

/**
 *
 * @param {ydn.db.IDBKeyRange|ydn.db.KeyRange|KeyRangeJson} keyRange
 * IDBKeyRange.
 * @return {!Object} IDBKeyRange in JSON format.
 */
ydn.db.KeyRange.toJSON = function(keyRange) {};

/**
 * Read four primitive attributes from the input and return newly created
 * keyRange object.
 * @param {(KeyRangeJson|ydn.db.KeyRange|ydn.db.IDBKeyRange)=} key_range
 * keyRange.
 * @return {ydn.db.KeyRange} equivalent IDBKeyRange. Return null if input
 * is null or undefined.
 */
ydn.db.KeyRange.parseKeyRange = function(key_range) {};

/**
 * Read four primitive attributes from the input and return newly created
 * keyRange object.
 * @param {(KeyRangeJson|ydn.db.KeyRange|ydn.db.IDBKeyRange|Object)=} opt_key_range
 * keyRange.
 * @return {?IDBKeyRange} equivalent IDBKeyRange. Newly created IDBKeyRange.
 * null if input is null or undefined.
 */
ydn.db.KeyRange.parseIDBKeyRange = function(opt_key_range) {};

/**
 *
 * @param {Object|undefined} keyRange
 * @return {string} if not valid key range object, return a message reason.
 */
ydn.db.KeyRange.validate = function(keyRange) {};

/**
 * AND operation on key range
 * @param {!ydn.db.KeyRange} that
 * @return {!ydn.db.KeyRange} return a new key range of this and that key range.
 */
ydn.db.KeyRange.prototype.and = function(that) {};

/**
 * For debug display.
 * @param {ydn.db.KeyRange|IDBKeyRange|undefined} kr
 * @return {string} readable form.
 */
ydn.db.KeyRange.toString = function(kr) {};

/**
 *
 * @param {string} quoted_column_name quoted column name.
 * @param {ydn.db.schema.DataType|undefined} type column type.
 * @param {ydn.db.KeyRange|IDBKeyRange} key_range key range.
 * @param {!Array.<string>} wheres where clauses.
 * @param {!Array.<string>} params SQL params to output by appending.
 */
ydn.db.KeyRange.toSql = function(quoted_column_name, type,
                                 key_range, wheres, params) {};

/**
 *
 * @param {string} op where operator.
 * @param {IDBKey} value rvalue to compare.
 * @param {string=} opt_op2 second operator.
 * @param {IDBKey=} opt_value2 second rvalue to compare.
 * @return {!ydn.db.KeyRange}
 */
ydn.db.KeyRange.where = function(op, value, opt_op2, opt_value2) {};

/**
 *
 * @type {function(new:IDBKeyRange)} The IDBKeyRange interface of the IndexedDB
 * API represents a continuous interval over some data type that is used for
 * keys.
 */
ydn.db.IDBKeyRange;

/**
 * Create a new mutax with false state.
 * @constructor
 * @struct
 */
ydn.db.base.Mutex = function() {};

/**
 * @type {boolean}
 * @private
 */
ydn.db.base.Mutex.prototype.state_;

/**
 * Set mutex state to true.
 */
ydn.db.base.Mutex.prototype.up = function() {};

/**
 * Set mutex state to false.
 */
ydn.db.base.Mutex.prototype.down = function() {};

/**
 * @return {boolean} mutex state.
 */
ydn.db.base.Mutex.prototype.state = function() {};

/**
 * A Deferred with progress event.
 *
 * @param {ydn.db.Request.Method} method request method.
 * @param {Function=} opt_onCancelFunction A function that will be called if the
 *     Deferred is canceled. If provided, this function runs before the
 *     Deferred is fired with a {@code CanceledError}.
 * @param {Object=} opt_defaultScope The default object context to call
 *     callbacks and errbacks in.
 * @constructor
 * @extends {ydn.async.Deferred}
 */
ydn.db.Request = function(method, opt_onCancelFunction, opt_defaultScope) {};

/**
 * @define {boolean} debug flag.
 */
ydn.db.Request.DEBUG;

/**
 * @type {ydn.db.base.Transaction} transaction object.
 */
ydn.db.Request.prototype.tx_;

/**
 * Set active transaction. This will invoke tx listener callbacks.
 * @param {ydn.db.base.Transaction} tx active transaction.
 * @param {string} label tx label.
 * @final
 */
ydn.db.Request.prototype.setTx = function(tx, label) {};

/**
 * @return {!ydn.db.Request} active tx copy of this request.
 */
ydn.db.Request.prototype.copy = function() {};

/**
 * Remove tx when tx is inactive.
 */
ydn.db.Request.prototype.removeTx = function() {};

/**
 * @return {ydn.db.base.Transaction}
 * @final
 */
ydn.db.Request.prototype.getTx = function() {};

/**
 * @return {ydn.db.Request.Method}
 */
ydn.db.Request.prototype.getMethod = function() {};

/**
 * @return {boolean}
 * @final
 */
ydn.db.Request.prototype.canAbort = function() {};

/**
 * Abort active transaction.
 * @see #canAbort
 * @final
 */
ydn.db.Request.prototype.abort = function() {};

/**
 * Resolve a database request. This will trigger invoking
 * awaiting transformer callback function sequencially and asynchorniously
 * and finally invoke Deferred.callback method to fulfill the promise.
 * @param {*} value result from database request.
 * @param {boolean=} opt_failed true if request fail.
 * @final
 */
ydn.db.Request.prototype.setDbValue = function(value, opt_failed) {};

/**
 * Add db value transformer. Transformers are invoked successively.
 * @param {function(this: T, *, boolean, function(*, boolean=))} tr a
 * transformer.
 * @param {T=} opt_scope An optional scope to call the await in.
 * @template T
 * @see {goog.async.Deferred#awaitDeferred}
 */
ydn.db.Request.prototype.await = function(tr, opt_scope) {};

/**
 * Register a callback function to be called when tx ready.
 * @param {!function(this:T,?):?} fun The function to be called on progress.
 * @param {T=} opt_scope An optional scope to call the progback in.
 * @return {!goog.async.Deferred} This Deferred.
 * @template T
 */
ydn.db.Request.prototype.addTxback = function(fun, opt_scope) {};

/**
* @inheritDoc
*/
ydn.db.Request.prototype.callback = function(opt_result) {};

/**
* @inheritDoc
*/
ydn.db.Request.prototype.errback = function(opt_result) {};

/**
 * Determine the current state of a Deferred object.
 * Note: This is to satisfy JQuery build export. Closure project should use
 * @see #hasFired instead.
 * @return {string}
 * @suppress {accessControls}
 */
ydn.db.Request.prototype.state = function() {};

/**
 * Request label.
 * @return {string} request label.
 */
ydn.db.Request.prototype.getLabel = function() {};

/**
 * @param {ydn.db.Request.Method} method method.
 * @param {*} value success value.
 * @return {!ydn.db.Request} request.
 */
ydn.db.Request.succeed = function(method, value) {};

/**
 * Return a Deferred's Promise object, as required by jQuery.
 * @return {!goog.async.Deferred}
 */
ydn.db.Request.prototype.promise = function() {};

/**
 * @inheritDoc
 */
ydn.db.Request.prototype.toString = function() {};

/**
 * Exhausts the execution sequence while a result is available. The result may
 * be modified by callbacks or errbacks, and execution will block if the
 * returned result is an incomplete Deferred.
 *
 * @override Remove try/catch block for performance (and better debugging)
 * @suppress {accessControls}
 */
ydn.db.Request.prototype.fire_ = function() {};

/**
 * @inheritDoc
 */
ydn.db.Request.prototype.toJSON = function() {};

/**
 * Request method.
 * @enum {string}
 */
ydn.db.Request.Method = {};

/**
 *
 * @param {DatabaseSchema|number|string=} opt_version version, if string,
 * it must be parse to int.
 * @param {!Array.<!ydn.db.schema.Store>=} opt_stores store schemas.
 * @constructor
 * @struct
 */
ydn.db.schema.Database = function(opt_version, opt_stores) {};

/**
 * @return {number} number of full text indexes.
 */
ydn.db.schema.Database.prototype.countFullTextIndex = function() {};

/**
 * @param {number} idx
 * @return {ydn.db.schema.fulltext.Catalog}
 */
ydn.db.schema.Database.prototype.fullTextIndex = function(idx) {};

/**
 * @param {string} name
 * @return {ydn.db.schema.fulltext.Catalog}
 */
ydn.db.schema.Database.prototype.getFullTextIndex = function(name) {};

/**
 * Get default text store.
 * @return string}
 */
ydn.db.schema.Database.prototype.getDefaultTextStoreName = function() {};

/**
 * @override
 * @return {!DatabaseSchema} database schema in json.
 */
ydn.db.schema.Database.prototype.toJSON = function() {};

/**
 * Current database version.
 * @type {number|undefined}
 */
ydn.db.schema.Database.prototype.version;

/**
 * Get schema version.
 * @return {number|undefined} version.
 */
ydn.db.schema.Database.prototype.getVersion = function() {};

/**
 * Update database schema for auto schema mode.
 * @param {number} version must be number type.
 */
ydn.db.schema.Database.prototype.setVersion = function(version) {};

/**
 *
 * @return {boolean} true if auto version.
 */
ydn.db.schema.Database.prototype.isAutoVersion = function() {};

/**
 *
 * @return {boolean} true if auto schema.
 */
ydn.db.schema.Database.prototype.isAutoSchema = function() {};

/**
 *
 * @return {!Array.<string>} list of store names.
 */
ydn.db.schema.Database.prototype.getStoreNames = function() {};

/**
 *
 * @param {number} idx index of stores.
 * @return {ydn.db.schema.Store} store schema at the index.
 */
ydn.db.schema.Database.prototype.store = function(idx) {};

/**
 *
 * @return {number} number of store.
 */
ydn.db.schema.Database.prototype.count = function() {};

/**
 *
 * @param {string} name store name.
 * @return {ydn.db.schema.Store} store if found.
 */
ydn.db.schema.Database.prototype.getStore = function(name) {};

/**
 * Get index of store.
 * @param {string} name store name.
 * @return {number} index of store -1 if not found.
 */
ydn.db.schema.Database.prototype.getIndexOf = function(name) {};

/**
 *
 * @param {string} name store name.
 * @return {boolean} return true if name found in stores.
 */
ydn.db.schema.Database.prototype.hasStore = function(name) {};

/**
 * Return an explination what is different between the schemas.
 * @param {ydn.db.schema.Database} schema schema from sniffing.
 * @param {boolean} hint_websql hint the give schema, so that property
 * that could not be reflect from the connection are filled.
 * @param {boolean} hint_idb hint the give schema, so that property
 * that could not be reflect from the connection are filled.
 * @return {string} return empty string if the two are similar.
 */
ydn.db.schema.Database.prototype.difference = function(schema, hint_websql,
                                                       hint_idb) {};

/**
 *
 * @param {ydn.db.schema.Database} schema schema.
 * @return {boolean} true if given schema is similar to this schema.
 */
ydn.db.schema.Database.prototype.similar = function(schema) {};

/**
 * @param name
 * @return {ydn.db.schema.fulltext.Catalog}
 */
ydn.db.schema.Database.prototype.getFullTextSchema = function(name) {};

/**
 *
 * @return {!Array.<string>} Return list of store names.
 */
ydn.db.schema.Database.prototype.listStores = function() {};

/**
 *
 * @param {DatabaseSchema|number|string=} opt_version version, if string,
 * it must be parse to int.
 * @param {!Array.<!ydn.db.schema.Store>=} opt_stores store schemas.
 * @constructor
 * @extends {ydn.db.schema.Database}
 */
ydn.db.schema.EditableDatabase = function(opt_version, opt_stores) {};

/**
 * @override
 */
ydn.db.schema.EditableDatabase.prototype.isAutoSchema = function() {};

/**
 *
 * @param {!ydn.db.schema.Store} table store.
 */
ydn.db.schema.EditableDatabase.prototype.addStore = function(table) {};

/**
 * Schema for index.
 *
 * @param {string|!Array.<string>} keyPath the key path.
 * @param {string|ydn.db.schema.DataType=} opt_type to be determined.
 * @param {boolean=} opt_unique True if the index enforces that there is only
 * one objectfor each unique value it indexes on.
 * @param {boolean=} opt_multi_entry specifies whether the index's multiEntry
 * flag is set.
 * @param {string=} opt_index_name index name.
 * @param {Function=} opt_generator index key generator.
 * @constructor
 * @struct
 */
ydn.db.schema.Index = function(
    keyPath, opt_type, opt_unique, opt_multi_entry, opt_index_name,
    opt_generator) {};

/**
 * Extract value of keyPath from a given object.
 * @param {!Object} obj object to extract from.
 * @return {IDBKey|undefined} return key value.
 */
ydn.db.schema.Index.prototype.extractKey = function(obj) {};

/**
 * Apply index value to given object according to key path.
 * Index must not be composite nor multiEntry.
 * @param {!Object} obj
 * @param {*} value
 */
ydn.db.schema.Index.prototype.applyValue = function(obj, value) {};

/**
 * @type {(string|!Array.<string>)}
 */
ydn.db.schema.Index.prototype.keyPath;

/**
 * @type {boolean}
 */
ydn.db.schema.Index.prototype.multiEntry;

/**
 * @type {boolean}
 */
ydn.db.schema.Index.prototype.unique;

/**
 * Data type for field in object store. This is required to compatible between
 * IndexedDB and SQLite.
 * SQLite mandate COLUMN field specified data type.
 * IndexedDB allow Array as data type in key, while SQLite is not to use.
 * @see http://www.w3.org/TR/IndexedDB/#key-construct
 * @see http://www.sqlite.org/datatype3.html
 * @see http://www.sqlite.org/lang_expr.html
 * @enum {string}
 */
ydn.db.schema.DataType = {};

/**
 * This data type abbreviation is used to prefix value of
 * ydn.db.schema.DataType.ARRAY
 * on storage.
 * @see http://www.sqlite.org/datatype3.html
 * @enum {string}
 */
ydn.db.DataTypeAbbr = {};

/**
 * Seperator char for array
 * @const
 * @type {string}
 */
ydn.db.schema.Index.ARRAY_SEP;

/**
 * Convert key value from IndexedDB value to Sqlite for storage.
 * @see #sql2js
 * @param {Array|Date|*} key key.
 * @param {ydn.db.schema.DataType|undefined} type data type.
 * @return {*} string.
 */
ydn.db.schema.Index.js2sql = function(key, type) {};

/**
 * Convert key value from Sqlite value to IndexedDB for storage.
 * @see #js2sql
 * @param {string|number|*} key key.
 * @param {ydn.db.schema.DataType|undefined} type type.
 * @return {IDBKey|undefined} decoded key.
 */
ydn.db.schema.Index.sql2js = function(key, type) {};

/**
 * @const
 * @type {!Array.<ydn.db.schema.DataType>} column data type.
 */
ydn.db.schema.Index.TYPES;

/**
 * Return an immutable type.
 * @param {ydn.db.schema.DataType|string=} opt_type data type in string.
 * @return {ydn.db.schema.DataType|undefined}
 * data type.
 */
ydn.db.schema.Index.toType = function(opt_type) {};

/**
 *
 * @param {*} x object to test.
 * @return {ydn.db.DataTypeAbbr} type of object type.
 */
ydn.db.schema.Index.toAbbrType = function(x) {};

/**
 *
 * @param {*} x object to test.
 * @return {ydn.db.DataTypeAbbr} type of object type.
 */
ydn.db.schema.Index.type2AbbrType = function(x) {};

/**
 * Return type.
 * @return {ydn.db.schema.DataType|undefined} data type.
 */
ydn.db.schema.Index.prototype.getType = function() {};

/**
 *
 * @return {ydn.db.schema.DataType} get type suitable to use in SQL query
 * construction.
 */
ydn.db.schema.Index.prototype.getSqlType = function() {};

/**
 *
 * @return {string} index name.
 */
ydn.db.schema.Index.prototype.getName = function() {};

/**
 *
 * @return {boolean} multiEntry or not.
 */
ydn.db.schema.Index.prototype.isMultiEntry = function() {};

/**
 *
 * @return {boolean} composite index or not.
 */
ydn.db.schema.Index.prototype.isComposite = function() {};

/**
 *
 * @return {boolean} unique or not.
 */
ydn.db.schema.Index.prototype.isUnique = function() {};

/**
 * @inheritDoc
 */
ydn.db.schema.Index.prototype.toJSON = function() {};

/**
 *
 * @return {!ydn.db.schema.Index} a clone.
 */
ydn.db.schema.Index.prototype.clone = function() {};

/**
 * Compare two keyPath.
 * @see #equals
 * @param {*} keyPath1 key path 1.
 * @param {*} keyPath2 key path 1.
 * @return {string?} description where is different between the two. null
 * indicate similar schema.
 */
ydn.db.schema.Index.compareKeyPath = function(keyPath1, keyPath2) {};

/**
 * Test key path.
 * @param {string|!Array.<string>} key_path key path to be tested.
 * @return {boolean} true if given key path is equal to this key path.
 */
ydn.db.schema.Index.prototype.equalsKeyPath = function(key_path) {};

/**
 * Compare two stores.
 * @see #equals
 * @param {ydn.db.schema.Index} index index schema to test.
 * @return {string} description where is different between the two. Empty string
 * indicate similar schema.
 */
ydn.db.schema.Index.prototype.difference = function(index) {};

/**
 * Create a new update index schema with given guided index schema.
 * NOTE: This is used in websql for checking table schema sniffed from the
 * connection is similar to requested table schema. The fact is that
 * some schema information are not able to reconstruct from the connection,
 * these include:
 *   1. composite index: in which a composite index is blown up to multiple
 *     columns. @see ydn.db.con.WebSql.prototype.prepareTableSchema_.
 * @param {ydn.db.schema.Index} that guided index schema.
 * @return {!ydn.db.schema.Index} updated index schema.
 */
ydn.db.schema.Index.prototype.hint = function(that) {};

/**
 *
 * @param {ydn.db.base.Direction|string=} opt_str direction in string format.
 * @return {ydn.db.base.Direction|undefined} equivalent typed direction.
 */
ydn.db.schema.Index.toDir = function(opt_str) {};

/**
 *
 * @return {(string|!Array.<string>)} keyPath.
 */
ydn.db.schema.Index.prototype.getKeyPath = function() {};

/**
 * Return quoted keyPath. In case undefined return default key column.
 * @return {string} return quoted keyPath. If keyPath is array, they are
 * join by ',' and quoted. If keyPath is not define, default sqlite column
 * name is used.
 */
ydn.db.schema.Index.prototype.getSQLIndexColumnName = function() {};

/**
 * Return quoted keyPath. In case undefined return default key column.
 * @return {string} return quoted keyPath. If keyPath is array, they are
 * join by ',' and quoted. If keyPath is not define, default sqlite column
 * name is used.
 */
ydn.db.schema.Index.prototype.getSQLIndexColumnNameQuoted = function() {};

/**
 * @type {string}
 * @private
 */
ydn.db.schema.Index.prototype.index_column_name_;

/**
 * @type {string}
 * @private
 */
ydn.db.schema.Index.prototype.index_column_name_quoted_;

/**
 * @type {Function}
 * @private
 */
ydn.db.schema.Index.prototype.index_generator_;

/**
 * Set a generator function.
 * @param {Function} gen generator function.
 */
ydn.db.schema.Index.prototype.setGenerator = function(gen) {};

/**
 * Add index by generator.
 * @param {Object} obj record value.
 */
ydn.db.schema.Index.prototype.generateIndex = function(obj) {};

/**
 * @return {boolean} true if index use generator index.
 */
ydn.db.schema.Index.prototype.isGeneratorIndex = function() {};

/**
 *
 * @param {!IndexSchema} json object in json format.
 * @return {ydn.db.schema.Index} created from input json string.
 */
ydn.db.schema.Index.fromJSON = function(json) {};

/**
 * Create a store schema.
 * @param {string} name object store name or TABLE name.
 * @param {(Array.<string>|string)=} opt_key_path indexedDB keyPath, like
 * 'feed.id.$t'. A path to extract primary key from record value.
 * @param {boolean=} opt_autoIncrement If true, the object store has a key
 * generator. Defaults to false.
 * @param {string|ydn.db.schema.DataType=} opt_type data type for keyPath. This
 * value is only used by WebSQL for column data type.
 * <code>ydn.db.schema.DataType.INTEGER</code> if opt_autoIncrement is
 * <code>true.</code>
 * @param {!Array.<!ydn.db.schema.Index>=} opt_indexes list of indexes.
 * @param {boolean=} opt_dispatch_events if true, storage instance should
 * dispatch event on record values changes.
 * @param {boolean=} opt_is_fixed fixed store schema. Websql TABLE, has a
 * default column to store JSON stringify data. A fixed store schema TABLE,
 * do not hae that default column.
 * @param {boolean=} opt_encrypted store is encrypted.
 * @constructor
 * @struct
 */
ydn.db.schema.Store = function(name, opt_key_path, opt_autoIncrement, opt_type,
                               opt_indexes, opt_dispatch_events, opt_is_fixed,
                               opt_encrypted) {};

/**
 * @enum {string}
 */
ydn.db.schema.Store.FetchStrategy = {};

/**
 * @const
 * @type {Array.<ydn.db.schema.Store.FetchStrategy>}
 */
ydn.db.schema.Store.FetchStrategies;

/**
 * @type {(!Array.<string>|string)?}
 */
ydn.db.schema.Store.prototype.keyPath;

/**
 * @type {boolean|undefined}
 */
ydn.db.schema.Store.prototype.autoIncrement;

/**
 * @type {ydn.db.schema.DataType|undefined} //
 */
ydn.db.schema.Store.prototype.type;

/**
 * @protected
 * @type {!Array.<string>}
 */
ydn.db.schema.Store.prototype.keyPaths;

/**
 * @type {!Array.<!ydn.db.schema.Index>}
 * @protected
 */
ydn.db.schema.Store.prototype.indexes;

/**
 * @type {boolean}
 */
ydn.db.schema.Store.prototype.dispatch_events = false;

/**
 * A fixed schema cannot store arbitrary data structure. This is used only
 * in WebSQL. A arbitrery data structure require default blob column.
 * @type {boolean}
 */
ydn.db.schema.Store.prototype.fixed = false;

/**
 * @inheritDoc
 */
ydn.db.schema.Store.prototype.toJSON = function() {};

/**
 *
 * @param {!StoreSchema} json Restore from json stream.
 * @return {!ydn.db.schema.Store} create new store schema from JSON string.
 */
ydn.db.schema.Store.fromJSON = function(json) {};

/**
 *
 * @param {!Array} params sql parameter list.
 * @param {ydn.db.base.QueryMethod} method query method.
 * @param {string|undefined} index_column name.
 * @param {IDBKeyRange} key_range to retrieve.
 * @param {boolean} reverse ordering.
 * @param {boolean} unique unique column.
 * @return {string} sql statement.
 */
ydn.db.schema.Store.prototype.toSql = function(params, method, index_column,
    key_range, reverse, unique) {};

/**
 * @typedef {{
 *   select: string,
 *   from: string,
 *   where: string,
 *   group: string,
 *   order: string
 * }}
 */
ydn.db.schema.Store.SqlParts;

/**
 *
 * @param {!Array} params sql parameter list.
 * @param {ydn.db.base.QueryMethod} method query method.
 * @param {string|undefined} index_column name.
 * @param {ydn.db.KeyRange|IDBKeyRange} key_range to retrieve.
 * @param {boolean} reverse ordering.
 * @param {boolean} unique unique.
 * @return {ydn.db.schema.Store.SqlParts}
 */
ydn.db.schema.Store.prototype.inSql = function(params, method, index_column,
    key_range, reverse, unique) {};

/**
 * Continue to given effective key position.
 * @param {ydn.db.base.QueryMethod} method query method.
 * @param {!Array.<string>} params sql params.
 * @param {string?} index_name index name.
 * @param {IDBKeyRange|ydn.db.KeyRange} key_range key range.
 * @param {boolean} reverse ordering.
 * @param {boolean} unique unique.
 * @param {IDBKey} key effective key.
 * @param {boolean} open open bound.
 * @return {string} sql.
 */
ydn.db.schema.Store.prototype.sqlContinueEffectiveKey = function(method,
    params, index_name, key_range, reverse, unique, key, open) {};

/**
 * Continue to given effective key position.
 * @param {ydn.db.base.QueryMethod} method query method.
 * @param {!Array.<string>} params sql params.
 * @param {string} index_name index name.
 * @param {IDBKeyRange|ydn.db.KeyRange} key_range key range.
 * @param {IDBKey} key effective key.
 * @param {boolean} open open.
 * @param {IDBKey} primary_key primary key.
 * @param {boolean} reverse ordering.
 * @param {boolean} unique unique.
 * @return {string} sql.
 */
ydn.db.schema.Store.prototype.sqlContinueIndexEffectiveKey = function(method,
    params, index_name, key_range, key, open, primary_key, reverse, unique) {};

/**
 *
 * @return {!ydn.db.schema.Store} clone this database schema.
 */
ydn.db.schema.Store.prototype.clone = function() {};

/**
 *
 * @return {number}
 */
ydn.db.schema.Store.prototype.countIndex = function() {};

/**
 *
 * @param {number} idx index of index.
 * @return {ydn.db.schema.Index}
 */
ydn.db.schema.Store.prototype.index = function(idx) {};

/**
 *
 * @param {string} name index name.
 * @return {ydn.db.schema.Index} index if found.
 */
ydn.db.schema.Store.prototype.getIndex = function(name) {};

/**
 * Query index from index key path.
 * @param {string|!Array.<string>} key_path key path.
 * @return {ydn.db.schema.Index} resulting index.
 */
ydn.db.schema.Store.prototype.getIndexByKeyPath = function(key_path) {};

/**
 * @return {boolean} return true if store is fixed.
 */
ydn.db.schema.Store.prototype.isFixed = function() {};

/**
 * @return {boolean} return true if store is encrypted.
 */
ydn.db.schema.Store.prototype.isEncrypted = function() {};

/**
 * @see #hasIndexByKeyPath
 * @param {string} name index name.
 * @return {boolean} return true if name is found in the index or primary
 * keyPath.
 */
ydn.db.schema.Store.prototype.hasIndex = function(name) {};

/**
 * Check given key_path is equals to store key path.
 * @param {(string|goog.array.ArrayLike)=} opt_key_path
 * @return {boolean}
 */
ydn.db.schema.Store.prototype.isKeyPath = function(opt_key_path) {};

/**
 * @see #hasIndex
 * @param {string|!Array.<string>} key_path index key path.
 * @return {boolean} return true if key_path is found in the index including
 * primary keyPath.
 */
ydn.db.schema.Store.prototype.hasIndexByKeyPath = function(key_path) {};

/**
 * Return quoted keyPath. In case undefined return default key column.
 * @return {string} return quoted keyPath. If keyPath is array, they are
 * join by ',' and quoted. If keyPath is not define, default sqlite column
 * name is used.
 */
ydn.db.schema.Store.prototype.getSQLKeyColumnNameQuoted = function() {};

/**
 * Return quoted keyPath. In case undefined return default key column.
 * @return {string} return quoted keyPath. If keyPath is array, they are
 * join by ',' and quoted. If keyPath is not define, default sqlite column
 * name is used.
 */
ydn.db.schema.Store.prototype.getSQLKeyColumnName = function() {};

/**
 *
 * @return {string} return quoted name.
 */
ydn.db.schema.Store.prototype.getQuotedName = function() {};

/**
 * @return {Array.<string>} return name of indexed. It is used as column name
 * in WebSql.
 */
ydn.db.schema.Store.prototype.getColumns = function() {};

/**
 * Update store schema with given guided store schema for
 * indexeddb.
 * these include:
 *   1. blob column data type
 * @param {!ydn.db.schema.Store} that guided store schema.
 */
ydn.db.schema.Store.prototype.hintForIdb = function(that) {};

/**
 * Create a new update store schema with given guided store schema.
 * NOTE: This is used in websql for checking table schema sniffed from the
 * connection is similar to requested table schema. The fact is that
 * some schema information are not able to reconstruct from the connection,
 * these include:
 *   1. composite index: in which a composite index is blown up to multiple
 *     columns. @see ydn.db.con.WebSql.prototype.prepareTableSchema_.
 * @param {ydn.db.schema.Store} that guided store schema.
 * @return {!ydn.db.schema.Store} updated store schema.
 */
ydn.db.schema.Store.prototype.hintForWebSql = function(that) {};

/**
 *
 * @return {string} store name.
 */
ydn.db.schema.Store.prototype.getName = function() {};

/**
 *
 * @return {boolean|undefined} autoIncrement.
 */
ydn.db.schema.Store.prototype.isAutoIncrement = function() {};

/**
 *
 * @return {Array.<string>|string} keyPath.
 */
ydn.db.schema.Store.prototype.getKeyPath = function() {};

/**
 *
 * @return {boolean} true if inline key is in used.
 */
ydn.db.schema.Store.prototype.usedInlineKey = function() {};

/**
 *
 * @return {!Array.<string>} list of index names.
 */
ydn.db.schema.Store.prototype.getIndexNames = function() {};

/**
 *
 * @return {ydn.db.schema.DataType|undefined}
 */
ydn.db.schema.Store.prototype.getType = function() {};

/**
 *
 * @return {ydn.db.schema.DataType}
 */
ydn.db.schema.Store.prototype.getSqlType = function() {};

/**
 *
 * @return {!Array.<string>} list of index keyPath.
 */
ydn.db.schema.Store.prototype.getIndexKeyPaths = function() {};

/**
 *
 * @param {string} name column name or keyPath.
 * @param {ydn.db.schema.DataType=} opt_type optional column data type.
 * @param {boolean=} opt_unique unique.
 * @param {boolean=} opt_multiEntry true for array index to index individual
 * element.
 */
ydn.db.schema.Store.prototype.addIndex = function(name, opt_type, opt_unique,
                                                  opt_multiEntry) {};

/**
 * Extract primary key value of keyPath from a given object.
 * @param {Object} record record value.
 * @param {IDBKey=} opt_key out-of-line key.
 * @return {!IDBKey|undefined} extracted primary key.
 */
ydn.db.schema.Store.prototype.extractKey = function(record, opt_key) {};

/**
 * Extract value of keyPath from a row of SQL results
 * @param {!Object} obj record value.
 * @return {!Array|number|string|undefined} return key value.
 */
ydn.db.schema.Store.prototype.getRowValue = function(obj) {};

/**
 * Generated a key starting from 0 with increment of 1.
 * NOTE: Use only by simple store.
 * @return {number} generated key.
 */
ydn.db.schema.Store.prototype.generateKey = function() {};

/**
 * Set keyPath field of the object with given value.
 * @see #getKeyValue
 * @param {!Object} obj get key value from its keyPath field.
 * @param {*} value key value to set.
 */
ydn.db.schema.Store.prototype.setKeyValue = function(obj, value) {};

/**
 * Prepare SQL column name and values.
 * @param {!Object} obj get values of indexed fields.
 * @param {IDBKey=} opt_key optional key.
 * @param {boolean=} opt_exclude_unique_column exclude unique constrained
 * columns.
 * @return {{
 *    columns: Array.<string>,
 *    slots: Array.<string>,
 *    values: Array.<string>,
 *    key: (IDBKey|undefined)
 *  }} return list of values as it appear on the indexed fields.
 */
ydn.db.schema.Store.prototype.sqlNamesValues = function(obj, opt_key,
    opt_exclude_unique_column) {};

/**
 * Compare two stores.
 * @see #similar
 * @param {ydn.db.schema.Store} store store schema to test.
 * @return {boolean} true if store schema is exactly equal to this schema.
 */
ydn.db.schema.Store.prototype.equals = function(store) {};

/**
 * Compare two stores.
 * @see #equals
 * @param {ydn.db.schema.Store} store
 * @return {string} explination for difference, empty string for similar.
 */
ydn.db.schema.Store.prototype.difference = function(store) {};

/**
 *
 * @param {ydn.db.schema.Store} store schema.
 * @return {boolean} true if given store schema is similar to this.
 */
ydn.db.schema.Store.prototype.similar = function(store) {};

/**
 * @type {Object.<Function>} index generator function for each index.
 */
ydn.db.schema.Store.prototype.index_generators;

/**
 * Add index by generator.
 * @param {Object} obj record value.
 */
ydn.db.schema.Store.prototype.generateIndex = function(obj) {};

/**
 * @param {function(!ydn.db.Request, goog.array.ArrayLike)} hook database
 * pre-hook function.
 * @return {number} internal hook index.
 */
ydn.db.schema.Store.prototype.addHook = function(hook) {};

/**
 * Invoke hook functions.
 * Database hook to call before persisting into the database.
 * Override this function to attach the hook. The default implementation is
 * immediately invoke the given callback with first variable argument.
 * to preserve database operation order, preHook call is not waited.
 * @param {!ydn.db.Request} df deferred from database operation.
 * @param {goog.array.ArrayLike} args arguments to the db method.
 * @param {number=} opt_hook_idx hook index to ignore.
 * @param {*=} opt_scope
 * @final
 */
ydn.db.schema.Store.prototype.hook = function(df, args, opt_hook_idx,
                                              opt_scope) {};

/**
 * Lookup index from the schema.
 * @param {!Array.<string>|string} index_name_or_key_path index name or
 * key path.
 * @return {string} index name.
 */
ydn.db.schema.Store.prototype.getIndexName = function(index_name_or_key_path) {};

/**
 * Catalog of full text search indexes.
 * @param {string} name fulltext search index name.
 * @param {Array.<ydn.db.schema.fulltext.InvIndex>} indexes list of primary
 * index, in which indexes are stored.
 * @param {string=} opt_lang language.
 * @param {Array.<string>=} opt_normalizers list of normalizer.
 * @constructor
 * @struct
 */
ydn.db.schema.fulltext.Catalog = function(name, indexes, opt_lang,
                                          opt_normalizers) {};

/**
 * Return unique source store name.
 * @return {!Array.<string>}
 */
ydn.db.schema.fulltext.Catalog.prototype.getSourceNames = function() {};

/**
 * @return {string} full text index name. This is store name as well.
 */
ydn.db.schema.fulltext.Catalog.prototype.getName = function() {};

/**
 * @return {number} number of primary indexes.
 */
ydn.db.schema.fulltext.Catalog.prototype.count = function() {};

/**
 * @param {number} idx index of indexes.
 * @return {ydn.db.schema.fulltext.InvIndex} Index at idx.
 */
ydn.db.schema.fulltext.Catalog.prototype.index = function(idx) {};

/**
 * @param {string} store_name store name.
 * @param {string} index_name store name.
 * @return {ydn.db.schema.fulltext.InvIndex} Index at idx.
 */
ydn.db.schema.fulltext.Catalog.prototype.getSource = function(store_name,
                                                              index_name) {};

/**
 * @param {FullTextCatalog} json
 * @return {!ydn.db.schema.fulltext.Catalog}
 */
ydn.db.schema.fulltext.Catalog.fromJson = function(json) {};

/**
 * @interface
 */
ydn.db.schema.fulltext.ResultSet = function() {};

/**
 * Get list of store name involved in this catalog.
 * @return {!Array.<string>}
 */
ydn.db.schema.fulltext.ResultSet.prototype.getStoreList = function() {};

/**
 * Next database lookup.
 * @param {function(string, string, ydn.db.KeyRange,
 * ydn.db.schema.fulltext.Entry)} cb callback for next query.
 */
ydn.db.schema.fulltext.ResultSet.prototype.nextLookup = function(cb) {};

/**
 * Return result from lookup.
 * @param {ydn.db.schema.fulltext.Entry} query
 * @param {Array} results
 * @return {boolean?} return true to invoke next looup, false when done and
 * null if not done.
 */
ydn.db.schema.fulltext.ResultSet.prototype.addResult =
    function(query, results) {};

/**
 * @return {Array.<ydn.db.schema.fulltext.Entry>}
 */
ydn.db.schema.fulltext.ResultSet.prototype.collect = function() {};


/**
 * @interface
 */
ydn.db.schema.fulltext.Engine = function() {};

/**
 * Free text query.
 * @param {string} catalog_name
 * @param {string} query
 * @param {number=} opt_limit
 * @param {number=} opt_threshold
 * @return {ydn.db.schema.fulltext.ResultSet}
 */
ydn.db.schema.fulltext.Engine.prototype.query = function(catalog_name, query,
    opt_limit, opt_threshold) {};

/**
 * Analyze an indexing value.
 * @param {string} store_name the store name in which document belong.
 * @param {IDBKey} key primary of the document.
 * @param {!Object} obj the document to be indexed.
 * @return {Array.<ydn.db.schema.fulltext.Entry>} score for each token.
 */
ydn.db.schema.fulltext.Engine.prototype.analyze = function(
    store_name, key, obj) {};

/**
 * @interface
 */
ydn.db.schema.fulltext.Entry = function() {};

/**
 * Primary index for fulltext search index.
 * @param {string} store_name store name of which index reside.
 * @param {string} key_path the index name.
 * @param {number?=} opt_weight index weight. Default to 1.
 * @constructor
 * @struct
 */
ydn.db.schema.fulltext.InvIndex = function(store_name, key_path,
                                           opt_weight) {};

/**
 * @return {string}
 */
ydn.db.schema.fulltext.InvIndex.prototype.getStoreName = function() {};

/**
 * @return {number}
 */
ydn.db.schema.fulltext.InvIndex.prototype.getWeight = function() {};

/**
 * @return {string}
 */
ydn.db.schema.fulltext.InvIndex.prototype.getKeyPath = function() {};

/**
 * @param {InvIndex} json
 * @return {!ydn.db.schema.fulltext.InvIndex}
 */
ydn.db.schema.fulltext.InvIndex.fromJson = function(json) {};
