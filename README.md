## 全局注入

- 需要引用相关模块 module.js 添加@Global()

## 生命周期

> 模块顺序执行相同生命周期 controller => service => module

1. OnModuleInit() 初始化主模块依赖处理后调用一次
2. OnApplicationBootstrap() 在应用程序完全启动并监听连接后调用一次
3. OnModuleDestroy() 收到终止信号(例如 SIGTERM)后调用
4. beforeApplicationShutdown() 在 onModuleDestroy()完成(Promise 被 resolved 或者 rejected)；一旦完成，将关闭所有连接(调用 app.close() 方法).
5. OnApplicationShutdown() 连接关闭处理时调用(app.close())

### 注意

> 每个的生命周期都有对应的方法

如： 使用 OnModuleInit 接口，提供 onModuleInit()方法

## AOP 架构

> 面向切面编程
> AOP 的好处是可以把一些通用逻辑分离到切面中，保持业务逻辑的纯粹性，这样切面逻辑可以复用，还可以动态的增删。

- Middleware 中间件

- Guard 路由守卫  
  用于在调用某个 Controller 之前判断权限，返回 true 或者 false 来决定是否放行

- Interceptor 拦截器  
  在目标 Controller 方法前后加入一些逻辑

- Pipe 管道  
  用来对参数做一些检验和转换

- ExceptionFilter 异常处理  
  对抛出的异常做处理，返回对应的响应

### AOP 机制的顺序

1. Middleware 是 Express 的概念，在最外层，
2. 到了某个路由之后，会先调用 Guard，Guard 用于判断路由有没有权限访问，
3. 然后会调用 Interceptor，对 Contoller 前后扩展一些逻辑，在到达目标 Controller 之前，
4. 还会调用 Pipe 来对参数做检验和转换。
5. 所有的 HttpException 的异常都会被 ExceptionFilter 处理，返回不同的响应。
