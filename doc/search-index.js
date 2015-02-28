var searchIndex = {};
searchIndex['r2d2'] = {"items":[[0,"","r2d2","A library providing a generic connection pool."],[3,"Config","","A struct specifying the runtime configuration of a pool."],[3,"NoopErrorHandler","","An `ErrorHandler` which does nothing."],[3,"LoggingErrorHandler","","An `ErrorHandler` which logs at the error level."],[3,"Pool","","A generic connection pool."],[3,"InitializationError","","An error returned by `Pool::new` if it fails to initialize connections."],[3,"GetTimeout","","An error returned by `Pool::get` if it times out without retrieving a connection."],[3,"PooledConnection","","A smart pointer wrapping a connection."],[0,"config","","Pool configuration."],[3,"Builder","r2d2::config","A builder for `Config`."],[3,"Config","","A struct specifying the runtime configuration of a pool."],[11,"fmt","","",0],[11,"clone","","",0],[11,"new","","Constructs a new `Builder`.",0],[11,"pool_size","","Sets `pool_size`.",0],[11,"helper_threads","","Sets `helper_threads`.",0],[11,"test_on_check_out","","Sets `test_on_check_out`.",0],[11,"initialization_fail_fast","","Sets `initialization_fail_fast`.",0],[11,"connection_timeout","","Sets `connection_timeout`.",0],[11,"build","","Consumes the `Builder`, turning it into a `Config`.",0],[11,"fmt","","",1],[11,"clone","","",1],[11,"default","","",1],[11,"builder","","Creates a new `Builder` which can be used to construct a customized\n`Config`.",1],[11,"pool_size","","The number of connections managed by the pool.",1],[11,"helper_threads","","The number of threads that the pool will use for asynchronous\noperations such as connection creation and health checks.",1],[11,"test_on_check_out","","If true, the health of a connection will be verified via a call to\n`ConnectionManager::is_valid` before it is checked out of the pool.",1],[11,"initialization_fail_fast","","If true, `Pool::new` will synchronously initialize its connections,\nreturning an error if they could not be created.",1],[11,"connection_timeout","","Calls to `Pool::get` will wait this long for a connection to become\navailable before returning an error.",1],[8,"ConnectionManager","r2d2","A trait which provides connection-specific functionality."],[16,"Connection","r2d2::ConnectionManager","The connection type this manager deals with."],[16,"Error","","The error type returned by `Connection`s."],[10,"connect","r2d2","Attempts to create a new connection.",2],[10,"is_valid","","Determines if the connection is still connected to the database.",2],[10,"has_broken","","*Quickly* determines if the connection is no longer usable.",2],[8,"ErrorHandler","","A trait which handles errors reported by the `ConnectionManager`."],[10,"handle_error","","Handles an error.",3],[11,"fmt","","",4],[11,"clone","","",4],[11,"handle_error","","",4],[11,"fmt","","",5],[11,"clone","","",5],[11,"handle_error","","",5],[11,"drop","","",6],[11,"fmt","","",6],[11,"fmt","","",7],[11,"fmt","","",7],[11,"description","","",7],[11,"fmt","","",8],[11,"fmt","","",8],[11,"description","","",8],[11,"new","","Creates a new connection pool.",6],[11,"get","","Retrieves a connection from the pool.",6],[11,"fmt","","",9],[11,"drop","","",9],[6,"Target","",""],[11,"deref","","",9],[11,"deref_mut","","",9]],"paths":[[3,"Builder"],[3,"Config"],[8,"ConnectionManager"],[8,"ErrorHandler"],[3,"NoopErrorHandler"],[3,"LoggingErrorHandler"],[3,"Pool"],[3,"InitializationError"],[3,"GetTimeout"],[3,"PooledConnection"]]};
initSearch(searchIndex);
