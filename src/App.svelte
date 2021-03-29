<script>
    import "./styles/App.css"

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

<div class="wrapper">
	<Header domains={domains} index={0} />
	<Footer />
	<Prompt />
</div>
