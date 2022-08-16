来写一个数字时钟吧！

推荐使用 vscode 作为代码编辑器

安装 tailwindcss 插件后，将鼠标移至 class 上可查看样式 css

## 🚀 计数器

### 1. clone 本项目

### 2. 安装项目依赖

```bash
# 假如您使用 npm，请安装 pnpm
npm i -g pnpm

# 更换国内源
pnpm config set registry https://registry.npmmirror.com
pnpm config set electron_mirror https://registry.npmmirror.com/-/binary/electron/

# 使用 pnpm 安装依赖
pnpm i
```

### 3. 编写插件页面

> `app/plugins/clock/index.vue`


### 4. 增加插件配置

> `coustom/plugin.ts`

```typescript
export const pluginList: pluginList[] = [
  // ...添加如下行
  { name: 'clock', size: [2, 2], description: '数字时钟', debug: true },
]
```

### 5. 启动 & 打包

```bash
# 调试应用
pnpm serve
# 在托盘中启动 count 插件

# 构建应用
pnpm build
# 构建成功后即可在 dist_electron 找到安装包
```
