<template>
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
    import UserItem from './UserItem.vue';

    export default {
        components: {
            UserItem,
        },
        inject: ['users'],
        methods: {
            confirmInput() {
                // via a function on a button; go to new page
                this.$router.push('/teams')
                    // this.$router.back();
                    // this.$router.forward();
            }
        }
    };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 2rem auto;
        max-width: 20rem;
        padding: 0;
    }
</style>