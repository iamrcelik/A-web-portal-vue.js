<template>
<section id="okullar">
    <div class="container">
        <div class="okullar-header text-center">

                <h2 class="align-center pb-3 mbr-fonts-style display-2" STYLE="text-align: center !important;"><strong>ÖNE ÇIKANLAR</strong></h2>
                <h3 class="mbr-section-subtitle align-center mbr-light mbr-fonts-style display-5">
                    <span style="font-style: italic;">Editörlerimiz tarafından seçilen dünyada geçerliliğini ve konumunu ispatlamış üniversiteler. </span></h3>
    </div>
        <div class="okullar-content">
            <div class="row">
              <div class="col-sm-3">
                <div class="element">
                    <a href="#">
                    <img src="http://appic.works/wp-content/uploads/2017/10/oxford.png" id="image1"/>
                    <div class="top-left"><p style="color: white">OXFORD UNIVERSITY</p></div>
                    <div class="bottom-right">
                        <i class="fa fa-map-marker" aria-hidden="true" style="color: white"> </i>
                        <span class="text">İNGİLTERE</span>
                    </div>
                    </a>
                </div>
                <div class="element1">
                    <img src="http://appic.works/wp-content/uploads/2017/10/toronto.jpg" id="image2"/>
                    <div class="top-left"><p style="color: white">CAMBRİDGE UNIVERSITY</p></div>
                    <div class="bottom-right">
                        <i class="fa fa-map-marker" aria-hidden="true" style="color: white"> </i>
                        <span class="text">İNGİLTERE</span>
                    </div>
                </div>
                <div class="element2">
                    <img src="http://appic.works/wp-content/uploads/2017/10/toronto.jpg" id="image3"/>
                    <div class="top-left"><p style="color: white">TORONTO UNIVERSITY</p></div>
                    <div class="bottom-right">
                        <i class="fa fa-map-marker" aria-hidden="true" style="color: white"> </i>
                        <span class="text">KANADA</span>
                    </div>
                </div>
            </div>
                <div class="col-sm-4">
                    <div class="element3">
                        <img src="http://appic.works/wp-content/uploads/2017/10/mıtt.jpg" id="image4"/>
                        <div class="top-left"><p style="color: white">MIT</p></div>
                        <div class="bottom-right">
                            <i class="fa fa-map-marker" aria-hidden="true" style="color: white"> </i>
                            <span class="text">AMERİKA</span>
                        </div>
                    </div>
                    <div class="element4">
                        <img src="http://appic.works/wp-content/uploads/2017/10/cornell.jpg" id="image5"/>
                        <div class="top-left"><p style="color: white">CORNELL UNIVERSITY</p></div>
                        <div class="bottom-right">
                            <i class="fa fa-map-marker" aria-hidden="true" style="color: white"> </i>
                            <span class="text">AMERİKA</span>
                        </div>
                    </div>
                </div>
                <div class="col-sm-5">
                    <div class="element5">
                        <img src="http://appic.works/wp-content/uploads/2017/10/miami.jpg" id="image6"/>
                        <div class="top-left"><p style="color: white">MIAMI UNIVERSITY</p></div>
                        <div class="bottom-right">
                            <i class="fa fa-map-marker" aria-hidden="true" style="color: white"> </i>
                            <span class="text">AMERİKA</span>
                        </div>
                    </div>
                    <div class="element6">
                        <img src="http://appic.works/wp-content/uploads/2017/10/ufc.jpg" id="image7"/>
                        <div class="top-left"><p style="color: white">UNIVERSITY CENTRAL OF FLORIDA</p>
                        </div>
                        <div class="bottom-right" style="color: white">
                            <i class="fa fa-map-marker" aria-hidden="true" > </i>
                            <span class="text">AMERİKA</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<style scoped>

    .okullar-header{
        margin-top:120px;
    }

  h2{
      font-size: 50px;
  }

 #okullar{
     background-color: gainsboro;
     padding: 5px 0;

 }
 .okullar-content{
     background-color: gainsboro;
     padding: 10px 0;

 }
 #image1{
     width: 100%;
     height: 140px;

 }
 .element .top-left {
     position: absolute;
     left: 30px;
     top: 20px;

 }
 .element1 .top-left {
     position: absolute;
     left: 30px;
     top: 180px;

 }
 .element2 .top-left {
     position: absolute;
     left: 30px;
     top: 395px;

 }
 .element3 .top-left {
     position: absolute;
     left: 30px;
     top: 20px;

 }
 .element4 .top-left {
     position: absolute;
     left: 30px;
     top: 250px;

 }
 .element5 .top-left {
     position: absolute;
     left: 30px;
     top: 20px;

 }
 .element6 .top-left {
     position: absolute;
     left: 30px;
     top: 320px;

 }
 .element6 .bottom-right {
     position: absolute;
     right: 40px;
     bottom: 30px;
 }
 .element5 .bottom-right {
     position: absolute;
     right: 40px;
     bottom: 270px;
 }
 .element4 .bottom-right {
     position: absolute;
     right: 40px;
     bottom: 30px;
 }
 .element3 .bottom-right {
     position: absolute;
     right: 40px;
     bottom: 350px;
 }
 .element2 .bottom-right {
     position: absolute;
     right: 30px;
     bottom: 30px;
 }
 .element1 .bottom-right {
     position: absolute;
     right: 25px;
     bottom: 205px;
 }
 .element .bottom-right {
     position: absolute;
     right: 25px;
     bottom: 425px;
 }

    .bottom-right .text{
        font-size: 16px;
        font-weight: 500;
        color: #fff;
    }


 #image2{
     width: 100%;
     height: 200px;
 }
 #image5{
     width: 100%;
     height: 298px;
     }
 #image7{
     width: 100%;
     height: 220px;
 }

    #image1,#image2,#image3,#image4,#image5,#image6,#image7{
        margin-bottom: 20px;
        border-radius: 20px;
    }
</style>
