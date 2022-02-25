
const sign_up = (idlist, pwdlist, idandpwdlist) =>{

    let pwd1 = document.getElementsByClassName("pwdInputer")[0].value;
    let id = document.getElementsByClassName("idInputer")[0].value;

    console.log(id);
    console.log(idlist.includes(id))
    if(!idlist.includes(id)){
        idlist.push(id);
        pwdlist.push(pwd1);
        idlen= Object.keys(idlist).length;
        pwdlen= Object.keys(pwdlist).length;
        for (var i =0; i<idlen; i++){
                idandpwdlist[idlist[i]]=pwdlist[i];
    }
    console.log(idandpwdlist);
    document.getElementById("warning").innerText = "";
    return idandpwdlist;
    }else{
        document.getElementById("warning").innerText="같은 id가 이미 있습니다"
        return idandpwdlist;
    }
}
module.exports={
    sign_up
};