/**
 * 数据列表页面 - 演示 API 请求和表格展示
 */

import { useEffect, useState } from 'react';
import { Card, Table, Button, Space, Tag, message } from 'antd';
import { ReloadOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { mockGetDataList } from '@/api/mock';

interface DataItem {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  createTime: string;
}

const DataList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<DataItem[]>([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  useEffect(() => {
    document.title = '数据列表 - Alpha Account Activation';
    fetchData(1, 10);
  }, []);

  // 获取数据
  const fetchData = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const response = await mockGetDataList(page, pageSize);
      if (response.success) {
        setDataSource(response.data.list);
        setPagination({
          current: response.data.page,
          pageSize: response.data.pageSize,
          total: response.data.total,
        });
      }
    } catch (error) {
      message.error('获取数据失败');
    } finally {
      setLoading(false);
    }
  };

  // 表格列配置
  const columns: ColumnsType<DataItem> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => (
        <Tag color={status === 'active' ? 'success' : 'default'}>
          {status === 'active' ? '激活' : '未激活'}
        </Tag>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 180,
      render: (time: string) => new Date(time).toLocaleString('zh-CN'),
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: (_: any, record: DataItem) => (
        <Space size="small">
          <Button type="link" size="small" onClick={() => handleView(record)}>
            查看
          </Button>
          <Button type="link" size="small" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button type="link" size="small" danger onClick={() => handleDelete(record)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];

  // 处理表格变化
  const handleTableChange = (newPagination: TablePaginationConfig) => {
    fetchData(newPagination.current || 1, newPagination.pageSize || 10);
  };

  // 刷新数据
  const handleRefresh = () => {
    fetchData(pagination.current, pagination.pageSize);
  };

  // 查看
  const handleView = (record: DataItem) => {
    message.info(`查看数据：${record.name}`);
  };

  // 编辑
  const handleEdit = (record: DataItem) => {
    message.info(`编辑数据：${record.name}`);
  };

  // 删除
  const handleDelete = (record: DataItem) => {
    message.warning(`删除数据：${record.name}`);
  };

  // 新增
  const handleAdd = () => {
    message.info('新增数据');
  };

  return (
    <div>
      <Card
        title="数据列表"
        extra={
          <Space>
            <Button icon={<PlusOutlined />} type="primary" onClick={handleAdd}>
              新增
            </Button>
            <Button icon={<ReloadOutlined />} onClick={handleRefresh}>
              刷新
            </Button>
          </Space>
        }
      >
        <Table
          columns={columns}
          dataSource={dataSource}
          loading={loading}
          rowKey="id"
          pagination={pagination}
          onChange={handleTableChange}
        />
      </Card>
    </div>
  );
};

export default DataList;
