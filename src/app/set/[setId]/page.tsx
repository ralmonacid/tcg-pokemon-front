"use client";

import { DOMAIN } from "@/constants/environment";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Descriptions, Modal, Row} from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default  function  setPage(){
  const searchParams = useParams() 
  const id = searchParams.setId 
  const [cardSet, setCardSet] = useState([])
  const [selectedCard, setSelectedCard] = useState<any>(null); // Para almacenar la carta seleccionada
  const [isModalVisible, setIsModalVisible] = useState(false); 

  useEffect(() => {
    axios.get(`${DOMAIN}/card/listSet/${id}`).then((result) =>
      setCardSet(result.data))
      
  }, [])

  const showModal = (card: any) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  }; 

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
    <Row gutter={[24, 24]}>
      {cardSet.map((singleSet: any, index) => (
        <Col key={index} span={6}>
          <Card onClick={() => showModal(singleSet)}>
            <img src={singleSet.imageEntity[0]?.url}/>
            <p>{`${singleSet.name}`}</p>
            {`${singleSet.types}`}
          </Card>
        </Col>
      ))}
    </Row> 
    <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <a key={'market'} href={selectedCard?.marketEntity[0]?.url}>
          <Button type={'primary'} size="middle">
            <ShoppingCartOutlined/>
          </Button>
        </a>
        ]}
      >
          <>
            <Descriptions title={selectedCard?.name}>
            <Descriptions.Item label="Número">{selectedCard?.number}</Descriptions.Item>
            <Descriptions.Item label="Rareza">{selectedCard?.rarity}</Descriptions.Item>
            <Descriptions.Item label="Tipo">{selectedCard?.types?.join(", ")}</Descriptions.Item>

            </Descriptions>
            <img
              alt={selectedCard?.name}
              src={selectedCard?.imageEntity[0]?.url}
              style={{ width: '100%' }}
            />
          </>
      </Modal>

      </div>   
  );
}