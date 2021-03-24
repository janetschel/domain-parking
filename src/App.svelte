<script>
	import Footer from "./Footer.svelte";
	import Header from "./Header.svelte";
import Minigame from "./Game.svelte";

	// Domains that are currently parked and redirect to this website
	const domains = [
		"janetschel.de",
		"janetschel.com",
		"etschel.xyz",
		"zander.red",
		"zander.plus",
		"zander.fyi",
		"testapps.de",
		"verbindungs-optimierer.de",
	]

	let index = 0;
</script>

<Header domains={domains} index={index} />
<Minigame />
<Footer />