# 使用最新版的 Node 镜像作为基础镜像。
FROM node:latest

# 创建工作目录并将本地项目复制到工作目录。
WORKDIR /app
COPY . .

# 安装项目所需的依赖项。
RUN yarn install

# 执行构建过程，生成静态文件。
RUN yarn build-only

# 使用“http-server”模块启动Node.js服务器。
RUN yarn global add http-server
CMD ["http-server", "dist", "--proxy", "http://localhost:7777?"]

# 开放容器所使用的端口号。
EXPOSE 7777
