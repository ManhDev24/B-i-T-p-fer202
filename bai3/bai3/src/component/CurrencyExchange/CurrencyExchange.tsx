import { Breadcrumb, Input } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PATH } from '../../routes/path'

const CurrencyExchange = () => {
  const [currentCurrency, setCurrentCurrency] = useState(0)
  console.log('currentCurrency: ', currentCurrency)

  const exchangeToVnd = (value) => {
    return value * 24000
  }
  const formatVnd = (value) => {
    return new Intl.NumberFormat('vi-VN').format(value)
  }

  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: <Link to={PATH.HOME}>Home</Link>,
          },
          {
            title: <Link to={PATH.CURRENCY}>Currency Exchange</Link>,
          },
        ]}
      />
      <h1 className="text-center text-3xl mt-4">USD to VND Converter</h1>

      <div className="container mx-auto h-[300px] flex flex-col justify-center items-center">
        <div className="mb-6">
          <Input.Group compact>
            <Input style={{ width: 'calc(100% - 60px)' }} onChange={(event) => setCurrentCurrency(+event.target.value)} type="number" placeholder="Enter USD amount" />
            <span className="px-3 py-1 border bg-gray-100">USD</span>
          </Input.Group>
        </div>
        <div className="mb-6 text-3xl">=</div>
        <div>
          <Input.Group compact>
            <Input style={{ width: 'calc(100% - 60px)', backgroundColor: '#f5f5f5' }} value={formatVnd(exchangeToVnd(currentCurrency))} readOnly />
            <span className="px-3 py-1 border bg-gray-100">USD</span>
          </Input.Group>
        </div>
      </div>
    </div>
  )
}

export default CurrencyExchange
