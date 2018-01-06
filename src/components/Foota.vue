<template>
    <footer id="gtco-footer" role="contentinfo">
        <div class="gtco-container">
            <div class="row row-p	b-md">

                <div class="col-md-4">
                    <div class="gtco-widget">
                        <h3>Hakkımızda</h3>
                        <p>AbroadStation, yerel dilde içerik yazmaktan ve çeşitli ülkelerden öğrencilere yönelik sosyal medya etkinlikleri yönetmekten sorumlu, belirli bir ülke odaklı editörlere ve dijital pazarlama uzmanlarına sahiptir. Türk öğrenciler için sanal danışmanlık hizmeti sunar</p>
                    </div>
                </div>

                <div class="col-md-2 col-md-push-1">
                    <div class="gtco-widget">
                        <h3>Ülkeler</h3>
                        <ul class="gtco-footer-links">
                            <li><a href="#">Amerika</a></li>
                            <li><a href="#">Kanada</a></li>
                            <li><a href="#">İngiltere</a></li>
                            <li><a href="#">Fransa</a></li>
                            <li><a href="#">Hollanda</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-2 col-md-push-1">
                    <div class="gtco-widget">
                        <h3>Bölümler</h3>
                        <ul class="gtco-footer-links">
                            <li><a href="#">Bilgisayar Bilimleri</a></li>
                            <li><a href="#">Sağlık &amp; Tıp</a></li>
                            <li><a href="#">Hukuk</a></li>
                            <li><a href="#">Mühendislik</a></li>
                            <li><a href="#">İşletme &amp; Yönetim</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-md-3 col-md-push-1">
                    <div class="gtco-widget">
                        <h3>Get In Touch</h3>
                        <ul class="gtco-quick-contact">
                            <li><a href="#"><i class="fa fa-phone"></i> +0545 393 62 09</a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i> info@AbroadStation.com</a></li>

                        </ul>
                    </div>
                </div>

            </div>

            <div class="row copyright">
                <div class="col-md-12">
                    <p class="pull-left">
                        <small class="block">&copy; All Rights Reserved.</small>
                        <small class="block">Designed by <a href="https://appic.woks" target="_blank">Appic.Works</a></small>
                    </p>
                    <p class="pull-right">
                      <ul class="gtco-social-icons pull-right">
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                      </ul>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>


<style scoped>
    #gtco-footer .gtco-footer-links {
        padding: 0;
        margin: 0 0 20px 0;
        float: left;
        width: 100%;
    }
    #gtco-footer .gtco-footer-links li {
        padding: 0;
        margin: 0 0 15px 0;
        list-style: none;
        line-height: 1;
    }
    #gtco-footer .gtco-footer-links li a {
        text-decoration: none;
    }
    #gtco-footer .gtco-footer-links li a:hover {
        text-decoration: underline;
    }
    #gtco-footer .gtco-widget {
        margin-bottom: 30px;
    }
    #gtco-footer .gtco-widget h3 {
        margin-bottom: 15px;
        font-weight: bold;
        font-size: 15px;
        letter-spacing: 2px;
        text-transform: uppercase;
    }
    #gtco-footer .gtco-widget .gtco-quick-contact {
        padding: 0;
        margin: 0;
    }
    #gtco-footer .gtco-widget .gtco-quick-contact li {
        padding: 0;
        margin: 0 0 10px 0;
        list-style: none;
    }
    #gtco-footer .gtco-widget .gtco-quick-contact li i {
        width: 30px;
        float: left;
        font-size: 18px;
        position: relative;
        margin-top: 4px;
        display: -moz-inline-stack;
        display: inline-block;
        zoom: 1;
        *display: inline;
    }
    #gtco-footer .footer-logo span {
        color: #09C6AB;
    }
    #gtco-footer .copyright {
        color: #b3b3b3;
        padding-top: 3em;
        margin-top: 3em;
        border-top: 1px solid #09C6AB;
    }
    @media screen and (max-width: 768px) {
        #gtco-footer .copyright .pull-left,
        #gtco-footer .copyright .pull-right {
            float: none !important;
            text-align: center;
        }
    }
    #gtco-footer .copyright .block {
        display: block;
        color:#363636;
    }
     #gtco-footer{
         padding: 7em 0;
         clear: both;
         position: relative;
    }
    .gtco-social-icons li a{
        display: -moz-inline-stack;
        display: inline-block;
        zoom: 1;
        color: #09C6AB;
        padding-left: 10px;
        padding-right: 10px;
    }
    .gtco-social-icons{
        margin: 0;
        padding: 0;
    }
    .gtco-social-icons li {
        margin: 0;
        padding: 0;
        list-style: none;
        display: -moz-inline-stack;
        display: inline-block;
        zoom: 1;
        *display: inline;
    }
    .gtco-social-icons li a {
        display: -moz-inline-stack;
        display: inline-block;
        zoom: 1;
        *display: inline;
        color: #09C6AB;
        padding-left: 10px;
        padding-right: 10px;
    }
    .gtco-social-icons li a i {
        font-size: 20px;
    }
    .gtco-container {
        max-width: 1100px;
        position: relative;
        margin: 0 auto;
        padding-left: 15px;
        padding-right: 15px;
    }
    #gtco-footer .gtco-footer-links li a{
        color: #09C6AB;
        -webkit-transition: 0.5s;
        -o-transition: 0.5s;
        transition: 0.5s;
    }
    #gtco-footer .gtco-widget .gtco-quick-contact li a{
        color: #09C6AB;
    }

</style>