import {
    lw,
    cf,
    rw,
    li,
    pv,
    ri,
    lb,
    lc,
    rc,
    rb
} from "./data.js"


const lang = document.querySelector(".lang")
const langOption = document.querySelectorAll(".langOption")

const start = document.querySelector(".start")
const finish = document.querySelector(".finish")

const player = document.querySelectorAll(".player-each")
const lwDiv = document.querySelector(".lw")
const cfDiv = document.querySelector(".cf")
const rwDiv = document.querySelector(".rw")
const liDiv = document.querySelector(".li")
const pvDiv = document.querySelector(".pv")
const riDiv = document.querySelector(".ri")
const lbDiv = document.querySelector(".lb")
const lcDiv = document.querySelector(".lc")
const rcDiv = document.querySelector(".rc")
const rbDiv = document.querySelector(".rb")

const result = document.querySelector(".result")

const glot = new Glottologist();


// リロードしたときに言語設定
window.addEventListener('DOMContentLoaded', function(){
    // console.log(lang.value);
    changeLang()
    changePlayerLang()
});
// リロードじゃなく言語変更選択したとき言語設定
langOption.forEach(option=>{
    option.addEventListener("click", ()=>{
        changeLang()
    //    for(let i in lw){
    //     if(lw[i].name == lwDiv.children[1].textContent || lw[i].janame == lwDiv.children[1].textContent){
    //         lang.value == "en" ? lwDiv.children[1].textContent = lw[i].name : lwDiv.children[1].textContent = lw[i].janame
    //     }
    //    }
        changePlayerLang()
    })
})
// 言語変更するときのfunc
function changeLang(){
    if(lang.value == "en"){
        glot.import("glotData.json").then(() => {
            glot.render("en");
          });
    }else{
        glot.import("glotData.json").then(() => {
            glot.render("ja");
          });
    }
}
function changePlayerLang(){
    player.forEach(each=>{
        let playerName = each.children[1].textContent
        forData(each, playerName, lw)
        forData(each, playerName, cf)
        forData(each, playerName, rw)
        forData(each, playerName, li)
        forData(each, playerName, pv)
        forData(each, playerName, ri)
        forData(each, playerName, lb)
        forData(each, playerName, lc)
        forData(each, playerName, rc)
        forData(each, playerName, rb)
       })
}
function forData(each, name, data){
    for(let i in data){
        if(data[i].name == name || data[i].janame == name){
            lang.value == "en" ? each.children[1].textContent = data[i].name : each.children[1].textContent = data[i].janame
        }
    }
}
















player.forEach(each=>{
    each.addEventListener("click", ()=>{
        console.log("hello");
    })
})



let leftwing

start.addEventListener("click", function(){
    eachRandom(lw)
    eachRandom(cf)
})

