<template>
  <div class="border-black border-r-2 border-l-2 flex flex-row">
    <Menu></Menu>
    <h1 class="grow flex justify-center items-center">Welcome to Page 2</h1>
  </div>
</template>

<script>
import Menu from "@/components/menu.vue";

export default {
  name: "Page2",
  components: {
    Menu,
  },
};
</script>
