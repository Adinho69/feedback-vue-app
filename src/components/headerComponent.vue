<template>
  <div class="header">
    <header class="d-flex navHeader mx-auto">
      <v-btn to="/" color="#00E676" plain>Lorem</v-btn>
      <v-spacer></v-spacer>
      <ul>
        <v-btn
          class="btnHeader"
          color="#00E676"
          plain
          v-for="(item, i) in headerItens"
          :key="i"
          :to="item.link"
          >{{ item.title }}</v-btn
        >
      </ul>
    </header>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Headers extends Vue {
  private headerItens: Array<object> = [
    { title: "Cursos", link: "/cursos" },
    { title: "Feedback", link: "/feedback" },
  ];
}
</script>

<style scoped>
ul {
  list-style: none;
}
a {
  text-align: none;
}
.navHeader {
  max-width: 1400px;
  justify-content: space-between;
}
.btnHeader {
  font-size: 1.5rem;
}
.header {
}
</style>