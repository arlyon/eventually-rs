(function() {var implementors = {};
implementors["eventually_app_example"] = [{"text":"impl Unpin for Config","synthetic":true,"types":[]},{"text":"impl Unpin for TotalOrdersProjection","synthetic":true,"types":[]},{"text":"impl Unpin for OrderItem","synthetic":true,"types":[]},{"text":"impl Unpin for OrderItems","synthetic":true,"types":[]},{"text":"impl Unpin for Order","synthetic":true,"types":[]},{"text":"impl Unpin for OrderAggregate","synthetic":true,"types":[]},{"text":"impl Unpin for OrderState","synthetic":true,"types":[]},{"text":"impl Unpin for OrderCommand","synthetic":true,"types":[]},{"text":"impl Unpin for OrderEvent","synthetic":true,"types":[]},{"text":"impl Unpin for OrderError","synthetic":true,"types":[]}];
implementors["eventually_core"] = [{"text":"impl&lt;T&gt; Unpin for AggregateRootBuilder&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Unpin for AggregateRoot&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Event: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::Id: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Aggregate&gt;::State: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T, Store&gt; Unpin for Repository&lt;T, Store&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A, S&gt; Unpin for Error&lt;A, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Unpin for Persisted&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Select","synthetic":true,"types":[]},{"text":"impl Unpin for Expected","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Unpin for EventBuilder&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Unpin for EventBuilderWithVersion&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, T&gt; Unpin for EventBuilderWithSequenceNumber&lt;SourceId, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Store, Subscriber&gt; Unpin for Transient&lt;Store, Subscriber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Store: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Subscriber: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
implementors["eventually_postgres"] = [{"text":"impl Unpin for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl Unpin for EventStoreBuilderMigrated","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Unpin for EventStore&lt;Id, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;Id: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl Unpin for DeserializeError","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Unpin for EventSubscriber&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event&gt; Unpin for PersistentBuilder&lt;SourceId, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;SourceId, Event&gt; Unpin for Persistent&lt;SourceId, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]}];
implementors["eventually_util"] = [{"text":"impl&lt;P, S&gt; Unpin for Projector&lt;P, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ConflictError","synthetic":true,"types":[]},{"text":"impl Unpin for SubscriberError","synthetic":true,"types":[]},{"text":"impl Unpin for EventStoreBuilder","synthetic":true,"types":[]},{"text":"impl&lt;Id, Event&gt; Unpin for EventStore&lt;Id, Event&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for AsAggregate&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()