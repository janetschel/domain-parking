<script>
	import Util from "./utils/utils"
    export let domains;
    domains = Util.shuffle(domains);

    export let currentlyDisplayed;

    const incrementCurrentlyDisplayed = () => 
        currentlyDisplayed = (currentlyDisplayed + 1) % domains.length;

    const shuffleThrough = async ()  => {
        for (let i = 0; i < 20; i++) {
            incrementCurrentlyDisplayed();
            await Util.sleep(10 * (i  +10));
        }
    }

    // Shuffle through domains at the beginning
    shuffleThrough();
</script>

<h1 
    class="domain"
    on:click={incrementCurrentlyDisplayed}
>
    {domains[currentlyDisplayed]}
</h1>
