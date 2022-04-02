
npm<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="bg-danger p-4" >  
        <div class="container pt-3">
            <div class="row pb-5">
              <div class="col-6">
              
              </div>
              <div class="col-6">
              
              </div>
            </div>
        </div>
    </div>
    <div id="about" class="bg-warning p-4" >
     
    </div>
    <div id="contact" class="bg-info p-4" >
            
    </div>
    <div id="footer" class="bg-primary p-4" >
            
    </div>
   
  </div>
  
</template>

<script>
export default {
    
}
</script>

<style scoped>
  #home-page {
    background-color: #912ed3;
    background: url('../assets/conference.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
  }
  #about {
    min-height: 10vh;
  }
  #contact {
    background-color: #ffffff;
  }
  #footer {
    background-color:  #050101;
  }

</style>
