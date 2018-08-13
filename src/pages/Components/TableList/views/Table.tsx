import { Modal, Table } from 'antd';
import { observer } from 'mobx-react';
import * as moment from 'moment';
import * as React from 'react';
import { ITableDataItem, ITableProps } from '../types';

@observer
class TableComponent extends React.Component<ITableProps> {

  public openDeleteModal = () => () => {
    Modal.confirm({
      title: '是否删除此记录',
      content: '删除记录后将无法恢复，请谨慎操作！',
      okText: '删除',
      okType: 'danger',
      onOk: () => {
        // this.props.deleteGroupItem(id);
      }
    });
  }

  public render() {

    const { data, current, pageSize, total, handleTableChange } = this.props;

    const columns = [
      { title: 'ID', dataIndex: 'id' },
      { title: '编号', dataIndex: 'code' },
      { title: '名字', dataIndex: 'name' },
      { title: '性别', dataIndex: 'sex' },
      { title: '注册时间', dataIndex: 'ceateAt', render: (text: number) => text && moment(text).format('YYYY/MM/DD hh:mm') || '--' }
    ];

    const rowKey = (record: ITableDataItem) => record.id.toString();

    return (
      <Table
        columns={columns}
        rowKey={rowKey}
        dataSource={data.map(i => i)}
        pagination={{
          current,
          showSizeChanger: true,
          pageSize,
          showTotal: (count: number) => `共${count}条记录`,
          total,
          onChange: handleTableChange(false),
          onShowSizeChange: handleTableChange(true)
        }}
        loading={false}
      />
    );
  }
}

export default TableComponent;
