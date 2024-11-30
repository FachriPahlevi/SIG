import React from 'react';
import { usePage } from '@inertiajs/react';

import Chart from '@/Components/Dashboard/Card';
import Table from '@/Components/Dashboard/Card';
import Alert from '@/Components/Dashboard/Card';
import Card from '@/Components/Dashboard/Card';
import AppLayout from '@/Layouts/AppLayout';

const Dashboard = () => {
  const { totalPenjualan, tokoBaik, wilayahTerbaik, alert } = usePage().props;

  return (
    <AppLayout>
      <div className="grid grid-cols-4 gap-4">
        <Card title="Total Penjualan" value={totalPenjualan} />
        <Card title="Toko Terbaik" value={tokoBaik} />
        <Card title="Wilayah Terbaik" value={wilayahTerbaik} />
        {/* <Alert type={alert.type} message={alert.message} /> */}
      </div>
      <div className="mt-4">
        <Chart />
      </div>
      <div className="mt-4">
        <Table />
      </div>
    </AppLayout>
  );
};

export default Dashboard;