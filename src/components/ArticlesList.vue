<template>
  <div class="container list row">
      <h1>Articles LIST</h1>
      <div class="col-md-6">
          <ul class="list-group">
              <li  v-for="(unArticle, index) in article" :key = "unArticle.key" @click ="setActiveArticle(index , unArticle)">
              {{ unArticle.title }}</li>
          </ul>
          <button class=" btn btn-sm btn-danger" @click="removeAllArticles">Tout Suppr.</button>
      </div>
      <div class="col-md-6">
        <div v-if="currentArticle">
            <article-details :article="currentArticle" @refreshList="refreshList"></article-details>
        </div>
          <div v-else>
              <p>Veuillez selectionner un article.</p>
          </div>
      </div>
  </div>
  </template>
   


<script>
import ArticlesDataService from '@/services/ArticlesDataService';
import ArticleDetails from './ArticleDetails.vue'

export default {
  name : "article-list",
  component :{ArticleDetails},
  data(){
    return{
      article :[],
      currentArticle : null,
      currentIndex: -1
    }
  },
  methods:{
    onDataChange(items){
      const _articles = [];
      items.forEach((item) => {
       let key = item.key;
       let data = item.val();
        _articles.push( {
            key : key ,
            title : data.title,
            description : data.description,
            published : data.published 
          })
        
      });
      this.article = _articles;
    },
    refreshList(){
      this.currentArticle = null,
      this.currentIndex = -1
    },
    setActiveArticle(article , index){
      this.currentArticle = article;
      this.currentIndex = index;
    },
    removeAllArticles(){
      ArticlesDataService.deleteAll()
      .then(() => {
        this.refreshList();
      }).catch( e => console.log(e))
    }
  },
  mounted(){
    ArticlesDataService.getAll().on( "value" , this.onDataChange);

  },
  beforeUnmount() {
    ArticlesDataService.getAll().off("value", this.onDataChange)

  },
}

</script>
  