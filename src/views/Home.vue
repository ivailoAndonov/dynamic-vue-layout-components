<template>
  <!-- <layout name="LayoutDefault"> -->
    <div class="Home">
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>

      <h2>Amet sit</h2>
      <p>
        Eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  <!-- </layout> -->
</template>

<script>
import Layout from '../layouts/Layout';

export default {
  name: `Home`,
  components: {
    Layout,
  },
    mounted() {
    console.log('%civo:', 'color: #008288; font-weight: bold', 'home.vue mounted')
  },
};
</script>
