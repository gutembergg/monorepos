<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "ui";
import { NewTitle } from "ui";

export default defineComponent({
  components: {
    Button,
    NewTitle,
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
    <Button label="New Button" />
    <NewTitle />
  </div>
</template>
