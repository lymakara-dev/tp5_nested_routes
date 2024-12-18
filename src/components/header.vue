<template>
  <div
    class="flex flex-row gap-4 justify-between p-4 text-xl border-black border-2"
  >
    <h1>Header</h1>
    <nav>
      <ul class="flex flex-row gap-4">
        <li>
          <router-link
            to="/page1"
            :class="{ 'text-red-500 font-bold': isActive('/page1') }"
            >Page 1</router-link
          >
        </li>
        <li>
          <router-link
            to="/page2"
            :class="{ 'text-red-500 font-bold': isActive('/page2') }"
            >Page 2</router-link
          >
        </li>
        <li>
          <router-link
            to="/page3"
            :class="{ 'text-red-500 font-bold': isActive('/page3') }"
            >Page 3</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
