<template>
  <!-- We need to add another instance out router-view for the nested route -->
  <router-view></router-view>
  <ul>
    <TeamsItem
      v-for="team in teams"
      :key="team.id"
      :id="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></TeamsItem>
  </ul>
</template>

<script>
    import TeamsItem from './TeamsItem.vue';

    export default {
        components: {
            TeamsItem,
        },
        inject: ['teams'],
    };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 2rem auto;
        max-width: 40rem;
        padding: 0;
    }
</style>