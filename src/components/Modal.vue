<template>
  <div class="modal-wapper">
    <div class="modal">
      <div class="modal-background" @click="$emit('close')"></div>
      <div class="modal-content portfolio">
        <figure class="portfolio__img"><img :src="val.img" :alt="val.title"></figure>
        <section class="portfolio__section">
          <h2 class="portfolio__title">{{ val.title }}</h2>
          <section class="portfolio__sectionInner">
            <h3 class="portfolio__heading">{{ val.pageTitle }}</h3>
            <p class="portfolio__url">URL：<a :href="val.url" target="_blank">{{ val.url }}</a></p>
          </section>
          <section class="portfolio__sectionInner">
            <h3 class="portfolio__heading">制作規模</h3>
            <ul class="portfolio__list">
              <li v-for="member in val.memberList" :key="member">{{ member }}</li>
            </ul>
          </section>
          <section class="portfolio__sectionInner">
            <h3 class="portfolio__heading">使用言語・ツール</h3>
            <ul class="portfolio__list">
              <li v-for="skill in val.skillList" :key="skill">{{ skill }}</li>
            </ul>
          </section>
        </section>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['val']
}
</script>

<style lang="scss">
@import '../assets/sass/mixin';
.modal {
  opacity: 0;
  display: flex!important;
  visibility: hidden;
  &-wapper {
    &.is-open {
      >.modal {
        transition: opacity 0.3s;
        opacity: 1;
        visibility: visible;
      }
    }
  }
  &-close {
    @include sp {
      top: spn(40)!important;
      right: spn(30)!important;
    }
    &:before {
      width: 100%!important;
      height: 3px!important;
    }
    &:after {
      width: 3px!important;
      height: 100%!important;
    }
  }
  .portfolio {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 900px;
    padding: 4rem;
    background-color: #fff;
    border-radius: 1rem;
    @include sp {
      width: 94%;
      justify-content: flex-start;
      flex-direction: column;
      padding: spn(40);
      border-radius: spn(20);
    }
    &__img {
      width: 50%;
      margin-right: 5rem;
      @include sp {
        width: 100%;
        margin-right: 0;
        margin-bottom: spn(40);
      }
    }
    &__section {
      width: 50%;
      @include sp {
        width: 100%;
      }
      &Inner {
        margin-bottom: 2rem;
        @include sp {
          margin-bottom: spn(40);
        }
      }
    }
    &__title {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 2rem;
      @include sp {
        font-size: spn(38);
        margin-bottom: spn(40);
      }
    }
    &__url {
      margin-bottom: 2rem;
      @include sp {
        margin-bottom: spn(40);
      }
    }
    &__heading {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1rem;
      @include sp {
        font-size: spn(32);
        margin-bottom: spn(20);
      }
      &::before {
          content: '■';
          display: inline-block;
          margin-right: 0.5em;
        }
    }
    &__list {
      >li {
        @include sp {
          font-size: spn(28);
        }
        &::before {
          content: '・';
          display: inline-block;
          margin-right: 0.3em;
        }
      }
    }
  }
}
</style>
