### 准备工作

    #### cnpm install -g json-server
    #### cnpm install json-server --save
    #### npm init
    #### 配置package.json,script中添加"json-server": "json-server --watch db.json"
    #### 录入db.json数据,npm run json-server
    #### 配置package.json,script中添加"json-remote": "json-server http://jsonplaceholder.typicode.com/db",远程请求jsonplaceholder网站的数据
    #### npm run json-remote