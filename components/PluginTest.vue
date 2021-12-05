<template>
  <div>{{ data }}</div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      "data": undefined
    }
  },
  mounted() {
    this.data = this.$sdk.thisIsATestMethodThatShouldBeRecognized();
  }
}
</script>

<style scoped>

</style>
