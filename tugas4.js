var tinggiDanang = 177;
var tinggiYusuf = 185;
var tinggiBudi = 194;



if(tinggiDanang>tinggiYusuf){
    if(tinggiDanang<tinggiBudi){
        console.log("Siswa yang memiliki tinggi badan paling Tinggi adalah Budi,Kedua adalah Danang,dan yang terakhir adalah Yusuf");  
    }else{
        console.log("Siswa yang memiliki tinggi badan paling Tinggi adalah Danang,Kedua adalah Budi,dan yang terakhir adalah Yusuf");
    }

}else{
    if(tinggiYusuf<tinggiBudi){
        console.log('Siswa yang memiliki tinggi badan paling Tinggi adalah Budi,Kedua adalah Yusuf,dan yang terakhir adalah Danang');
    }else{
        console.log("Siswa yang memiliki tinggi badan paling Tinggi adalah Yusuf,Kedua adalah Budi,dan yang terakhir adalah Danang");
    }

}

console.log(tinggiBudi);
console.log(tinggiYusuf);
console.log(tinggiDanang);