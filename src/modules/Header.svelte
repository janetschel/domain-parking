<script>
    import "../styles/Header.css";
    import "../styles/media-queries/Header.css";

    import Domain from "./Domain.svelte";
    export let domains, index;
</script>

<div class="header">
    <div class="catch-phrase">
        <h1 class="error-message">404</h1>
        <div class="domain-shuffle">
            <h1 class="question">Did you visit</h1> 
            <Domain domains={domains} index={index}/>
            <h1 class="question-mark">?</h1>
        </div>
    </div>
    <div class="nothing-to-see">
        <h2>Well, nothing to see here...</h2>
        <h3>These domains are just parked here while they desperately wait to be used in a project (sorry).</h3>
        <h3>In the meantime you can check out <a href="https://janetschel.dev">janetschel.dev</a> for actual content.</h3>
    </div>
</div>
