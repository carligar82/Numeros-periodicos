/**
 * Convierte un nº periódico (con infinitos decimales) en fracción
 * @date 29-06-2021 (11-08-2025)
 * @author Carlos Limeres (adaptación)
 * */
function per (decx)
{
 let d =
 {
    ant : 0 ,
    peri : 0
 }
 let dec2="",dec3="",dec4=""
 const l=decx.length;
 let dec = decx;
 document.getElementById("message").innerHTML = ""
 for ( let aa=0;aa<=l-2;aa++)
 {
  dec2=""
  for (let b=aa;b<=l-1;b++)
  {
   dec2 = dec2 + dec.charAt(b);
  }
  let y=l-aa;
  for (let j=1;j<=y-1;j++)
  {
   if (y % j == 0)
   {
    dec3=""
    let x=y/j;
    for (b=0;b<=j-1;b++)
    {
     dec3 = dec3 + dec2.charAt(b);
    }
    dec4 = dec3
    for (b=2;b<=x;b++)
    {
     dec4 = dec4 + dec3
    }
    if (dec4==dec2)
    {
     d.ant=aa;
     d.peri=j;
     j=y+1;
     aa=l-1;
    }
   }
  }
 }
 return d
}
function MCD (num,den){
    let mcd = 1
    for (let i=1;i<=den;i++){
        if (Math.round(num) % i == 0 && Math.round(den) % i == 0){
            mcd = i
        }
    }
    return mcd
}
function erase(){
    number.value=""
    document.getElementById("message").innerHTML = ""
    document.getElementById("numerador").innerHTML = ""
    document.getElementById("denominador").innerHTML = ""   
}
function main ()
{
 let s=0;
 let den,num,mcd;
 const dec = document.getElementById("number").value
 let decx = ""
 for (let a=0;a<=dec.length-1;a++)
 {
  if (s==1)
  {
   decx = decx + dec.charAt(a)
  }
  if (dec.charAt(a)=='.' || dec.charAt(a)=="'")
  {
   s=1;
  }
 }
  const d=per(decx);
  if (d.peri==0)
  {
   document.getElementById("message").innerHTML = "Error . Número no periódico"
  }
  else
  {
   document.getElementById("message").innerHTML = ""
   den=Math.pow(10,d.peri+d.ant)-Math.pow(10,d.ant);
   num=Number(dec)*den;
   mcd=MCD(num,den);
   den=den/mcd;
   num=num/mcd;
   document.getElementById("numerador").innerHTML = Math.round(num)
   document.getElementById("denominador").innerHTML = Math.round(den)
  }
}
function directory(){
    document.getElementById("message").innerHTML = ""
    if (document.getElementById("caja3").getAttribute ("class")=="invisible"){
       document.getElementById("caja3").setAttribute ("class","visible")
    }
    else{
        document.getElementById("caja3").setAttribute ("class","invisible")
     }
}