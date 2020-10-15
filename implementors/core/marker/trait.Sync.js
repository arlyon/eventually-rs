(function() {var implementors = {};
implementors["eventually_app_example"] = [{"text":"impl Sync for Config","synthetic":true,"types":[]},{"text":"impl Sync for TotalOrdersProjection","synthetic":true,"types":[]},{"text":"impl Sync for OrderItem","synthetic":true,"types":[]},{"text":"impl Sync for OrderItems","synthetic":true,"types":[]},{"text":"impl Sync for Order","synthetic":true,"types":[]},{"text":"impl Sync for OrderAggregate","synthetic":true,"types":[]},{"text":"impl Sync for OrderState","synthetic":true,"types":[]},{"text":"impl Sync for OrderCommand","synthetic":true,"types":[]},{"text":"impl Sync for OrderEvent","synthetic":true,"types":[]},{"text":"impl Sync for OrderError","synthetic":true,"types":[]}];
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; Sync for AggregateRootBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Sync for AggregateRoot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Event: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Id: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::State: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, Store&gt; Sync for Repository&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, S&gt; Sync for Error&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Sync for Persisted&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Select","synthetic":true,"types":[]},{"text":"impl Sync for Expected","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Sync for EventBuilder&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Sync for EventBuilderWithVersion&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Sync for EventBuilderWithSequenceNumber&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Store, Subscriber&gt; Sync for Transient&lt;Store, Subscriber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Subscriber: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]}];
implementors["eventually_postgres"] = [{"text":"impl Sync for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl Sync for EventStoreBuilderMigrated","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Sync for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]},{"text":"impl Sync for DeserializeError","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Sync for EventSubscriber&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event&gt; Sync for PersistentBuilder&lt;SourceId, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event&gt; Sync for Persistent&lt;SourceId, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for Error","synthetic":true,"types":[]}];
implementors["eventually_util"] = [{"text":"impl&lt;P, S&gt; Sync for Projector&lt;P, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Sync for ConflictError","synthetic":true,"types":[]},{"text":"impl Sync for SubscriberError","synthetic":true,"types":[]},{"text":"impl Sync for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Sync for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Send + Sync,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Sync for AsAggregate&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Sync,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()