import React, { useState } from "react";
import { Table, Tag, Button, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface Booking_history {
  key: string;
  id: string;
  date: string;
  name: string;
  roomNumber: string;
  Amount: string;
  statusBooking: string;
}

const HotelBookingHistory: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  const data : Booking_history[] = [
    {key: '1', id: 'guest1', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Checkout'},
    {key: '2', id: 'guest2', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Pending'},
    {key: '3', id: 'guest3', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Cancel'},
    {key: '4', id: 'guest4', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Checkout'},
    {key: '5', id: 'guest5', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Pending'},
    {key: '6', id: 'guest6', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Cancel'},
    {key: '7', id: 'guest7', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Checkout'},
    {key: '8', id: 'guest8', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Pending'},
    {key: '9', id: 'guest9', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Cancel'},
    {key: '10', id: 'guest10', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Checkout'},
    {key: '11', id: 'guest11', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Pending'},
    {key: '12', id: 'guest12', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Cancel'},
    {key: '13', id: 'guest13', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Checkout'},
    {key: '14', id: 'guest14', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Pending'},
    {key: '15', id: 'guest15', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Cancel'},
    {key: '16', id: 'guest16', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Checkout'},
    {key: '17', id: 'guest17', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Pending'},
    {key: '18', id: 'guest18', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Cancel'},
    {key: '19', id: 'guest19', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Checkout'},
    {key: '20', id: 'guest20', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Pending'},
    {key: '21', id: 'guest21', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Cancel'},
    {key: '22', id: 'guest22', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Checkout'},
    {key: '23', id: 'guest23', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Pending'},
    {key: '24', id: 'guest24', date: '22/2/2222', name: 'Frank Murlo', roomNumber: '312', Amount: '500000', statusBooking: 'Cancel'}
  ];

  const columns: ColumnsType<Booking_history> = [
    {
      title: 'Booking_id',
      dataIndex: 'key',
      key: 'key',
      render: text => <span>{text}</span>
    },
    {
      title: 'Guest_id',
      dataIndex: 'id',
      key: 'id',
      render: text => <span>{text}</span>
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: text => <span>{text}</span> 
    },
    {
      title: 'Guest Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <span>{text}</span>
    },
    {
      title: 'Room No',
      dataIndex: 'roomNumber',
      key: 'roomNumber',
      render: text => <span>{text}</span>
    },
    {
      title: 'Amount',
      dataIndex: 'Amount',
      key: 'Amount',
      render: text => <span>{text}</span>
    },
    {
      title: 'Status Booking',
      dataIndex: 'statusBooking',
      key: 'statusBoking',
      render: status => (
        <Tag color={status === 'Checkout' ? 'green' : status === 'Pending' ? 'yellow' : 'red'}>
            {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Button type="primary" size="small">
          Details
        </Button>
      ),
    }
  ];

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
      justifyContent: 'center',
      marginTop: '16px',
    },
    table: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
    },
  };

  const handlePageChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) setPageSize(pageSize);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Hotel Booking History</h2>
      <Table
        columns={columns}
        dataSource={data.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
        pagination={false}
        rowKey="id"
        style={styles.table}
      />
      <div style={styles.paginationContainer}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};
export default HotelBookingHistory;

