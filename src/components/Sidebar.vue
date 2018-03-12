<template>
    <div class="sidebar">
      <div v-if="notes.length">
        <note v-for="note in notes" :note="note"></note>
      </div>
        <div class="sidebar__content" v-else>No notes here now. Don't be shy, please write something..
        </div>
    </div>
</template>


<script>
  import Note from './Note'
  import {
    mapGetters
  } from 'vuex'

  export default {
    components: {
      Note
    },
    computed: {
      ...mapGetters([
        'notes'
      ])
    }
  }

</script>

<style lang="scss" scoped>
  .sidebar {
    font: inherit;
    background-color: #f9f9f9;
    flex: 1;
    height: 100%;
    max-width: 28%;
    border-right: 2px solid #eeeeee; //overflow-y: scroll;
    &__content {
      padding: 30px;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }

</style>
