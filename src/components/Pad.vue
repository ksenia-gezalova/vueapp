<template>
    <div class="pad">
        <input type="text" class="pad__title" placeholder="Untitled note" v-model="note.title" v-on:keydown="save">
        <textarea class="pad__text" placeholder="Start writing.." v-model="note.body" v-on:keydown="save">
        </textarea>

        <footer class="pad__footer">
            <ul class="pad__footer-items">
                <li class="pad__footer-item">Words: {{ wordCount }}</li>
                <li class="pad__footer-item pad__footer-item--right">Last saved: {{ lastSaved }}</li>
            </ul>
        </footer>
    </div>
</template>


<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'note',
        'lastSaved',
        'wordCount'
      ])
    },
    methods: {
      ...mapActions([
        'saveNote',
        'startSaveTimeout'
      ]),
      save() {
        if (!this.note.id) {
          this.saveNote()
          return
        }

        this.startSaveTimeout()
      }
    }
  }

</script>

<style lang="scss" scoped>
  .pad {
    flex: 4;
    display: flex;
    flex-direction: column;

    &__title {
      width: 100%;
      border: none;
      font: inherit;
      font-size: 1.6em;
      outline: none;
      padding: 20px;
      padding-left: 30px;
      padding-top: 25px;
    }

    &__text {
      width: 100%;
      margin: 0;
      flex: 1;
      padding: 20px 30px;
      border: 0;
      outline: none;
      font: inherit;
      resize: none;
      line-height: 1.5;

      -webkit-mask-image: linear-gradient( to bottom,
      transparent 0%,
      #fff 5%,
      #fff 90%,
      transparent 100%)
    }

    &__footer {
      padding: 20px 30px;

      &-items {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      &-item {
        flex: 1;
        font-size: .9em;

        &--right {
          margin-left: auto;
          text-align: right;
        }
      }
    }
  }

</style>