function eachRandom(position){
    let player
    // let positionDiv
    const random = Math.floor(Math.random()* position.length)+1
    for(let i in position){
        if(position[i].id == random){
            player = position[i]
        }
    }
    function updatePlayerData(element, name, janame, position, positionId, photo) {
        const nameText = lang.value === "en" ? name : janame;
        element.children[0].children[0].src = photo;
        element.children[1].textContent = nameText;
        element.children[2].textContent = position;
        element.children[3].textContent = positionId;
      }
    switch (player.positionId) {
        case "lw":
          updatePlayerData(lwDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "cf":
          updatePlayerData(cfDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "rw":
          updatePlayerData(rwDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "li":
          updatePlayerData(liDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "pv":
          updatePlayerData(pvDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "ri":
          updatePlayerData(riDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "lb":
          updatePlayerData(lbDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "lc":
          updatePlayerData(lcDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "rc":
          updatePlayerData(rcDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        case "rb":
          updatePlayerData(rbDiv, player.name, player.janame, player.position, player.positionId, player.photo);
          break;
        default:
          console.log("error");
          break;
    }
}



finish.addEventListener("click", ()=>{
    let resultPoint = 0
    player.forEach(each=>{
        switch(each.children[3].textContent){
            case "lw":
                resultCalc(lw, each)
                break
            case "cf":
                resultCalc(cf, each)
                break
            case "rw":
                resultCalc(rw, each)
                break
            case "li":
                resultCalc(li, each)
                break
            case "pv":
                resultCalc(pv, each)
                break
            case "ri":
                resultCalc(ri, each)
                break
            case "lb":
                resultCalc(lb, each)
                break
            case "lc":
                resultCalc(lc, each)
                break
            case "rc":
                resultCalc(rc, each)
                break
            case "rb":
                resultCalc(rb, each)
                break
            default:
                console.log("error");
                break
        }
        function resultCalc(list, each){
            for(let i in list){
                if(list[i].name == each.children[1].textContent || list[i].janame == each.children[1].textContent){
                    let currentPosition = each.className.substring(12)
                    switch (each.className.substring(12)) {
                        case "lw":
                            resultPoint += list[i].lw
                            break
                        case "cf":
                            resultPoint += list[i].cf
                            break
                        case "rw":
                            resultPoint += list[i].rw
                            break
                        case "li":
                            resultPoint += list[i].li
                            break
                        case "pv":
                            resultPoint += list[i].pv
                            break
                        case "ri":
                            resultPoint += list[i].ri
                            break
                        case "lb":
                            resultPoint += list[i].lb
                            break
                        case "lc":
                            resultPoint += list[i].lc
                            break
                        case "rc":
                            resultPoint += list[i].rc
                            break
                        case "rb":
                            resultPoint += list[i].rb
                            break
                        default:
                            console.log("error");
                            break
                    }
                }
            }
        }
    })
    window.setTimeout(function(){
        result.textContent = "・"
    }, 400);
    window.setTimeout(function(){
        result.textContent = "・・"
    }, 800);
    window.setTimeout(function(){
        result.textContent = "・・・"
    }, 1200);

    window.setTimeout(function(){
        result.textContent = resultPoint + "/50"
    }, 1600);
    // result.textContent = resultPoint
})









// 以下ドラッグ関係
const playersDiv = [lwDiv, cfDiv, rwDiv, liDiv, pvDiv, riDiv, lbDiv, lcDiv, rcDiv, rbDiv]
let before = []
let beforeDiv
dragger(lwDiv)
dragger(cfDiv)
dragger(rwDiv)
dragger(liDiv)
dragger(pvDiv)
dragger(riDiv)
dragger(lbDiv)
dragger(lcDiv)
dragger(rcDiv)
dragger(rbDiv)

dropper(lwDiv)
dropper(cfDiv)
dropper(rwDiv)
dropper(liDiv)
dropper(pvDiv)
dropper(riDiv)
dropper(lbDiv)
dropper(lcDiv)
dropper(rcDiv)
dropper(rbDiv)


function dragger(item){
    item.addEventListener('dragstart', function(event) {
        // event.dataTransfer.setData('text/plain', event.target.id);
        before = [item.children[1].textContent, item.children[2].textContent, item.children[3].textContent, item.children[0].children[0].src]
        beforeDiv = item
    });
    item.addEventListener('drag', function(event) {
        // ドラッグ中の処理
    });
    item.addEventListener('dragend', function(event) {
        // ドラッグの終了時の処理
    });
}
function dropper(item){
    item.addEventListener('dragover', function(event) {
        event.preventDefault();
    });
    item.addEventListener('drop', function(event) {
        event.preventDefault();
        // var data = event.dataTransfer.getData('text/plain');
        // var draggedElement = document.getElementById(data);
        
        // ドロップ時の処理
        // draggedElement.children[1].textContent = item.children[1].textContent
        // draggedElement.children[2].textContent = item.children[2].textContent
        // draggedElement.children[3].textContent = item.children[3].textContent
        // draggedElement.children[0].children[0].src = item.children[0].children[0].src
        beforeDiv.children[1].textContent = item.children[1].textContent
        beforeDiv.children[2].textContent = item.children[2].textContent
        beforeDiv.children[3].textContent = item.children[3].textContent
        beforeDiv.children[0].children[0].src = item.children[0].children[0].src

        item.children[1].textContent = before[0]
        item.children[2].textContent = before[1]
        item.children[3].textContent = before[2]
        item.children[0].children[0].src = before[3]
    });
}