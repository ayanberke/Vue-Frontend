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
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bvetur.config.jss-target="#navbarCollapse">
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
            <table id="conference-list" class="table">

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
                  <input method="post" methodname="sizes" id="author-id" placeholder="Enter Names and Surnames"/>
                </td>
                <td>
                  <input type="text" placeholder="Enter Name and Surname" id="presenter-id" name="presenter" required/>
                </td>
                <td id="descr">
                  <input type="text" placeholder="Enter a Title" id="tittlepapers" name="tittlepapers" required/>
                </td>

                <td>
                  <select name="keyword-id" id="keyword-id">
                    <option name="Select Keyword" value="Select Keyword">Select Keyword</option>
                    <option name="Robot Programming" value="Robot Programming">Robot Programming</option>
                    <option name="Artifical Intelligence" value="Artifical Intelligence"> Artifical Intelligence</option>
                    <option name="Virtual Reality" value="Virtual Reality">Virtual Reality</option>
                    <option name="Mixed Reality" value="Mixed Reality">Mixed Reality</option>
                    <option name="Human-Robot Interaction(HRI)" value="Human-Robot Interaction(HRI)">Human-Robot Interaction(HRI)</option>
                    <option name="Augmented Reality" value="MAugmented Reality">Augmented Reality</option>
                    <option name="Gaze Tracking" value="Gaze Tracking">Gaze Tracking</option>
                  </select>
                </td>
              </tr>
              <tbody id="coffe-list-body"></tbody>
              <tbody class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>

                  <td>
                    <div id="numberofpaper"><p>0</p></div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div class="addpaper" id="addpaper">
              <button id="add-paper" class="btn btn-warning wrn-btn btn-lg">Add Paper </button><br /> </div>
          </div>

          <span id="result"></span>

          <form method="post">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3"></div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                <div class="defineconst" id="schedule">
                <button type="submit" id="sbm-btn" class="btn btn-warning wrn-btn btn-lg" @click="goToConstraints">Next</button> </div>
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
export default {
  methods: {
    remove_element(id) {
      var rtn = 0;

      docCounter -= 1;

      return rtn;
    },
    doThing(currentButton) {
      console.log("ID IS" + currentButton);
      var rmv = document.getElementById("coffe" + currentButton);
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

  document.getElementById("add-coffe").addEventListener("click", () => {
    var coffeid = "coffe" + counter;
    var sizeid = "size" + counter;
    var amount = "amount" + counter;
    var cost = "cost" + counter;
    let coffeNameVal = document.getElementById("coffe-id").value;
    let sizeVal = document.getElementById("size-id").value;
    let amountVal = document.getElementById("amount-id").value;
    let keywordVal = document.getElementById("keyword-id").value;

    var coffe_cost = 0;
    var CoffeId = 0;
    var description = "";

    document.getElementById("coffe-list-body").innerHTML += `

                    <tr id=${coffeid}>
                        <td>
                        <p>${coffeNameVal}</p>
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
.addpaper{
  height: 2.2rem;
  position: relative;
  top: -0.5rem;
  left: -120px;

}
.defineconst {
  height: 2.2rem;
  position: relative;
  top: -3.7rem;
  right: 250px;
}
.card-body{
  margin: 0;
  height: 100%;
  overflow: hidden;
  display: inline-block;
  width:fit-content;
  height:fit-content;
}

.welcome-msg {
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  margin: 150px 100px;
  color: rgb(232, 156, 16);
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgb(7, 7, 5), 0 0 25px rgb(15, 14, 10),
    0 0 5px rgb(16, 15, 12);
  font-size: 50px;
}
textarea,select {
  border-radius: 0.5rem;
  border-collapse: collapse;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  height:2rem;
  width: 16rem;
  justify-content: center;
  display: flex;
  font-size: 1rem;

}

.btn {
  background-color: rgb(232, 156, 16);
  color: #fff;
  border-radius: 2px;
  overflow: hidden;
  display: inline-block;
  width:fit-content;
  height:fit-content;
}

.btn:hover {
  background-color: rgb(232, 156, 16);
  color: #ffffff;
  cursor: pointer;
}
</style>

