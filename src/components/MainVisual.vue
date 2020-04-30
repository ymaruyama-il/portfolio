<template>
  <div id="mv" :style="{ 'background-image':' url(' + bgImgSrc + ')'}">
    <div id="main" class="has-text-centered">
      <h1 class="title">PORTFOLIO</h1>
      <a href="https://bulma.io" target="_blank">
        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
      </a>
      <div class="scroll">
        <a class="scroll__icon" href="#profile" v-smooth-scroll="{ duration: 1000 }"><span></span><span></span><span></span>Scroll</a>
      </div>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bgImgSrc: require('@/assets/images/bgimage.jpg')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/mixin';
#mv {
  position: relative;
  background-color: rgb(0, 5, 75);
  background-size: cover;
  height: 100vh;
  min-height: 600px;
  @include sp {
    height:  spn(1200);
    min-height: auto;
  }
}

#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.title {
  font-size: 5rem!important;
  color: #fff!important;
  letter-spacing: 0.1em;
  text-shadow: 5px 5px 0px rgba($color: #000000, $alpha: 0.65);
  font-family: 'Dosis', sans-serif;
  @include sp {
    font-size: spn(50);
  }
}

.scroll {
  margin-top: 10rem;
  @include sp {
    margin-top: spn(100);
  }
  &__icon {
    display: inline-block;
    position: relative;
    padding-top: 80px;
    font-size: 1.4rem;
    color: #ffffff;
    > span {
      position: absolute;
      top: 0;
      left: 50%;
      width: 24px;
      height: 24px;
      margin-left: -12px;
      border-left: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transform: rotate(-45deg);
      animation: sdb 2s infinite;
      opacity: 0;
      box-sizing: border-box;
      &:nth-of-type(1) {
        animation-delay: 0s;
      }
      &:nth-of-type(2) {
        top: 16px;
        animation-delay: .15s;
      }
      &:nth-of-type(3) {
        top: 32px;
        animation-delay: .3s;
      }
    }
    &:hover {
      transition: 0.5s;
      color: #c1c1c1;
    }
  }
}

@-webkit-keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

#particles-js {
  height: 100vh;
}
</style>
