import React from 'react'
import HTMLReactParser from 'html-react-parser'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import millify from 'millify'
import { Col, Row, Typography, Select} from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select; 

const CryptoDetails = () => {
  const { coinId } = useParams();
  return (
    <div>
      Crypto Details
    </div>
  )
}

export default CryptoDetails
