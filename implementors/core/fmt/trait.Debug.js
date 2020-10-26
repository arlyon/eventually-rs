(function() {var implementors = {};
implementors["eventually_app_example"] = [{"text":"impl Debug for TotalOrdersProjection","synthetic":false,"types":[]},{"text":"impl Debug for OrderItem","synthetic":false,"types":[]},{"text":"impl Debug for OrderState","synthetic":false,"types":[]},{"text":"impl Debug for Order","synthetic":false,"types":[]},{"text":"impl Debug for OrderCommand","synthetic":false,"types":[]},{"text":"impl Debug for OrderEvent","synthetic":false,"types":[]},{"text":"impl Debug for OrderError","synthetic":false,"types":[]},{"text":"impl Debug for OrderAggregate","synthetic":false,"types":[]}];
implementors["eventually_core"] = [{"text":"impl&lt;T:&nbsp;Debug&gt; Debug for AggregateRoot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Aggregate + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Id: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::State: Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::Event: Debug,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Debug, S:&nbsp;Debug&gt; Debug for Error&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Error + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Error + 'static,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Debug for Select","synthetic":false,"types":[]},{"text":"impl Debug for Expected","synthetic":false,"types":[]},{"text":"impl&lt;SourceId:&nbsp;Debug, T:&nbsp;Debug&gt; Debug for Persisted&lt;SourceId, T&gt;","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]}];
implementors["eventually_postgres"] = [{"text":"impl Debug for Error","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Debug, Event:&nbsp;Debug&gt; Debug for EventStore&lt;Id, Event&gt;","synthetic":false,"types":[]},{"text":"impl Debug for DeserializeError","synthetic":false,"types":[]},{"text":"impl Debug for Error","synthetic":false,"types":[]}];
implementors["eventually_redis"] = [{"text":"impl Debug for StoreError","synthetic":false,"types":[]},{"text":"impl Debug for SubscriberError","synthetic":false,"types":[]}];
implementors["eventually_util"] = [{"text":"impl Debug for ConflictError","synthetic":false,"types":[]},{"text":"impl Debug for SubscriberError","synthetic":false,"types":[]},{"text":"impl&lt;Id:&nbsp;Debug, Event:&nbsp;Debug&gt; Debug for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Hash + Eq,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()