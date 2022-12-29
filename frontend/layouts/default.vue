<template>
  <div>
    <header class="shadow-sm bg-white p-2">
      <nav class="container p-4 mx-auto flex justify-between">
        <div class="flex gap-4">
          <button>
            <NuxtLink to="/">Index page</NuxtLink>
          </button>

          <button>
            <NuxtLink :to="{ name: 'home' }">Home page</NuxtLink>
          </button>

          <button>
            <NuxtLink :to="{ name: 'contact' }">Contact page</NuxtLink>
          </button>

          <button>
            <NuxtLink to="/users">Users page</NuxtLink>
          </button>
        </div>
      </nav>
    </header>

    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
  color: red;
}
</style>
