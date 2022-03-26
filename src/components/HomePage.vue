<template>
    <div class="container-fluid m-0 p-0">
        <div id="home-page" class="bg-danger p-4" >
            <p>asdasdsa</p>
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
    data() {
        
    },
}
</script>

<style scoped>
  #home-page {
    background-color: #290442;
    background: url('../assets/conference.jpg') no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #about {
    min-height: 40vh;
  }
  #iphone-img {
    max-height: 80vh;
  }
  #contact {
    background-color: #57AEAF;
  }
  #footer {
    background-color: #252223;
  }

</style>
