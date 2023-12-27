import React from 'react'
// SVGs
import DashboardBillTable from '../dashboard/DashboardBillTable';

const BillingDetails = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <DashboardBillTable />
        </div>
    )
}

export default BillingDetails