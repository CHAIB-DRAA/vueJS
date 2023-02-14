<template>
    <div class="hello">
        <h1>Add Article</h1>
    </div>

    <form >
      <input v-model="article.title" type="text"  > <br><br>
      <textarea v-model="article.description" id="" cols="30" rows="10"></textarea> <br>
      <button @click="saveArticle"> Ajouter</button>
    </form>
  </template>
  
  <script>
import ArticleDataService from '../services/ArticlesDataService';
export default {
  name : "add-article",
  data(){
    return{
      article :{
        title:"",
        description :"",
        published : false
      },
      submited: false
    }
  },


  methods: {
    saveArticle(){
       const data = {
        title : this.article.title,
        description: this.article.description,
        published : false
       };
       ArticleDataService.create(data).then( ()=>{
        this.submited = true;
       }) .catch( error => console.log(error));

    }
  },
  newarticle(){
    this.submited = false;
    this.article = {
      title : "",
      description:"",
      published : false
    }
  }
}

</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h1 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
    
  }
  a {
    color: #42b983;
  }
  </style>
  