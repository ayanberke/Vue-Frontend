<template>
  <div>
    <div id="home-page">
      <nav
        id="nav-bar"
        class="navbar navbar-expand-lg sticky-top navbar-light bg-white"
      >
        <div class="container">
          <a href="#" class="navbar-brand"
            ><img id="icon" src="../assets/logo.png"
          /></a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bvetur.config.jss-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link active"> <b>Home</b> </a>
              <a href="#" class="nav-item nav-link"> <b>About Us</b> </a>
            </div>
          </div>
        </div>
      </nav>

      <h1 class="Paperlist-msg">
        <h1>Paper List</h1>
      </h1>

    <div class="container">

    <table class="table table-light ">
  <thead>
    <tr>
   
      <th scope="col">Authors</th>
      <th scope="col">Presenter</th>
      <th scope="col">Title</th>
      <th scope="col">Keywords</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(paper,index) in papers" :key="index">
      <td v-text="paper.author"></td>
      <td v-text="paper.presenter"></td>
      <td v-text="paper.title"></td>
      <td v-text="paper.keyword"></td>
    </tr>
    

  </tbody>
</table>
       <div class="buttonadd" id="add">
                    <button type="button" class="btn btn-secondary btn-lg" @click="goToAddPaperPage" > Add Paper </button>
                  </div>

    </div>



    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
   
    data(){

return{
    papers:[]
}
    },
  methods: {
    getPapers(){
      axios.get('http://localhost:8081/paper/getAll'
  )
  .then(response => {
      this.papers=response.data;
      
    }
    )
      

    },

    goToConstraints() {
      this.$router.push("/constraints");
    },
    goToAddPaperPage(){
      this.$router.push("/addpaper");
    },
  },
   mounted(){
      this.getPapers()
    },
};

</script>
<style scoped>
#home-page {
  background: url("../assets/conference.jpg") no-repeat center center;
  -moz-background-size: 100% 100%; /* Firefox 3.6 */
  -o-background-size: 100% 100%; /* Opera 9.5 */
  -webkit-background-size: 100% 100%; /* Safari 3.0, Chrome */
  background-size: 100% 100%;
  min-height: 100vh;
  opacity: 0.9;
}

#nav-bar {
  opacity: 0.9;
}

#icon {
  margin-left: 3px;
  display: block;
  max-width: 110px;
  opacity: 1;
}

.search-sec div {
  margin: 1rem;
  position: relative;
  display: inline-block;
}
textarea,
select {
  border-radius: 0.5rem;
  border-collapse: collapse;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 16rem;
  justify-content: center;
  display: flex;
  font-size: 1rem;
}
.Paperlist-msg {
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
  font-family: 'Permanent Marker', cursive;  margin: 150px 100px;
  color: rgb(246, 246, 246);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(7, 7, 5), 0 0 25px rgb(15, 14, 10),
    0 0 5px rgb(16, 15, 12);
  font-size: 50px;
}
</style>
