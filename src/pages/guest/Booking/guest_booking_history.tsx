import React, { useState } from 'react';
import { Table, Tag, Button, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Booking {
  key: string;
  id: string;
  checkInDate: string;
  checkOutDate: string;
  paymentStatus: string;
}

const GuestBookingHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3); // Số lượng hiển thị mỗi trang

  // Dữ liệu giả lập
  const data: Booking[] = [
    { key: '1', id: 'boo-1235', checkInDate: '23/12/2023', checkOutDate: '31/12/2023', paymentStatus: 'Unpaid' },
    { key: '2', id: 'boo-535', checkInDate: '30/10/2019', checkOutDate: '03/11/2019', paymentStatus: 'Paid' },
    { key: '3', id: 'boo-195', checkInDate: '04/11/2018', checkOutDate: '12/11/2018', paymentStatus: 'Paid' },
    // Thêm dữ liệu tương tự ở đây
  ];

  // Cột của bảng
  const columns: ColumnsType<Booking> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Check-in Date',
      dataIndex: 'checkInDate',
      key: 'checkInDate',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Check-out Date',
      dataIndex: 'checkOutDate',
      key: 'checkOutDate',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      render: status => (
        <Tag color={status === 'Paid' ? 'green' : 'red'}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" size="small">
          Details
        </Button>
      ),
    },
  ];

  // Hàm xử lý khi chuyển trang
  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) setPageSize(pageSize);
  };

  // Inline styles
  const styles = {
    container: {
      padding: '24px',
      backgroundColor: '#f0f2f5',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center', // Căn giữa pagination
      marginTop: '16px',
    },
    table: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your history</h2>
      <Table
        columns={columns}
        dataSource={data.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
        pagination={false} // Tắt phân trang mặc định
        rowKey="id"
        style={styles.table}
      />
      <div style={styles.paginationContainer}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={handlePageChange}
          showSizeChanger={false} // Tắt lựa chọn số lượng mỗi trang nếu không cần
        />
      </div>
    </div>
  );
};

export default GuestBookingHistory;
