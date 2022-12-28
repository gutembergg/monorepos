<template>
  <div>
    <div class="tabs">
      <button
        title="Premier Titre"
        class="btn_tab"
        @click="onChange('1')"
        value="1"
      >
        Premier Titre
      </button>

      <button
        title="Deuxieme Titre"
        class="btn_tab"
        @click="onChange('2')"
        value="2"
      >
        Deuxieme Titre
      </button>
    </div>

    <p v-if="states.active === '1'">
      A adipisicing elit. Nam consectetur reiciendis deleniti quibusdam odio
      ipsum libero cupiditate nemo doloremque adipisci! Non assumenda neque
      alias harum doloribus vitae nam reprehenderit reiciendis!
    </p>

    <p v-if="states.active === '2'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consectetur
      reiciendis deleniti quibusdam odio ipsum libero cupiditate nemo doloremque
      adipisci! Non assumenda neque alias harum doloribus vitae nam
      reprehenderit reiciendis!
    </p>
    <div @click="onChangeUser">
      {{ myUsername }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";

import "./TheTabs.css";

interface States {
  active: string;
  userName?: string;
}

const props = withDefaults(defineProps<States>(), {
  active: "1",
});

const states = reactive<States>({
  active: props.active,
  userName: props.userName,
});

const myUsername = computed(() => {
  return `My username is: ${states.userName}`;
});

const onChange = (id: string): void => {
  states.active = id;
};

const onChangeUser = () => {
  states.userName = "Test";
};
</script>
