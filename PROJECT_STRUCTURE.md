# 项目结构说明

## 📂 完整目录结构

\`\`\`
alpha-account-activation-web/
├── .husky/ # Git Hooks 配置
│ ├── commit-msg # 提交信息验证
│ └── pre-commit # 提交前代码检查
├── .vscode/ # VSCode 配置
│ ├── extensions.json # 推荐插件
│ └── settings.json # 编辑器设置
├── public/ # 静态资源
│ └── vite.svg # Vite 图标
├── src/ # 源代码目录
│ ├── api/ # API 接口层
│ │ ├── index.ts # 接口统一导出
│ │ ├── mock.ts # Mock 数据（演示用）
│ │ └── user.ts # 用户相关接口
│ ├── assets/ # 静态资源（图片、字体等）
│ │ └── .gitkeep
│ ├── components/ # 公共组件
│ │ └── Loading/ # 加载组件
│ │ └── index.tsx
│ ├── hooks/ # 自定义 Hooks
│ │ ├── index.ts # Hooks 统一导出
│ │ └── useCountDown.ts # 倒计时 Hook
│ ├── layouts/ # 布局组件
│ │ └── MainLayout.tsx # 主布局（含侧边栏、顶栏）
│ ├── pages/ # 页面组件
│ │ ├── About/ # 关于页
│ │ │ └── index.tsx
│ │ ├── DataList/ # 数据列表页
│ │ │ └── index.tsx
│ │ ├── Home/ # 首页
│ │ │ └── index.tsx
│ │ ├── Login/ # 登录页
│ │ │ └── index.tsx
│ │ └── NotFound/ # 404 页面
│ │ └── index.tsx
│ ├── redux/ # Redux 状态管理
│ │ ├── slices/ # 状态切片
│ │ │ ├── appSlice.ts # 应用全局状态
│ │ │ ├── counterSlice.ts # 计数器（示例）
│ │ │ └── userSlice.ts # 用户状态
│ │ ├── hooks.ts # Redux Hooks（类型化）
│ │ └── store.ts # Store 配置
│ ├── router/ # 路由配置
│ │ ├── AuthGuard.tsx # 路由守卫（权限控制）
│ │ └── index.tsx # 路由配置（含懒加载）
│ ├── types/ # TypeScript 类型定义
│ │ ├── env.d.ts # 环境变量类型
│ │ └── index.ts # 通用类型定义
│ ├── utils/ # 工具函数
│ │ ├── index.ts # 工具函数导出
│ │ ├── request.ts # Axios 封装
│ │ └── storage.ts # 本地存储封装
│ ├── App.tsx # 根组件
│ ├── index.css # 全局样式
│ └── main.tsx # 应用入口
├── .eslintrc.cjs # ESLint 配置
├── .gitignore # Git 忽略文件
├── .prettierignore # Prettier 忽略文件
├── .prettierrc.json # Prettier 配置
├── commitlint.config.cjs # Commitlint 配置
├── index.html # HTML 入口
├── package.json # 项目配置
├── PROJECT_STRUCTURE.md # 本文件
├── QUICK_START.md # 快速开始指南
├── README.md # 项目说明
├── tsconfig.json # TypeScript 配置
├── tsconfig.node.json # TypeScript Node 配置
└── vite.config.ts # Vite 配置
\`\`\`

## 🗂️ 核心模块说明

### 1. API 层 (\`src/api/\`)

负责所有的 HTTP 请求，按业务模块划分：

- **user.ts**: 用户相关接口（登录、获取用户信息、退出等）
- **mock.ts**: Mock 数据，用于演示和测试
- **index.ts**: 统一导出所有接口

**使用示例**:
\`\`\`typescript
import { login, getUserInfo } from '@/api';

const response = await login({ username, password });
\`\`\`

### 2. Redux 状态管理 (\`src/redux/\`)

使用 Redux Toolkit 进行状态管理：

- **store.ts**: Redux Store 配置
- **hooks.ts**: 类型化的 Redux Hooks
- **slices/**: 状态切片
  - **userSlice.ts**: 用户状态（登录信息、用户信息）
  - **appSlice.ts**: 应用状态（主题、语言、侧边栏等）
  - **counterSlice.ts**: 计数器示例

**使用示例**:
\`\`\`typescript
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { increment } from '@/redux/slices/counterSlice';

const dispatch = useAppDispatch();
const count = useAppSelector(state => state.counter.value);
dispatch(increment());
\`\`\`

### 3. 路由系统 (\`src/router/\`)

基于 React Router 6 的路由配置：

- **index.tsx**: 路由配置（支持懒加载）
- **AuthGuard.tsx**: 路由守卫（权限验证）

**特性**:

- ✅ 路由懒加载
- ✅ 权限控制
- ✅ 嵌套路由
- ✅ 404 处理

### 4. 工具函数 (\`src/utils/\`)

封装常用的工具函数：

- **request.ts**: Axios 请求封装
  - 请求/响应拦截器
  - 统一错误处理
  - Token 自动携带
  - TypeScript 泛型支持

- **storage.ts**: 本地存储封装
  - localStorage / sessionStorage
  - 自动 JSON 序列化
  - TypeScript 类型支持

- **index.ts**: 其他工具函数
  - 时间格式化
  - 防抖/节流
  - 深拷贝
  - 等等...

### 5. 类型定义 (\`src/types/\`)

集中管理 TypeScript 类型：

- **index.ts**: 通用类型
  - API 响应类型
  - 用户信息类型
  - 分页类型
  - 路由元信息类型

- **env.d.ts**: 环境变量类型

### 6. 页面组件 (\`src/pages/\`)

所有的页面组件：

- **Home**: 首页（数据统计 + Redux 示例）
- **Login**: 登录页
- **DataList**: 数据列表页（表格 + 分页 + API 请求）
- **About**: 关于页
- **NotFound**: 404 页面

### 7. 布局组件 (\`src/layouts/\`)

应用的布局组件：

- **MainLayout.tsx**: 主布局
  - 侧边栏导航
  - 顶部导航栏
  - 用户信息展示
  - 内容区域

### 8. 公共组件 (\`src/components/\`)

可复用的公共组件：

- **Loading**: 加载组件

### 9. 自定义 Hooks (\`src/hooks/\`)

复用的业务逻辑：

- **useCountDown**: 倒计时 Hook

## 🔧 配置文件说明

### 构建配置

- **vite.config.ts**: Vite 构建配置
  - 路径别名
  - 代理配置
  - 构建优化
  - 代码分割

### TypeScript 配置

- **tsconfig.json**: TypeScript 主配置
  - 编译选项
  - 路径别名
  - 类型检查

- **tsconfig.node.json**: Node 环境配置

### 代码质量

- **.eslintrc.cjs**: ESLint 配置
  - React 规则
  - TypeScript 规则
  - 代码风格规则

- **.prettierrc.json**: Prettier 配置
  - 代码格式化规则

- **commitlint.config.cjs**: Commitlint 配置
  - Git 提交信息规范

### Git Hooks

- **.husky/pre-commit**: 提交前检查
  - 运行 lint-staged
  - 格式化代码

- **.husky/commit-msg**: 提交信息检查
  - 验证提交信息格式

## 📝 命名规范

### 文件命名

- **组件文件**: PascalCase，如 `UserCard.tsx`
- **工具文件**: camelCase，如 `request.ts`
- **类型文件**: camelCase，如 `index.ts`
- **样式文件**: kebab-case，如 `index.css`

### 变量命名

- **组件**: PascalCase，如 `const UserCard = () => {}`
- **函数**: camelCase，如 `const getUserInfo = () => {}`
- **常量**: UPPER_SNAKE_CASE，如 `const API_BASE_URL = ''`
- **类型**: PascalCase，如 `interface UserInfo {}`

### 目录命名

- **页面目录**: PascalCase，如 `Home/`
- **功能目录**: camelCase，如 `utils/`

## 🎯 最佳实践

### 1. 导入顺序

\`\`\`typescript
// 1. React 相关
import { useState, useEffect } from 'react';

// 2. 第三方库
import { Button } from 'antd';

// 3. 项目内部导入
import { useAppDispatch } from '@/redux/hooks';
import { request } from '@/utils';

// 4. 类型导入
import type { UserInfo } from '@/types';

// 5. 样式导入
import './index.css';
\`\`\`

### 2. 组件结构

\`\`\`typescript
// 1. 类型定义
interface Props {
title: string;
}

// 2. 组件定义
const MyComponent: React.FC<Props> = ({ title }) => {
// 3. Hooks
const [state, setState] = useState(0);

// 4. 副作用
useEffect(() => {
// ...
}, []);

// 5. 事件处理
const handleClick = () => {
// ...
};

// 6. 渲染
return <div>{title}</div>;
};

// 7. 导出
export default MyComponent;
\`\`\`

### 3. Redux 使用

\`\`\`typescript
// ✅ 使用类型化的 hooks
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

// ❌ 不要使用原始的 hooks
import { useDispatch, useSelector } from 'react-redux';
\`\`\`

### 4. API 请求

\`\`\`typescript
// ✅ 使用 TypeScript 泛型
const response = await request.get<UserInfo>('/api/user/info');

// ✅ 统一的错误处理
try {
const data = await request.post('/api/user/login', params);
} catch (error) {
// 错误已在 request 中统一处理
}
\`\`\`

## 🔍 扩展建议

### 添加新页面

1. 在 \`src/pages/\` 创建新目录
2. 创建 \`index.tsx\` 文件
3. 在 \`src/router/index.tsx\` 添加路由配置
4. 如需权限控制，配置 \`meta.requireAuth\`

### 添加新的 Redux 状态

1. 在 \`src/redux/slices/\` 创建新的 slice
2. 在 \`src/redux/store.ts\` 中注册
3. 使用 \`useAppSelector\` 和 \`useAppDispatch\` 访问

### 添加新的 API

1. 在 \`src/api/\` 创建新文件（按模块划分）
2. 使用 \`request\` 工具发起请求
3. 在 \`src/api/index.ts\` 中导出

---

有任何问题或建议，欢迎提 Issue！
