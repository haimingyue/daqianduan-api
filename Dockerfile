# 构建
FROM node:10 

LABEL maintainer="simoon"

# 创建工作目录
WORKDIR /app

# 把当前目录复制到镜像中来
COPY . .
# 安装依赖
RUN npm install
RUN npm run build
# 暴露端口
EXPOSE 12005
# 挂载一部分数据出来,public 上传静态资源的
VOLUME [ "/app/public" ]

# 运行node名称
CMD [ "node", "dist/server.bundle.js" ]