<template>
  <div id="profile">
    <div class="profile">
      <h2 class="profile__title">Profile</h2>
      <p class="profile__initial">Y.M</p>
      <section class="profile__section">
        <h3 class="profile__heading">Language</h3>
        <ul class="profile__list">
          <li>HTML5（ejs/pug）</li>
          <li>CSS3（Sass/less/Stylus）</li>
          <li>javascript</li>
          <li>jQuery</li>
        </ul>
      </section>
      <section class="profile__section">
        <h3 class="profile__heading">Tools</h3>
        <ul class="profile__list">
          <li>Visual Studio Code</li>
          <li>gulp</li>
          <li>webpack</li>
          <li>Vue.js</li>
          <li>Nuxt.js</li>
          <li>git</li>
          <li>Sourcetree</li>
          <li>Backlog</li>
          <li>photoshop CC</li>
          <li>illustrator CC</li>
          <li>Adebe XD</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss">
  @import '../assets/sass/mixin';
  .profile {
    max-width: 1000px;
    margin: 0 auto;
    padding: 4rem 0 5rem;
    @include sp {
      padding: spn(40) spn(60) spn(60);
    }
    &__title {
      font-size: 4rem;
      font-weight: 600;
      margin-bottom: 3rem;
      @include sp {
        font-size: spn(50);
        margin-bottom: spn(40);
      }
    }
    &__initial {
      font-size: 2.4rem;
      margin-bottom: 2rem;
      @include sp {
        font-size: spn(40);
        margin-bottom: spn(40);
      }
    }
    &__section {
      margin-bottom: 2rem;
      @include sp {
        margin-bottom: spn(40);
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    &__heading {
      font-size: 2rem;
      @include sp {
        font-size: spn(36);
        margin-bottom: spn(10);
      }
    }
    &__list {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      @include sp {
        flex-wrap: wrap;
      }
      >li {
        &::after {
          content: '/';
          display: inline-block;
          margin: 0 0.5em;
        }
        &:last-child {
          &::after {
            content: none;
          }
        }
      }
    }
  }
</style>
