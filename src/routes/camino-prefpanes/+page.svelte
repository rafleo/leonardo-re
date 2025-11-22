<svelte:head>
	<title>Camino preference panes • Leonardo Re</title>
	<meta
		name="description"
		content="Discontinued Camino preference panes CamiNoScript and Settings Plus."
	/>
	<meta property="og:title" content="Camino Preference Panes by Leonardo Re" />
	<meta
		property="og:description"
		content="Discontinued Camino preference panes CamiNoScript and Settings Plus."
	/>
	<meta property="og:url" content="https://leonardo.re/camino-prefpanes" />
	<meta name="twitter:title" content="Camino Preference Panes by Leonardo Re" />
	<meta
		name="twitter:description"
		content="Discontinued Camino preference panes CamiNoScript and Settings Plus."
	/>
	<link rel="canonical" href="https://leonardo.re/camino-prefpanes" />
</svelte:head>

<main>
	<div class="container wide">
		<div class="row">
			<div class="column">
				<h2><span>Camino</span> prefPanes</h2>
				<h3>Retired products.</h3>
			</div>
		</div>
	</div>

	<div
		class="container wide imagespacer camino-banner"
		role="img"
		aria-label="Two screenshots of Camino preference panes"
	></div>

	<div class="container">
		<div class="row">
			<div class="column">
				<h5>Development stopped.</h5>
				<p>
					<strong>I have seized development on these Camino preference panes.</strong> There will be
					no further updates or changes.<br />Apart from me moving back to Windows, the code was
					unfortunately lost in a system crash (on Mac, yes yes).
				</p>
				<p>Therefore, <strong>I would strongly advise against using these.</strong></p>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="one-half column">
				<h4>CamiNoScript</h4>
				<p>Get control back over your browser!</p>
				<p>
					CamiNoScript provides an intuitive user interface for <strong>blocking JavaScript</strong>
					on certain or all websites. It allows you to whitelist and/or blacklist domains and subdomains
					and control which scripts are being executed.
				</p>
				<p>You can use a whitelist or a blacklist to block any scripts you want.</p>
				<p>
					<a
						class="button button-primary"
						href="/download/caminoscript.dmg"
						title="Download CamiNoScript">Download (Free)</a
					><br />
					<strong>Camino - Intel Mac only - 1.0 MB</strong>
				</p>
			</div>
			<div class="one-half column">
				<h4>Settings Plus</h4>
				<p>This preference pane gives you access to settings found in <em>about:config</em></p>
				<ul>
					<li><strong>Location bar search</strong> activation</li>
					<li>search engine selection (for the URL bar search)</li>
					<li>location bar related settings</li>
					<li>cache options</li>
					<li>website source view displayed in a tab instead of a window</li>
					<li>mouse settings</li>
					<li>download manager configuration</li>
				</ul>
				<p>
					<a
						class="button button-primary"
						href="/download/settings-plus.dmg"
						title="Download Settings Plus">Download (Free)</a
					><br />
					<strong>Camino - Intel Mac only - 0.6 MB</strong>
				</p>
			</div>
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="column">
				<h5>To install these preference panes, proceed as follows.</h5>
				<p>
					Open the .DMG by double-clicking on it and copy the contained file into the <code
						>PreferencePanes</code
					>
					folder (create it if necessary) in
					<code>~/Library/Application Support/Camino/PreferencePanes</code>
					(<code>~</code> being your home folder)
				</p>
				<p>
					To uninstall simply remove (delete) the file while Camino is <u>not</u> running. Restart Camino
					for the changes to take effect.
				</p>
			</div>
		</div>
	</div>
</main>
