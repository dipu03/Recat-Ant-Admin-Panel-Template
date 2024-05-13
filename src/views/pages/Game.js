import React, { useEffect } from "react";
import { Button, Space, Table } from "antd";
import { Link } from "react-router-dom";
import { GetUser } from "../../helpers/userApi";
import { encode } from "base-64"; // Import Base64 encode
import PageContainer from "../../components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const GamePage = () => {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GetUser();
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },


    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Link to={`/edit-user/${encode(record.key)}`}>Edit</Link> {/* Encode the ID */}
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }
  ];

  return (
    <>

      <DashboardCard >
        <Button type='primary'>
          <Link to={"/add-game"}>Add Game</Link>
        </Button>
        <Table columns={columns} dataSource={data} />

      </DashboardCard>
    </>
  );
};

export default GamePage;
