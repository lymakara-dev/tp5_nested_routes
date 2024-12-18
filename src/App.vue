<template>
  <Header></Header>
  <RouterView />
  <Footer></Footer>
</template>

<script>
import { RouterView } from "vue-router";
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>
