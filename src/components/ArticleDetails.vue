
<template>
  <div class="edit-form" >
    <form>
        <div class="form-group" >
            <label for="title">Titre</label>
            <input type="text" v-model="currentArticle.title" class="form-control" id="title"/>
            </div>
          <div class="form-group">
           <label for="description">Description</label>
              <textarea class="form-control" rows="3" v-model="currentArticle.description"></textarea>
          </div>

        <div class="form-group">
           <label ><strong>Status: {{ currentArticle.published ?'publié':"enattente"}}</strong></label>
         </div>
      </form>

      <button class="btn btn-outline-dark"  @click="updatePublished(false) " v-if="currentArticle.published ">Dépublier</button>
  <button class="btn btn-info mx-1" @click="updatePublished(true) " v-else >Publier</button>
   <button class="btn btn-danger mx-1" @click="removeArticle">Supprimer</button>
      <button type="submit" class="btn btn-success mx-1" @click="updateArticle">Metre à jour</button>
  <p>{{ message }}</p>
</div>
<div>
  <p>Cliquez sur un article Por Favor</p>
  </div>

	</template>
   
<script>
  import ArticlesDataService from '../services/ArticlesDataService';
  export default {
  name : "article-un",
  props: ["article"],
  data(){
    return{
    currentArticle : null,
    message : ""
    }
  },
  watch : {
    article : function (article){
      this.currentArticle = {...article};
      this.message = ""

    }
  
},
methods :{
  updatePublished( status){
    ArticlesDataService.update(this.currentArticle.key , {published : status,})
    .then(() => {
      this.currentArticle.published =status;
      this.message = "le status à bien été MAJ";
    }).catch(e => console.log(e))
  },
  updateArticle(){
    const data = {
      title : this.currentArticle.title,
      description  : this.currentArticle.description
    }
    ArticlesDataService.update(this.currentArticle.key ,data)
    .then(() => {
      this.message = "le status à bien été MAJ"
    }).catch(e => console.log(e))
  },
  removeArticle(){
      ArticlesDataService.delete(this.currentArticle.key)
      .then(() => {
      this.$emit(this.refreshList());
      }).catch( e => console.log(e))
    }
  },
  mounted(){
    this.message = "",
    this.currentArticle = {...this.article}
  }
}





</script>