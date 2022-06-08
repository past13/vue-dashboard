<template>
    <div class="main">
        <div>{{ test }}</div>
    </div>
</template>
<script lang="ts">
@Component
export default class Project extends Vue {
    test = "Test";
}
</script>