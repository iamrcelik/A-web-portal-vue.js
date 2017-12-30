<template>
    <div class="gtco-cover gtco-cover-sm" style="background-image: url(src/assets/banner.png)"  data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="gtco-container text-center">
            <div class="display-t">
                <div class="display-tc">
                    <h1>Hayalinizdeki Eğitim İçin Hazır Olun!</h1><br>
                 <button type="button" class="HemenBul" >HEMEN BUL</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.gtco-cover.gtco-cover-sm {
    height: 600px !important;
}
.gtco-cover {
    height: 900px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    float: left;
    width: 100%;
}
.gtco-cover a {
    color: #09C6AB;
}
.gtco-cover a:hover {
    color: white;
}
.gtco-cover .overlay {
    z-index: 1;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
}
@media screen and (max-width: 768px) {
    .gtco-cover {
        height: 600px;
    }
}
.gtco-cover .display-t,
.gtco-cover .display-tc {
    height: 900px;
    display: table;
    width: 100%;
}
@media screen and (max-width: 768px) {
    .gtco-cover .display-t,
    .gtco-cover .display-tc {
        height: 600px;
    }
}
.gtco-cover.gtco-cover-sm {
    height: 600px;
}
@media screen and (max-width: 768px) {
    .gtco-cover.gtco-cover-sm {
        height: 400px;
    }
}
.gtco-cover.gtco-cover-sm .display-t,
.gtco-cover.gtco-cover-sm .display-tc {
    height: 600px;
    display: table;
    width: 100%;
}
@media screen and (max-width: 768px) {
    .gtco-cover.gtco-cover-sm .display-t,
    .gtco-cover.gtco-cover-sm .display-tc {
        height: 400px;
    }
}
.gtco-cover > .gtco-container {
    position: relative;
    z-index: 10;
}
.gtco-cover .display-tc h1{
    margin-top: 100px;
    font-size: 59px;
    line-height: 1.5;
    font-weight: 300;
    color: white;
 }
@media screen and (max-width: 768px) {
    .gtco-cover .display-tc h1{
        font-size: 40px;
        margin-top: 30%;
    }
}
.gtco-cover .display-tc .HemenBul{
     background: transparent;
     dispaly: inline-block;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    padding: 10px 60px;
 }
</style>