<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="'/users/' + user.id">{{ user.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, useFetch } from "#imports";

const router = useRoute();
console.log("router", router);

const { data: users } = await useFetch(
  "https://jsonplaceholder.typicode.com/users"
);

const showPosts = async (id: string) => {
  router.path;
};
</script>

<style scoped></style>
