<template>
  <div>Contact</div>
</template>

<script setup>
definePageMeta({
  title: "My home page",
});
const route = useRoute();

const { data } = await useFetch("https://jsonplaceholder.typicode.com/users");

console.log("response", data);
</script>
