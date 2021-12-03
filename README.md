# uniapp-cli开发模板

## 安装依赖
```
yarn install
```

### 开启本地服务
```
npm run dev:平台-环境
可以在package.json里自行添加对应平台和环境
环境变量配置请查看cli文档
```

### 打包
```
npm run build:平台-环境
可以在package.json里自行添加对应平台和环境
环境变量配置请查看cli文档
```

### 注意事项
用yarn install, npm install有问题

### BUG
- Function(...) is not a function
  - 编译到钉钉小程序, 使用async/await语法会报错, https://blog.csdn.net/sinat_33184880/article/details/85533095, 找到node_modules/generator-runtime, 把runtime.js文件里最后的try/catch里的Function("r", "regeneratorRuntime = r")(runtime);注释掉
- Uncaught TypeError: _interopRequireDefault is not a function
  - 使用yarn install代替npm install
- 安装错误可以尝试先把node_modules文件夹删除再进行重装


### 文档
vue https://cn.vuejs.org/v2/guide/

vue-cli https://cli.vuejs.org/zh/guide/

vuex https://vuex.vuejs.org/zh/

uview https://www.uviewui.com/components/intro.html

uniapp https://uniapp.dcloud.io/api/README
