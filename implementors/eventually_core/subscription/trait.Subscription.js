(function() {var implementors = {};
implementors["eventually_core"] = [];
implementors["eventually_postgres"] = [{"text":"impl&lt;SourceId, Event&gt; Subscription for Persistent&lt;SourceId, Event&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SourceId: TryFrom&lt;String&gt; + Display + Eq + Clone + Send + Sync,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Serialize + Clone + Send + Sync + Debug,<br>&nbsp;&nbsp;&nbsp;&nbsp;Event: Deserialize&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;SourceId as TryFrom&lt;String&gt;&gt;::Error: StdError + Send + Sync + 'static,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()