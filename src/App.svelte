<script>
	import Footer from "./modules/Footer.svelte";
	import Header from "./modules/Header.svelte";
	import Prompt from "./modules/Prompt.svelte";

	const domains = [
		"janetschel.com",
		"etschel.xyz",
		"zander.red",
		"zander.plus",
		"zander.fyi",
	]
</script>

<div class="content">
	<Header domains={domains} index={0} />
	<Prompt />
	<Footer />
</div>
