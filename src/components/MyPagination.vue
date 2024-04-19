<template>
  <div class="VuePagination" :class="props.theme.wrapper">
    <nav :class="props.theme.nav">
      <ul v-show="props.showPagination" :class="props.theme.list">
        <li v-if="true" :class="props.theme.firstPage" @click="props.setFirstPage">
          <button type="button" v-bind="props.firstPageProps">{{ props.texts.prevChunk }}</button>
        </li>

        <li :class="props.theme.prev" @click="props.setPrevPage">
          <button type="button" v-bind="props.prevProps">{{ props.texts.prevPage }}</button>
        </li>

        <li
          v-for="page in props.pages"
          :key="page"
          :class="{
            [props.theme.link]: true,
            
          }"
          v-on="props.pageEvents(page)"
        >
          <button type="button" v-bind="props.aProps" :class="{[props.theme.link]: true, 'selected': props.page === page}" class="number">{{ page }}</button>
        </li>

        <li :class="props.theme.next" @click="props.setNextPage">
          <button type="button" v-bind="props.nextProps">{{ props.texts.nextPage }}</button>
        </li>

        <li v-if="true" :class="props.theme.lastPage" @click="props.setLastPage">
          <button type="button" v-bind="props.lastPageProps">{{ props.texts.nextChunk }}</button>
        </li>
      </ul>

      <!-- <p v-show="props.hasRecords" :class='props.theme.count'>{{props.count}}</p> -->
    </nav>
  </div>
</template>

<script>
import { markRaw } from 'vue'
export default markRaw({
  name: 'MyPagination',
  props: ['props'],
})
</script>

<style scoped>
nav {
  display: flex !important;
  flex-direction: column !important;
  align-items: center;
}

ul {
  display: flex;
  justify-content: center;
  font-family: 'Helvetica Neue', sans-serif;
  /* font-weight: 200; */
}

li {
  margin: 1vw;
}
button.selected.page-link{
  color: var(--color-red);
  font-weight: 800;
} 
.number, button {
  color: var(--color-blue);
  font-size: 1.2em;
}
.number:hover, button:hover{
  color: var(--color-red);
}

@media (max-width: 600px){
  ul{
    font-size: 0.8rem;
  }
}
</style>
