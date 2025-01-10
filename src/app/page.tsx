"use client";

import { Card, Col, Row } from 'antd'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { DOMAIN } from '@/constants/environment';

export default function Home() {

  const router = useRouter()
  const [cardSet, setCardSet] = useState([])

  useEffect(() => {
    axios.get(`${DOMAIN}/set/list`).then((result) => setCardSet(result.data))
  }, [])
  
  return (
    <Row gutter={[24, 24]}>
      {cardSet.map((singleSet: any, index) => (
        <Col key={index} span={6}>
          <Card onClick={() => router.push(`/set/${singleSet.id}`)}>
            <img src={singleSet.logo_url}/>
            <p>{`${singleSet.name}`}</p>
            {`${singleSet.series}`}
          </Card>
        </Col>
      ))}
    </Row>
  );
}
