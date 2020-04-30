<template>
  <header id="header">
    <nav class="gnavi">
      <ul class="gnavi__list">
        <li><a href="#profile" v-smooth-scroll="{ duration:1000, offset:-60 }">Profile</a></li>
        <li><a href="#work" v-smooth-scroll="{ duration:1000, offset:-60 }">work</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '../assets/sass/mixin';
#header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: rgba($color: #383838, $alpha: 0.5);
  padding: 0 5rem;
  top: 0;
  left: 0;
  z-index: 10;
  @include sp {
    display: none;
  }
}
.gnavi {
  height: 100%;
  &__list {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    >li {
      width: 100px;
      height: 100%;
      >a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 2rem;
        color: #fff;
        font-weight: 600;
      }
      +li {
        margin-left: 3rem;
      }
    }
  }
}
</style>
