/* vue的插件库 */
(function () {
    // 需要向外暴露的插件对象
    const MyPlugin={}
    MyPlugin.install=function(Vue,options){
            // 添加全局方法或属性
        Vue.myGlobalMethod=function(){
            console.log("Vue的函数对象的方法myGlobalMethod()")
        }
            //添加全局资源
        Vue.directive('my-directive',function(el,binding){
            el.textContent=binding.value.toLowerCase();

        })
            // 添加实例方法
        Vue.prototype.$myMethod=function(){
            console.info("Vue实例对象的方法$myMethod()")
        }
    }
    window.MyPlugin=MyPlugin
})()