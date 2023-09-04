<script>
  import "./app.css";
  import Navbar from "../components/Navbar.svelte";
</script>

<section>
  <Navbar />
  <div class="">
    <slot />
  </div>
</section>
