<template>
  <v-app>
    <headers-component />
    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeadersComponent from "./components/headerComponent.vue";

@Component({
  components: {
    HeadersComponent,
  },
})
export default class App extends Vue {}
</script>
<style >
.main {
  max-width: 1400px;
  background-color: #eeeeee;
}
.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
.v-enter-active {
  transition: all 0.5s;
}
</style>
