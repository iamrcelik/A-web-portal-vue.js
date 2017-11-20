<script>
    export default {
        name: 'Programs',
        props: {
        },
        computed: {
            ProgramDetailsPath() {
                return `programDetails`;
            }
        }
    };


</script>

<template>
   <!---- <router-link :to="ProgramDetailsPath"> --->
    <carousel :navigationEnabled="true"  :perPage="5" :autoplay="true">
        <slide>
            <div class="col-sm-12">
                <div class="round">
                    <img src="src/assets/tıp.png">
                    <label>Sağlık ve Tıp</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round">
                    <img src="src/assets/sosyal.png">
                    <label>Sosyal Bilimler</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round">
                    <img src="src/assets/chart.png">
                    <label>İşletme ve Yönetim</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round">
                    <img src="src/assets/art.png">
                    <label>Sanat ve Tasarım</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round">
                    <img src="src/assets/science.png">
                    <label>Fen Bilimleri</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round round-sm hollow blue">
                    <img src="src/assets/engineering.png">
                    <label>Mühendislik</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round round-sm hollow blue">
                    <img src="src/assets/code.png">
                    <label>Bilgisayar Bilimleri</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round round-sm hollow blue">
                    <img src="src/assets/justice.png">
                    <label>Hukuk</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round round-sm hollow blue">
                    <img src="src/assets/media.png">
                    <label>Gazetecilik ve Medya</label>
                </div>
            </div>
        </slide>
        <slide>
            <div class="col-sm-12">
                <div class="round round-sm hollow blue">
                    <img src="src/assets/book.png">
                    <label>Eğitim Bilimleri</label>
                </div>
            </div>
        </slide>

    </carousel>
    <!----  </router-link> --->
  </template>

  <style>
      .round{
          text-align: center;
      }
  .round img{
      height: 80px;
      width: 80px;
  }
      .round label{
          display: block;
      }
      .VueCarousel-pagination{
          background-color: gainsboro;
      }
      label{margin-top: 15px}
  </style>