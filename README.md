# qdleader Web

一个基于 React 19 + Vite 5 + Redux Toolkit + TypeScript + Ant Design 5 构建的企业级前端应用模板。

## ✨ 特性

- 🚀 **现代化技术栈** - 使用最新的 React 19、Vite 5、TypeScript 5
- 🎨 **UI 组件库** - 集成 Ant Design 5，提供丰富的企业级组件
- 📦 **状态管理** - 使用 Redux Toolkit 进行状态管理
- 🛣️ **路由系统** - React Router 6，支持路由懒加载和权限守卫
- 🌐 **网络请求** - 封装 Axios，统一处理拦截器和错误
- 📐 **代码规范** - ESLint + Prettier + Husky + Commitlint
- 🔧 **工程化配置** - 完善的 TypeScript 配置和路径别名
- 📱 **响应式布局** - 移动端适配支持

## 📦 技术栈

- **框架**: React 19
- **构建工具**: Vite 5
- **语言**: TypeScript 5
- **状态管理**: Redux Toolkit 2
- **路由**: React Router 6
- **UI 组件**: Ant Design 5
- **HTTP 客户端**: Axios
- **代码规范**: ESLint + Prettier
- **提交规范**: Husky + Commitlint

## 📁 项目结构

\`\`\`
alpha-account-activation-web/
├── public/ # 静态资源
├── src/
│ ├── api/ # API 接口
│ │ ├── user.ts # 用户相关接口
│ │ ├── mock.ts # Mock 数据
│ │ └── index.ts # 接口统一导出
│ ├── assets/ # 静态资源
│ ├── components/ # 公共组件
│ │ └── Loading/ # 加载组件
│ ├── hooks/ # 自定义 Hooks
│ │ ├── useCountDown.ts
│ │ └── index.ts
│ ├── layouts/ # 布局组件
│ │ └── MainLayout.tsx # 主布局
│ ├── pages/ # 页面组件
│ │ ├── Home/ # 首页
│ │ ├── Login/ # 登录页
│ │ ├── About/ # 关于页
│ │ ├── DataList/ # 数据列表页
│ │ └── NotFound/ # 404 页面
│ ├── redux/ # Redux 状态管理
│ │ ├── slices/ # 状态切片
│ │ │ ├── userSlice.ts # 用户状态
│ │ │ ├── appSlice.ts # 应用状态
│ │ │ └── counterSlice.ts # 计数器示例
│ │ ├── store.ts # Store 配置
│ │ └── hooks.ts # Redux Hooks
│ ├── router/ # 路由配置
│ │ ├── index.tsx # 路由配置
│ │ └── AuthGuard.tsx # 路由守卫
│ ├── types/ # TypeScript 类型定义
│ │ ├── index.ts # 通用类型
│ │ └── env.d.ts # 环境变量类型
│ ├── utils/ # 工具函数
│ │ ├── request.ts # Axios 封装
│ │ ├── storage.ts # 本地存储封装
│ │ └── index.ts # 工具函数导出
│ ├── App.tsx # 根组件
│ ├── main.tsx # 入口文件
│ └── index.css # 全局样式
├── .eslintrc.cjs # ESLint 配置
├── .prettierrc.json # Prettier 配置
├── commitlint.config.cjs # Commitlint 配置
├── tsconfig.json # TypeScript 配置
├── vite.config.ts # Vite 配置
└── package.json # 项目配置
\`\`\`

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (推荐) 或 npm >= 9.0.0

### 安装依赖

\`\`\`bash

# 使用 pnpm (推荐)

pnpm install

# 或使用 npm

npm install

# 或使用 yarn

yarn install
\`\`\`

### 启动开发服务器

\`\`\`bash

# 使用 pnpm

pnpm dev

# 或使用 npm

npm run dev

# 或使用 yarn

yarn dev
\`\`\`

访问 http://localhost:3000 即可看到项目运行效果。

### 构建生产版本

\`\`\`bash

# 使用 pnpm

pnpm build

# 或使用 npm

npm run build
\`\`\`

### 预览生产版本

\`\`\`bash

# 使用 pnpm

pnpm preview

# 或使用 npm

npm run preview
\`\`\`

## 🔧 可用命令

\`\`\`bash
pnpm dev # 启动开发服务器
pnpm build # 构建生产版本
pnpm preview # 预览生产版本
pnpm lint # 运行 ESLint 检查
pnpm lint:fix # 自动修复 ESLint 错误
pnpm format # 格式化代码
\`\`\`

## 📝 代码规范

项目已集成 ESLint、Prettier、Husky 和 Commitlint，确保代码质量和提交规范。

### Git 提交规范

提交信息必须遵循以下格式：

\`\`\`
<type>: <subject>
\`\`\`

**Type 类型：**

- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档变更
- `style`: 代码格式（不影响代码运行）
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动
- `revert`: 回退
- `build`: 打包

**示例：**

\`\`\`bash
git commit -m "feat: 添加用户登录功能"
git commit -m "fix: 修复数据列表分页问题"
git commit -m "docs: 更新 README 文档"
\`\`\`

## 🌐 环境变量

项目支持以下环境变量配置：

- `.env` - 所有环境通用配置
- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置

**主要环境变量：**

\`\`\`bash
VITE_PORT=3000 # 端口号
VITE_API_BASE_URL=http://localhost:8080 # API 基础地址
VITE_APP_TITLE=QDleader Admin # 应用标题
VITE_USE_MOCK=false # 是否使用 Mock 数据
\`\`\`

## 🔐 登录信息

默认测试账号：

- 用户名：`admin`
- 密码：`admin123`

## 📚 核心功能

### 1. 路由系统

- ✅ 路由懒加载
- ✅ 路由守卫（权限控制）
- ✅ 嵌套路由
- ✅ 404 页面

### 2. 状态管理

- ✅ Redux Toolkit 配置
- ✅ 用户状态管理
- ✅ 应用状态管理
- ✅ 异步操作处理
- ✅ TypeScript 类型支持

### 3. 网络请求

- ✅ Axios 封装
- ✅ 请求/响应拦截器
- ✅ 统一错误处理
- ✅ Token 自动携带
- ✅ TypeScript 泛型支持

### 4. UI 组件

- ✅ Ant Design 5 集成
- ✅ 主题定制
- ✅ 响应式布局
- ✅ 暗黑模式支持（可扩展）

## 🎯 页面说明

- **首页 (/home)** - 数据统计展示 + Redux 状态管理示例
- **登录页 (/login)** - 用户登录界面
- **数据列表 (/data-list)** - 表格数据展示 + 分页 + API 请求示例
- **关于页 (/about)** - 项目介绍和技术栈说明
- **404 页面** - 页面未找到提示

## 🔨 开发建议

1. **路径别名** - 使用 `@/` 作为 `src/` 的别名，简化导入路径
2. **组件命名** - 使用 PascalCase 命名组件
3. **文件组织** - 按功能模块组织文件，保持结构清晰
4. **类型定义** - 充分利用 TypeScript 类型系统
5. **代码复用** - 提取公共逻辑到 hooks 或 utils
6. **状态管理** - 合理使用 Redux，避免过度使用全局状态

## 📄 License

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

如有问题或建议，请通过以下方式联系：

- GitHub: https://github.com/qdleader

--

**祝你开发愉快！** 🎉
