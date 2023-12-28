
var header=document.getElementById("header");
            var ms=document.getElementById("Mustang Boss 429");
            var m3=document.getElementById("Mustang GT500");
            var mx=document.getElementById("Mustang GT");
            var my=document.getElementById("Mustang GTD");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");

            ms.onclick=function(){
                header.style.backgroundImage="url(https://images3.alphacoders.com/126/1262742.jpg)"
                model.innerHTML="Mustang Boss 429"
                mph.innerHTML="5.3"
                speed.innerHTML="175mph"
                range.innerHTML="486"
            }

            m3.onclick=function(){
                header.style.backgroundImage="url(https://pixelz.cc/wp-content/uploads/2019/02/ford-mustang-shelby-gt500-uhd-4k-wallpaper.jpg)"
                model.innerHTML="Mustang GT500"
                mph.innerHTML="3.6"
                speed.innerHTML="200mph"
                range.innerHTML="615"
            }
        
            mx.onclick=function(){
                header.style.backgroundImage="url(https://www.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2024/collections/equipment/3-2/24_Mustang_07_32.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg)"
                model.innerHTML="Mustang GT"
                mph.innerHTML="4.4"
                speed.innerHTML="163 mph"
                range.innerHTML="486"
            }

            my.onclick=function(){
                header.style.backgroundImage="url(https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/performance/gtd/Mustang-GTD-on-Track-4_16x9.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg)"
                model.innerHTML="Mustang GTD"
                mph.innerHTML="3.5"
                speed.innerHTML="200 mph"
                range.innerHTML="486"
            }



            
            $("document").ready(function(){
                $("i").hover(function(){
                    $(".list").toggle()
                    $(".list(a)").toggle()
                })
            })
