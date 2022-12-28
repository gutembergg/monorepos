<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
    <button @click="showPosts">oiioioi</button>
  </div>
</template>

<script setup>
import { getPosts } from "../../repositories/posts";

const { data: users } = await useFetch(
  "https://jsonplaceholder.typicode.com/users"
);

const showPosts = async () => {
  const posts = await getPosts();
  console.log("POSST", posts);
};

/* const { data: users } = await useFetch(
  "https://jsonplaceholder.typicode.com/users"
); */
</script>

<style scoped></style>
