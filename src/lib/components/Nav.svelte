<script lang="ts">
	import { page } from "$app/state";
</script>

<nav>
	<input type="checkbox" id="show-menu" role="button" />
	<label for="show-menu" class="show-menu">
		<div id="navbutton">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</label>
	<h1>
		<a href="/" title="Home Page"
			><img
				src="/img/re-logo.svg"
				alt="Re Logo"
				title="Leonardo Re"
				width="71"
				height="59"
			/></a
		><span>Leonardo Re</span>
	</h1>
	<ul id="menu">
		<li>
			<a href="/" title="Film Director and Producer" class={page.url.pathname === '/' ? 'active' : ''}
				>Film Director and Producer</a
			>
		</li>
		<li>
			<a
				href="/web-design-development"
				title="Website Design & Development"
				class={page.url.pathname === '/web-design-development' ? 'active' : ''}>Web Developer</a
			>
		</li>
		<li>
			<a
				href="/software-products"
				title="Software Products"
				class={page.url.pathname === '/software-products' ? 'active' : ''}>Software Products</a
			>
		</li>
	</ul>
</nav>
