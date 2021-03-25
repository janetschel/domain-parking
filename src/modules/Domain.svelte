<script>
	import Util from "../utils/utils.js"

    export let domains, index;
    domains = Util.shuffle(domains);

    const incrementIndex = () => index = (index + 1) % domains.length;

    (async ()  => {
        for (let i = 0; i < 20; i++) {
            incrementIndex();
            await Util.sleep(10 * (i  +10));
        }
    })();
</script>

<h1 class="domain" on:click={incrementIndex}>
    {domains[index]}
</h1>
