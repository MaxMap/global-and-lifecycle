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

### AOP 机制的顺序
