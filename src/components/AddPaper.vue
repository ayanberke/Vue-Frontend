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

      <h1 class="welcome-msg"></h1>

      <div class="col-xl-8 col-lg-6 col-md-12 col-sm-12 col-12 mx-auto my-5">
        <div class="card">
          <div class="card-body table-responsive">
            <table id="paper-list" class="table">
              <thead class="thead-dark">
                <tr>
                  <td>Authors</td>
                  <td>Presenter</td>
                  <td>Title of Papers</td>
                  <td>Keywords</td>
                  <td># of Paper</td>
                </tr>
              </thead>

              <tr>
                <td>
                  <input
                    method="post"
                    methodname="authorname"
                    id="author-name"
                    placeholder="Enter Names and Surnames"
                    v-model="authorName"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Enter Name and Surname"
                    id="presenter-name"
                    name="presentername"
                    v-model="presenterName"
                    required
                  />
                </td>
                <td id="descr">
                  <input
                    type="text"
                    placeholder="Enter a Title"
                    id="title-name"
                    name="titlename"
                    v-model="titleName"
                    required
                  />
                </td>

                <td>
                  <select name="keyword-names" id="keyword-id" v-model="keyword">
                    <option name="Select Keyword" value="Select Keyword">
                      Select Keyword
                    </option>
                    <option name="Robotics" value="Robotics">Robotics</option>
                    <option
                      name="Artifical Intelligence"
                      value="Artifical Intelligence"
                    >
                      Artifical Intelligence
                    </option>
                  </select>
                </td>
              </tr>
              <tbody id="paper-list-body"></tbody>
              <tbody class="thead-dark">
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>
                    <div id="total-cost">
                      <p>0</p>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <button id="add-paper" class="btn offset-lg-6btn btn-blue mb-3" @click="createPost"
            >
              Add Paper
            </button>
            <br />
          </div>

          <span id="result"></span>

          <form method="post">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <button
                  style="width: 100px"
                  type="submit"
                  id="sbm-btn"
                  class="btn-sm col-md-3 offset-md-3btn btn-blue mb-3"
                  @click="goToConstraints"
                >
                  Define Constraints
                </button>
                <input type="hidden" id="str" name="str" value="" />
              </div>
            </div>
          </form>
        </div>
      </div>

      <section class="search-sec">
        <div class="container">
          <form action="#" method="post" novalidate="novalidate">
            <div class="row" v-for="(Papers, index) in Papers" :key="index">
              <div class="col-lg-12">
                <div class="row">
                  <!-- eski kısımları sildim eklediğimi dışarıya ekledim-B -->
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer class="bg-light text-center text-lg-start">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Information</h5>
              <p>
                This is a web-based application that will schedule conferences
                using optimization. The application finds the most suitable
                conference program by optimization. Users schedule conferences
                and can view the scheduling result as a table.
              </p>
            </div>
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Mission</h5>

              <p>
                The purpose of the system is to solve problems that organizers
                face when planning their conferences more quickly and
                conveniently. The organizers will collect the information from
                the presenters and plan the day, time-slots and rooms of the
                conference with the help of the system. The possibility of
                conflict and loss of time will be prevented.
              </p>
            </div>
          </div>
        </div>
        <div
          class="text-center p-3"
          style="background-color: rgba(0, 0, 0, 0.2)"
        >
          © 2022 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">confy.com</a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
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
    
    createPost(){
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
        ).then(response=>
        {
        console.log(response);
    }).
    catch(error => {
    console.log(error.response);

    })
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
    },

    goToConstraints() {
      this.$router.push("/constraints");
    },
  },
};

let counter = 0;
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
});
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