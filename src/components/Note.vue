<template>
    <div class="note">
       <a href="#" class="note__delete" @click.prevent="deleteNote(note.id)">
           <span class="note__delete-icon">&times;</span>
       </a>
        <div class="note__content">
            <a href="#" class="note__title" @click.prevent="openNote(note)"><span v-if="note.title">{{ note.title }}</span>
            <span v-else>Untitled note</span>
            </a>
            <p class="note__body"><span v-if="note.body">{{ note.body }}</span>
            <span v-else>Empty</span>
            </p>
        </div>
    </div>
</template>

<script>
import {
  mapActions
} from 'vuex'

export default {
  props: [
    'note'
  ],
  methods: {
    ...mapActions([
      'openNote',
      'deleteNote'
    ])
  }

}

</script>

<style lang="scss" scoped>
  .note {
    display: flex;
    color: inherit;
    text-decoration: none;
    border-bottom: 2px solid #eee;
    opacity: .3;
    flex-direction: row;
    max-width: 100%;

    &:hover {
      opacity: 1;

      .note__delete {
        margin-left: 0;
      }
    }

    &__content {
      padding: 30px;
      flex: 2;
      overflow: hidden;
    }

    &__title {
      display: block;
      margin: 0;
      color: inherit;
      text-decoration: none;
      font-size: 1em;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        text-decoration: underline;
      }
    }

    &__body {
      font-size: .9em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0;
    }

    &__delete {
      position: relative;
      width: 50px;
      background: #cc4466;
      color: #fff;
      display: block;
      min-height: 100%;
      margin-left: -50px;
      transition: margin-left 400ms ease-in-out;

      &-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 1.5em;
        transform: translateX(-50%) translateY(-50%);
        font-weight: 600;
      }
    }
  }

</style>
