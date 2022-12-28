<template>
  <div>User ID:{{ id }}</div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "users",
});
// When accessing /posts/1, route.params.id will be 1
console.log(id);
</script>
