<script lang="ts">
import { defineComponent } from "vue";
import { Button, NewTitle, TheTabs } from "ui";

export default defineComponent({
  components: {
    Button,
    NewTitle,
    TheTabs,
  },
  data() {
    return {
      count: 1,
    };
  },
});
</script>

<template>
  <div>
    <Button label="New Button" primary userName="Test-2" />
    <NewTitle />
    <TheTabs active="1" />
  </div>
</template>
