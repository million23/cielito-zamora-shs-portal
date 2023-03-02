<script>
    import Footer from "../../components/Footer.svelte";
    import PageTransition from "../../components/PageTransition.svelte";
</script>

<PageTransition>
    <slot />
    <Footer />
</PageTransition>
