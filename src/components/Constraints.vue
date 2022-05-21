<template>
  <div>
    <div id="home-page">
      <section class="search-sec">
        <div class="container">
          <form action="#" method="post" novalidate="novalidate">
            <div class="row">
              <div class="col-lg-12">
                <div class="row">
                  <b-card no-body>
                    <b-tabs v-model="tabIndex" card>
                      <b-tab title="DAY 1" :title-link-class="linkClass(0)">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="parallelsessioncount">
                          <textarea placeholder=" Enter Parallel Session Count " v-model="parallelsessionCount"></textarea>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>Start Time</b> </label>
                          <input type="time" name="appt" min="00:00" max="23:59" required  id="stime"  v-model="sessionstarttime"></div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>End Time</b> </label>
                          <input type=time placeholder="Session End Time " id="etime" v-model="sessionendtime">
                        </div>
                        <div class="buttonsave" id="save">
                          <button type="button" class="btn btn-warning wrn-btn btn-lg" > Save </button>
                        </div>
                      </b-tab>
                      <b-tab title="DAY 2" :title-link-class="linkClass(1)">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="parallelsessioncount2">
                          <textarea placeholder=" Enter Parallel Session Count " v-model="parallelsessionCount"></textarea>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>Start Time</b> </label>
                          <input type="time" name="appt" min="00:00" max="23:59" required  id="stime2"  v-model="sessionstarttime"></div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>End Time</b> </label>
                          <input type=time placeholder="Session End Time " id="etime2" v-model="sessionendtime">
                        </div>
                        <div class="buttonsave" id="save2">
                          <button type="button" class="btn btn-warning wrn-btn btn-lg" > Save </button>
                        </div>
                      </b-tab>
                      <b-tab title="DAY 3" :title-link-class="linkClass(2)">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="parallelsessioncount3">
                          <textarea placeholder=" Enter Parallel Session Count " v-model="parallelsessionCount"></textarea>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>Start Time</b> </label>
                          <input type="time" name="appt" min="00:00" max="23:59" required  id="stime3"  v-model="sessionstarttime"></div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>End Time</b> </label>
                          <input type=time placeholder="Session End Time " id="etime3" v-model="sessionendtime">
                        </div>
                        <div class="buttonsave" id="save3">
                          <button type="button" class="btn btn-warning wrn-btn btn-lg" > Save </button>
                        </div>
                      </b-tab>
                      <b-tab title="DAY 4" :title-link-class="linkClass(3)">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="parallelsessioncount4">
                          <textarea placeholder=" Enter Parallel Session Count " v-model="parallelsessionCount"></textarea>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>Start Time</b> </label>
                          <input type="time" name="appt" min="00:00" max="23:59" required  id="stime4"  v-model="sessionstarttime"></div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>End Time</b> </label>
                          <input type=time placeholder="Session End Time " id="etime4" v-model="sessionendtime">
                        </div>
                        <div class="buttonsave" id="save4">
                          <button type="button" class="btn btn-warning wrn-btn btn-lg" > Save </button>
                        </div>
                      </b-tab>
                      <b-tab title="DAY 5" :title-link-class="linkClass(4)">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" id="parallelsessioncount5">
                          <textarea placeholder=" Enter Parallel Session Count " v-model="parallelsessionCount"></textarea>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>Start Time</b> </label>
                          <input type="time" name="appt" min="00:00" max="23:59" required  id="stime5"  v-model="sessionstarttime"></div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0" >
                          <label> <b>End Time</b> </label>
                          <input type=time placeholder="Session End Time " id="etime5" v-model="sessionendtime">
                        </div>
                        <div class="buttonsave" id="save5">
                          <button type="button" class="btn btn-warning wrn-btn btn-lg" > Save </button>
                        </div>
                      </b-tab>
                    </b-tabs>
                  </b-card>
                </div>
              </div>
            </div>
          </form>
        </div>

      </section>
      <div class="showlist" id="showlist">
        <b-button @click="modalShow = !modalShow">Show List</b-button>

        <b-modal v-model="modalShow"> LIST </b-modal>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabIndex: 0,
      modalShow: false
    }
  },
  methods: {
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  }
}

</script>


<style scoped>
#home-page {
  background: url("../assets/conference.jpg") no-repeat center center;
  -moz-background-size: 100% 100%;           /* Firefox 3.6 */
  -o-background-size: 100% 100%;           /* Opera 9.5 */
  -webkit-background-size: 100% 100%;           /* Safari 3.0, Chrome */
  background-size: 100% 100%;
  min-height: 100vh;
  opacity: 0.9;
}

.buttonsave{
  height: 3rem;
  width: 3rem;
  position: relative;
  top: -0.6rem;
  left: 10px
}
.showlist{
  height: 3rem;
  position: relative;
  top: -3rem;
  left: 10px;
}

.search-sec div {
  margin: 1rem;
  position:relative;
  
}
select{
  border-radius: 0.5rem;
  margin: 0.3rem;
  padding: 0.3rem;
  width: 16.2rem;
  height:2.1rem;
  display:flex;
  position: relative;
  top: -1.2rem;
  left: -0.1rem;
}
textarea{
  border-radius: 0.5rem;
  border-collapse: collapse;
  resize: none;
  margin: -0.5rem;
  padding: 0.3rem;
  width: 16rem;
  height:2rem;
  justify-content:center;
  display:flex;
  font-size: 1rem;

}
input[type=time]{
  border-radius: 0.5rem;
  resize: none;
  margin: 0.5rem;
  padding: 0.3rem;
  width: 9.2rem;
  height:2rem;
  justify-content:center;
  font-size: 1rem;
}
</style>
