var textArea=document.querySelector('textarea')
var cname=document.querySelector('#name')
var password=document.querySelector('#password')
var checkIn=document.querySelector('#checkIn')
var ename=document.querySelector('#ename')
var epassword=document.querySelector('#epassword')
var enter=document.querySelector('#enter')
var entering=document.querySelector('.entering')
var send=document.querySelector('.send')
var mesagges=document.querySelector('.mesagges')
var msgBox=document.querySelector('.message-box')
const firebaseConfig = {
    apiKey: "AIzaSyBeCETxY1biZeNURwmPdobwV_qf3BK-lEM",
    authDomain: "fir-b76a6.firebaseapp.com",
    databaseURL: "https://fir-b76a6-default-rtdb.firebaseio.com",
    projectId: "fir-b76a6",
    storageBucket: "fir-b76a6.appspot.com",
    messagingSenderId: "726287401701",
    appId: "1:726287401701:web:719a40d0d8e42bcf57ca0c"
  };

firebase.initializeApp(firebaseConfig)
var db=firebase.database()
checkIn.onclick=function(){
    db.ref('Qeydiyyat').set({
        ad:cname.value,
        password:password.value
    })
    cname.style.display='none'
    password.style.display='none'
    checkIn.style.display='none'
    entering.style.display='block'
}

enter.onclick=function(){
    db.ref('Qeydiyyat').on('value',function(snapshot){
        var x=snapshot.val()
        if(x.ad==ename.value || x.password==epassword.value){
            entering.style.display='none'
            mesagges.style.display='block'
    
        }
        else{alert(`wrong name or password`)}
    })
   

}
send.onclick=function(){
    db.ref('Qeydiyyat').on('value',function(snapshot){
        var y=snapshot.val()
         db.ref('Mesajlasmalar').set({
    ad:y.ad,
    mesaj:textArea.value
  })
    })

}

db.ref('Mesajlasmalar').on('value',function(snapshot){
    var z=snapshot.val()
    if(z==null || z==undefined){}else{
        var p=document.createElement('p')
        p.innerText=`${z.ad} : ${z.mesaj}`
        msgBox.append(p)
        textArea.value=''
    }
 })
