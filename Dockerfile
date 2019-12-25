# 會載入程式需要的執行環境，會根據不同的需求下載不同的映像檔，這裡是指 node v10.15,3
FROM node:10.15.3

# 設定 container 的預設目錄位置
# 在這個 Docker 中的 Linux 即將會建立一個目錄 /webpackBuild
WORKDIR /app

# COPY 要cache的檔案
COPY package*.json ./

# RUN 在server 要跑的 dependencies
# RUN npm i express html-webpack-plugin react-helmet webpack-cli webpack webpack-node-externals --save

# 將專案根目錄的檔案加入至 container
# 將本機端與 Dockerfile 同一層的所有檔案加到 Linux 的 /webpackBuild 目錄底下
ADD . /app

# 安裝 npm package
RUN npm install
# RUN yarn install
# RUN npm ci --only=production
## ci for production

# 開放 container 的 3000 port, 指 container 對外的埠號，再與外界溝通時使用
EXPOSE 3000

# 透過 npm start 會運行 Nodejs App
CMD npm start












# FROM node:10.15.3
# # 設定 container 的預設目錄位置
# WORKDIR /app
# COPY package*.json ./ /app/
# RUN npm install npm cache clean --force
# CMD node ./dist/server.js