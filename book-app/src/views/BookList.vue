<template>
  <div class="about">
      <h1>Top books of all time</h1>
      <div v-for="(book, index) in books" :key="book.slug" class="book-container">
        <router-link :to="'/book/' + book.slug">
          <div class="book">
            <div class="info">
              <h2 class="title">{{ index + 1 }}. {{ book.title }} </h2><span class="rating">({{ book.rating }}/10)</span>
              <p class="author">{{ book.author }}</p>
              <p class="synopsis" >{{book.synopsis.slice(0, 200 )}}...</p>
              <button  v-bind:class="{ active: book.upvoted }">{{ book.upvoted? 'Upvoted' : 'Upvote' }}</button>
              <span class="votes"> Upvoted {{ book.upvotes }} times</span>
            </div>
            <div class="cover"><img v-bind:src=book.cover v-bind:alt=book.title></div>
          </div>
        </router-link >
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';


export default Vue.extend({
  name: 'BookList',
  data () {
    return {
      books: null
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/books')
      .then(response => (this.books = response.data.books))
  }, 
});
</script>
<style scoped lang="scss">

$primary-color: #ebc106;
$light-color: #fafaf3;

.about{
    background-color: white;
    max-width: 1000px;
    margin: 0 auto;
    box-shadow:0px 0px 8px #888888;
    overflow: auto;
}
a{
  text-decoration: none;
  color: black;
}
.book{
  text-align: left;
  padding: 20px 30px;
  display: flex;
}
.book-container:nth-child(2n - 1) { 
  background-color: $light-color;
}
.info{
 margin-right: 20px;
}
h1{ 
  background-color: $light-color;
  padding: 20px;
  margin: 0;
}
h1, h2{
  color: $primary-color;
}
h2{
 display: inline;
}
.author{
  margin-bottom: 20px;
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
}




.active{
  background-color: transparent;
  color: $primary-color;
}

.cover img{
    width: 130px;
    margin: 10px auto;
    border-radius: 10px;
    box-shadow:0px 0px 2px #888888;
    clear: both;
}

</style>
