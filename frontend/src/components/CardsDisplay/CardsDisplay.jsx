import React from 'react';
import {Card} from "antd";
import './CardsDisplay.css'
import {useNavigate} from "react-router-dom";

const CardsDisplay = ({data, hasProgress}) => {
    const navigate = useNavigate();
    return (
        <div>
            <Card.Grid className={'cards-grid'}>
                {data.map((item) => (
                    <Card onClick={() => navigate(`/${item.id}`)} hoverable cover={<img className={'card-cover'} src={item.image} alt={item.name} />} className={'card-item'} key={item.id} title={item.name}>
                        {item.description}
                        {hasProgress && <p className={'progress-text'}>Прогресс: {item.progress}%</p>}
                    </Card>
                ))}
            </Card.Grid>
        </div>
    );
};

export default CardsDisplay;
