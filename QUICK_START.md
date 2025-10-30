# 快速开始指南

## 📋 前置要求

在开始之前，请确保你的开发环境满足以下要求：

- **Node.js**: >= 18.0.0
- **包管理器**: pnpm (推荐) / npm / yarn

## 🚀 启动步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

项目将在 http://localhost:3000 启动。

### 3. 登录系统

使用以下测试账号登录：

- **用户名**: `admin`
- **密码**: `admin123`

## 📦 可用命令

```bash
# 开发
npm run dev          # 启动开发服务器

# 构建
npm run build        # 构建生产版本
npm run preview      # 预览生产构建

# 代码质量
npm run lint         # 运行 ESLint 检查
npm run lint:fix     # 自动修复 ESLint 问题
npm run format       # 格式化代码

# Git 提交
git add .
git commit -m "feat: 添加新功能"  # 遵循 commitlint 规范
```

## 🎯 功能特性

### 1. 路由导航

- `/home` - 首页（数据统计 + Redux 示例）
- `/data-list` - 数据列表（表格 + 分页 + API 请求）
- `/about` - 关于页面（项目介绍）

### 2. Redux 状态管理

项目已配置完整的 Redux Toolkit，可以在首页看到计数器示例：

```typescript
// 使用 Redux
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment } from '@/redux/slices/counterSlice';

const dispatch = useAppDispatch();
const count = useAppSelector((state) => state.counter.value);

// 触发 action
dispatch(increment());
```

### 3. API 请求

使用封装好的 request 工具：

```typescript
import request from '@/utils/request';

// GET 请求
const response = await request.get<UserInfo>('/api/user/info');

// POST 请求
const result = await request.post('/api/user/login', {
  username: 'admin',
  password: 'admin123',
});
```

### 4. 路径别名

项目配置了路径别名，简化导入：

```typescript
// ✅ 推荐使用别名
import { request } from '@/utils';
import UserCard from '@/components/UserCard';

// ❌ 避免相对路径
import { request } from '../../utils';
import UserCard from '../../../components/UserCard';
```

## 🛠️ 开发建议

### 1. VSCode 插件

推荐安装以下插件以获得最佳开发体验：

- **ESLint** - 代码检查
- **Prettier** - 代码格式化
- **TypeScript Vue Plugin** - TypeScript 支持

### 2. Git 提交规范

提交信息必须遵循以下格式：

```
<type>: <subject>
```

类型包括：

- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档变更
- `style`: 代码格式
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具变动

示例：

```bash
git commit -m "feat: 添加用户管理模块"
git commit -m "fix: 修复登录页面样式问题"
```

### 3. 代码组织

```
新建功能模块时的推荐结构：

src/pages/YourFeature/
├── index.tsx          # 主组件
├── components/        # 私有组件
├── hooks/            # 私有 hooks
├── types.ts          # 类型定义
└── index.module.css  # 样式文件（可选）
```

## 🔧 环境配置

### 开发环境

编辑 `.env.development` 文件：

```bash
VITE_API_BASE_URL=/api
VITE_USE_MOCK=false
```

### 生产环境

编辑 `.env.production` 文件：

```bash
VITE_API_BASE_URL=https://api.example.com
VITE_USE_MOCK=false
```

## 🐛 常见问题

### 1. 端口被占用

如果 3000 端口被占用，可以修改 `vite.config.ts` 中的端口配置：

```typescript
server: {
  port: 3001, // 修改为其他端口
}
```

### 2. 依赖安装失败

尝试清除缓存后重新安装：

```bash
rm -rf node_modules package-lock.json
npm install
```

### 3. TypeScript 类型错误

确保 VSCode 使用的是项目的 TypeScript 版本：

1. 打开任意 `.ts` 文件
2. 按 `Cmd+Shift+P` (Mac) 或 `Ctrl+Shift+P` (Windows)
3. 输入 "TypeScript: Select TypeScript Version"
4. 选择 "Use Workspace Version"

## 📚 学习资源

- [React 官方文档](https://react.dev)
- [Vite 官方文档](https://vitejs.dev)
- [Redux Toolkit 文档](https://redux-toolkit.js.org)
- [Ant Design 文档](https://ant.design)
- [TypeScript 文档](https://www.typescriptlang.org)

## 💡 下一步

1. ✅ 熟悉项目结构
2. ✅ 了解路由配置
3. ✅ 学习 Redux 状态管理
4. ✅ 尝试调用 API 接口
5. ✅ 开发你的第一个功能模块

**祝你开发愉快！** 🎉
