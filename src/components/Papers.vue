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
     
    <table class="table table-dark ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Paper Title</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Learning robot motor skills with mixed reality </td>
      <td>17.05.2022</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Towards Foveated Rendering For Immersive Remote Telerobotics </td>
      <td>17.05.2022</td>
     
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
    authorName:[],
    presenterName:null,
    titleName:null,
    keyword:null,
}
    },
  methods: {
    
    /*createPost(){
        axios.post(

            '/paper/create',
            {

                
  "authors": [
      {
          "name": this.authorName,
          "surname": ""
      },
      
  ],
  "constraint":null,
  "presenter":this.presenterName,
  "title":this.titleName,
  "keyword":this.keyword,


            },
          ],
          constraint: null,
          presenter: this.presenterName,
          title: this.titleName,
          keyword: this.keyword,
        })
        .then((response) => {
          console.log(response);
        });
    },

    remove_element(id) {
      var rtn = 0;

      docCounter -= 1;

      return rtn;
    },
    doThing(currentButton) {
      console.log("ID IS" + currentButton);
      var rmv = document.getElementById("authorname" + currentButton);
      rmv.parentNode.removeChild(rmv);
      remove_element(currentButton);
      printCost();
    },*/

    goToConstraints() {
      this.$router.push("/constraints");
    },
    goToAddPaperPage(){
      this.$router.push("/addpaper");
    },
  },
};

/*let counter = 0;
let total_cost = [];
let docCounter = 0;

document.addEventListener("DOMContentLoaded", function () {
  function totalCostFunc() {
    return docCounter;
  }

  function printCost() {
    var x = totalCostFunc();
    document.getElementById("total-cost").innerHTML = `<p>${x}</p>`;
  }

  document.getElementById("add-paper").addEventListener("click", () => {
    var authorid = "authorname" + counter;
    var presenterid = "presentername" + counter;
    var titleid = "titlename" + counter;
    var cost = "cost" + counter;
    let authornameval = document.getElementById("author-name").value;
    let sizeVal = document.getElementById("presenter-name").value;
    let amountVal = document.getElementById("title-name").value;
    let keywordVal = document.getElementById("keyword-id").value;

    var coffe_cost = 0;
    var CoffeId = 0;
    var description = "";

    document.getElementById("paper-list-body").innerHTML += `
 
                    <tr id=${authorid}>
                        <td>
                        <p>${authornameval}</p>
                        </td>
                        <td>
                        <p>${sizeVal}</p>
                        </td>
                        <td>
                        <p>${amountVal}</p>
                        </td>
                        <td>
                        <p >${keywordVal}</p>
                        </td>
                        <td>
                            <p></p>
 
                        </td>
                        <td id=${cost}>
                        </td>
                     </tr>`;
    //document.getElementById(cost).innerHTML += "<button  class='btn btn-blue btn-sm   ' style=' width: 50px; height: 30px;'  type = 'button'  id = '" + counter +"' v-on:click=\"dothing > - </button> ";
    //document.getElementById(counter).addEventListener("click",doThing( document.getElementById(counter)),false)
    //document.getElementById(cost).innerHTML += "<input  class='btn btn-blue btn-sm   ' style=' width: 50px; height: 30px;'  type = 'button' value = '-'  id = '" + counter + "' onclick = doThing(this)>";

    document.getElementById(cost).innerHTML +=
      "<input  class='btn btn-blue btn-sm   ' style=' width: 50px; height: 30px;'  type = 'button' value = '-'  id = '" +
      counter +
      "' onclick = doThing(" +
      counter +
      ")>";

    counter += 1;
    docCounter += 1;
    printCost();
  });
});*/
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
.abutton {
  height: 2rem;
  position: relative;
  top: -1rem;
  left: -100px;
}
.nbutton {
  height: 2rem;
  position: relative;
  top: -5rem;
  right: -80px;
}

.welcome-msg {
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  margin: 150px 100px;
  color: rgb(232, 164, 16);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(7, 7, 5), 0 0 25px rgb(15, 14, 10),
    0 0 5px rgb(16, 15, 12);
  font-size: 50px;
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

.btn-blue {
  background-color: #1a237e;
  width: 150px;
  color: #fff;
  border-radius: 2px;
}

.btn-blue:hover {
  background-color: #1a23de;
  color: #fff;

  cursor: pointer;
}
</style>