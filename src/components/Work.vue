<template>
  <div id="work">
    <div class="work">
      <h2 class="work__title">Work</h2>
      <ul class="work__list">
        <li class="work__item" v-for="item in items" :key="item.index" @click="openModal(item)">
          <img :src="item.img" :alt="item.title">
          <p class="work__item__overlay">
            <span>{{ item.title }}</span>
            <span>{{ item.pageTitle }}</span>
          </p>
        </li>
      </ul>
      <Modal :val="postItem" :class="{'is-open': isActive}" @close="closeModal"></Modal>
    </div>
  </div>
</template>

<script>
import Modal from './Modal'
// import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
export default {
  name: 'Work',
  components: { Modal },
  data () {
    return {
      isActive: false,
      postItem: '',
      scrollY: '',
      items: [
        {
          img: require('../assets/images/canon.png'),
          title: '企業プロジェクト紹介サイトの制作',
          pageTitle: '企業プロジェクト紹介サイト',
          url: 'https://global.canon/ja/tsuzuri/',
          memberList: ['ディレクター1名', 'アートディレクター兼デザイナー1名', 'コーダー3名'],
          skillList: ['HTML5', 'CSS3', 'jQuery'],
          period: '約3ヶ月'
        },
        {
          img: require('../assets/images/papalabo.png'),
          title: '企業プロジェクト紹介サイトの制作',
          pageTitle: '企業プロジェクト紹介サイト',
          url: 'https://www.projects.dentsu.jp/papalabo/',
          memberList: ['ディレクター1名', 'デザイナー1名', 'フロントエンド2名'],
          skillList: ['HTML5', 'CSS3/Stylus', 'jQuery', 'pug', 'gulp3', 'webpack4'],
          period: '約2ヶ月'
        },
        {
          img: require('../assets/images/tomoyama.png'),
          title: 'コーポレートサイトのリニューアル',
          pageTitle: '建設会社コーポレートサイト',
          url: 'https://www.tomoyama-group.co.jp/',
          memberList: ['ディレクター1名', 'デザイナー1名', 'フロントエンド・コーダー3名'],
          skillList: ['HTML5', 'CSS3/Scss', 'jQuery', 'gulp3', 'webpack4', 'ejs'],
          period: '約2〜3ヶ月'
        },
        {
          img: require('../assets/images/daiichi.png'),
          title: 'リクルートサイトの制作',
          pageTitle: '生命保険会社　営業職リクルートサイト',
          url: 'https://www.dai-ichi-life-professionals.jp/',
          memberList: ['ディレクター2名', 'デザイナー1名', 'フロントエンド・コーダー3名'],
          skillList: ['HTML5', 'CSS3/Stylus', 'jQuery', 'gulp3', 'webpack4', 'pug'],
          period: '約8ヶ月'
        },
        {
          img: require('../assets/images/hitachi.png'),
          title: '商材やサービスの紹介サイトの制作',
          pageTitle: 'メーカーの商材やサービスの紹介サイト',
          url: 'https://www.hitachi-solutions.co.jp/sagasol/',
          memberList: ['ディレクター1名', 'フロントエンド2名'],
          skillList: ['HTML5', 'CSS3/Stylus/Scss', 'Nuxt.js', 'pug'],
          period: '約6ヶ月'
        },
        {
          img: require('../assets/images/lemonsourgp.png'),
          title: '飲食サイトのキャンペーンページの制作',
          pageTitle: '飲食サイトのキャンペーンページ',
          url: 'https://pr.gnavi.co.jp/promo/lemonsour-grandprix2019/',
          memberList: ['ディレクター1名', 'フロントエンド2名'],
          skillList: ['HTML5', 'CSS3/Scss', 'jQuery', 'gulp4'],
          period: '約1年'
        },
        {
          img: require('../assets/images/meshitan.png'),
          title: '飲食店検索アプの公式サイトの制作',
          pageTitle: '飲食店検索アプリ　公式サイト',
          url: 'https://www.meshitan.com/',
          memberList: ['ディレクター1名', 'デザイナー1名', 'フロントエンド2名'],
          skillList: ['HTML5', 'CSS3/Scss', 'jQuery', 'gulp4', 'ejs'],
          period: '約1ヶ月'
        },
        {
          img: require('../assets/images/interconnect.png'),
          title: 'コーポレートサイトのリニューアル',
          pageTitle: 'IT系企業コーポレートサイト',
          url: 'https://www.inter-connect.co.jp/',
          memberList: ['ディレクター1名', 'デザイナー1名', 'フロントエンド2名'],
          skillList: ['HTML5', 'CSS3/Scss', 'javascript(jQuery)', 'gulp4', 'ejs'],
          period: '約2週間'
        },
        {
          img: require('../assets/images/hanasaku.png'),
          title: '生命保険商品案内ページ制作',
          pageTitle: '生命保険会社　商品案内ページ',
          url: 'https://www.direct.life8739.co.jp/',
          memberList: ['ディレクター2名', 'デザイナー3名', 'フロントエンド3名'],
          skillList: ['HTML5', 'CSS3/Scss', 'jQuery', 'webpack', 'gulp4', 'ejs'],
          period: '約5ヶ月'
        }
      ]
    }
  },
  methods: {
    openModal (item) {
      this.isActive = true
      this.postItem = item

      // モーダルを開いたときに背景を固定する
      const body = document.body
      this.scrollY = window.pageYOffset
      body.style.position = 'fixed'
      body.style.top = this.scrollY * -1 + 'px'
    },
    closeModal () {
      this.isActive = false

      // モーダルを閉じたら背景固定を解除する
      const body = document.body
      body.style.position = ''
      body.style.top = ''
      window.scrollTo(0, this.scrollY)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sass/mixin';
#work {
  padding: 4rem 0 0;
  background: linear-gradient(135deg, #296593 0%,#7ec6ea 100%);
  @include sp {
    padding: spn(40) spn(60) spn(60);
  }
}
.work {
  max-width: 1000px;
  margin: 0 auto;
  &__title {
    font-size: 4rem;
    color: #fff;
    font-weight: 600;
    margin-bottom: 3rem;
    @include sp {
      font-size: spn(50);
      margin-bottom: spn(40);
    }
  }
  &__list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  &__item {
    width: 300px;
    height: 300px;
    margin-right: 5rem;
    margin-bottom: 5rem;
    border-radius: 2rem;
    box-shadow:6px 6px 10px -3px rgba(0,0,0,.5);
    position: relative;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: all 0.25s;
    @include sp {
      width: 46%;
      height: spn(300);
      margin-right: spn(40);
      margin-bottom: spn(40);
    }
    &__overlay {
      width: 100%;
      height: 50%;
      padding: 5.5rem 2rem 1rem;
      font-size: 1.6rem;
      font-weight: 600;
      color: #fff;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -50%;
      background: linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.9) 100%);
      z-index: 2;
      opacity: 0;
      transition: all 0.25s;
      >span {
        display: block;
        z-index: 3;
        position: relative;
        top: 100px;
        transition: all 0.15s;
        +span {
          margin-top: 1rem;
          font-size: 1.4rem;
        }
      }
    }
    @include pc {
      &:hover {
        cursor: pointer;
        top: -3px;
        left: -3px;
        box-shadow: 9px 9px 10px 0px rgba(0,0,0,.5);
        transition: all 0.3s;
        .work__item__overlay {
          opacity: 1;
          bottom: 0;
          transition: all 0.3s;
          >span {
            top: 0;
            transition:  0.2s;
            transition-delay: 0.15s;
            +span {
              transition-delay: 0.25s;
            }
          }
        }
      }
    }
    &:nth-child(3n) {
      margin-right: 0;
      @include sp {
        margin-right: spn(40);
      }
    }
    &:nth-child(2n) {
      @include sp {
        margin-right: 0;
      }
    }
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      max-width: initial;
      height: 100%;
    }
  }
}
</style>
