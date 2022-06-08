<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Project />
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <div><input type = "text" v-model="testValue"><br/>  </div>
    <q-tooltip>2020</q-tooltip>
  </div>
</template>

<script lang="ts">
import Project from "./Project.vue";
import { QTooltip } from "quasar";

@Component({
  components: { Project, QTooltip }
})
export default class HelloWorld extends Vue {
  @Prop() msg!: string;
  testValue = 0;

  @Watch("testValue")
  testFunction(val: number) {     
    this.testValue = val;
  }  

  get changeValue() {
    return 123;
  }
}
</script>

<style scoped>
  .hello {
    background-color: DodgerBlue;
  }
</style>
