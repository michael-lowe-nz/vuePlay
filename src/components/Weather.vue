<template>
  <div class="weather">
    <h1>Weather Info</h1>
    <p>Condition: {{temp}}</p>
  </div>
</template>

<script>
export default {
  name: 'something',
  data () {
    return {
      temp: 'Quite Hot'
    }
  }
}
</script>
