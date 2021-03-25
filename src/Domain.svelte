<script>
	import Utils from "./utils/utils"

    export let domains, index;
    domains = Utils.shuffle(domains);

    const incrementIndex = () => index = (index + 1) % domains.length;

    (async ()  => {
        for (let i = 0; i < 20; i++) {
            incrementIndex();
            await Utils.sleep(10 * (i  +10));
        }
    })();
</script>

<h1 class="domain" on:click={incrementIndex}>
    {domains[index]}
</h1>
