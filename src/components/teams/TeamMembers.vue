<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/team/t2">Go to team 2</router-link>
  </section>
</template>

<script>
    import UserItem from '../users/UserItem.vue';

    export default {
        // Injecting users and teams array from app.vue
        inject: ['users', 'teams'],
        props: ['teamId'],
        components: {
            UserItem
        },
        data() {
            return {
                teamName: '',
                members: []
            }
        },
        methods: {
            loadTeamMembers(teamId) {
                // Find the correct team: find all team id's check whether it is equal to the teamId in the route
                // "find" is a built in array method
                const selectedTeam = this.teams.find((team) => team.id === teamId);
                // Once we've found the team, we then need to find the members
                // teams.members hold the id's of members we find in users
                const members = selectedTeam.members;
                const selectedMembers = [];
                for (const member of members) {
                    const selectedUser = this.users.find((user) => user.id === member)
                    selectedMembers.push(selectedUser);
                }
                this.members = selectedMembers;
                this.teamName = selectedTeam.name;
            }
        },
        created() {
            this.loadTeamMembers(this.teamId);
        },
        watch: {
            teamId(newId) {
                this.loadTeamMembers(newId);
            }
        }
    };
</script>

<style scoped>
    section {
        margin: 2rem auto;
        max-width: 40rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        border-radius: 12px;
    }
    
    h2 {
        margin: 0.5rem 0;
    }
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>