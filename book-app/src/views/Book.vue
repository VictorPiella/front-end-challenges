<template>
  <div v-if="book" class="home">
      <div class="top-info">
        <div class="info">
          <h1 class="title">{{ book.title }} </h1>
          <p class="author">{{ book.author }}</p>
        </div>
        <div class="votes">
          <span>Upvoted {{ book.upvotes }} times </span>
          <button  v-bind:class="{ active: book.upvoted }">{{ book.upvoted? 'Upvoted' : 'Upvote' }}</button>
        </div>
      </div>

        <div class="cover"><img v-bind:src=book.cover v-bind:alt=book.title></div>

        <h2>Synopsis</h2>
        <p class="synopsis">{{ book.synopsis }}</p>
         
        <span class="rating">Rating: {{ book.rating }}/10</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Book',
  props:['slug'],
  data () {
    return {
      book: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/books/'+ this.slug)
      .then(response => (this.book = response.data));
  }
});
</script>
<style scoped lang="scss">
$primary-color: #ebc106;

.home {
  background-color: white;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow:0px 0px 8px #888888;
  overflow: auto;
  text-align: left;
  padding: 40px 30px;
}
.top-info{overflow: auto;;}

.info{
  float: left;
}
.votes{
  float: right;
}
h1{ 
  margin: 0;
  color: $primary-color;
}
.author{
  margin: 5px 0 20px;
  font-style: italic;
  color: grey;
}
.author, .votes{
  font-size: 0.8rem;
}

button{
  border: 2px solid $primary-color;
  border-radius: 6px;
  padding: 6px 10px;
  font-weight: bold;
  background-color: $primary-color;
  color: white;
  .active{
    background-color: transparent;
    color: $primary-color;
  }
}


.cover{
  margin: 10px auto;
  width: 50%;
  
  img{
    width: 100%;
    border-radius: 10px;
    box-shadow:0px 0px 2px #888888;
    clear: both;
  }
}

.rating{
  font-weight: bolder;;
}
</style>
