<template>
  <div>User Name:{{ user.name }}</div>
</template>

<script setup lang="ts">
import { getPosts } from "../../repositories/posts";

const { id } = useRoute().params;
definePageMeta({
  layout: "users",
});

const { data: user } = await getPosts(id as string);
</script>
