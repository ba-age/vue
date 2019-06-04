<template>
  <div>
    <h1>Detail</h1>
    <p>{{ id }}</p>
    <p>{{ name }}</p>
    <p>{{ abc }}</p>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'abc'],
  mounted () {
    console.log(this.id);
    console.log(this.name);
  }
}
</script>

