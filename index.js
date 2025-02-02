let counter=0;
const getData=()=>{
//calling an api and gets data
console.log("fetching data.....",counter++);

}
const doSomeMagic=function(fn,d){
    let timer;
    return function ()
    {
        let context=this,
        args=arguments;
        clearTimeout((timer));
 timer=setTimeout(()=>{
    getData.apply(context,args);
},d);
    }
}
const betterFunction=doSomeMagic(getData,300);