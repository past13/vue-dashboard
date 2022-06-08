<template>
    <div class="main">
        <div>{{ testZinute }}</div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Project extends Vue {
    testZinute = "Test";
}
</script>