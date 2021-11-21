class Demo {
    constructor(title){
        this.title=title;
    }
}
window.addEventListener('load',function(){
    var demo=Demo("Minification of js and css files");
    alert(demo.getTitle())
})