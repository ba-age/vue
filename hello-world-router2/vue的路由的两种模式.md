# vue路由的两种模式

- hash      (默认)
- history

要修改当前路由模式可以在 实例化 路由器对象的时候设置 mode 选项
```js
new VueRouter({
  mode: 'history'
})
```

## 这两种模式的区别

1. 从外观上来说，hash模式会在url地址上面有一个 # 号，而 history 没有，更像url地址。
2. 从原理上来说，hash模式是通过 window.onHashChagne 这个事件来处理的。而 history 模式是基于 html5 中 history 新增的一些api. hisotry.pushState() history.replaceState() window.onpopstate 来实现的
3. hisotry模式还需要后台配置去处理上线的404的问题

## 你上家公司使用什么模式呢？
