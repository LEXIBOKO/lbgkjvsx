import React from 'react';
import {Card} from "antd";
import './CardsDisplay.css'

const CardsDisplay = ({data, hasProgress}) => {
    return (
        <div>
            <Card.Grid className={'cards-grid'}>
                {data.map((item) => (
                    <Card hoverable cover={<img className={'card-cover'} src={item.image} alt={item.name} />} className={'card-item'} key={item.id} title={item.name}>
                        {item.description}
                        {hasProgress && <h4>Прогресс: {item.progress}</h4>}
                    </Card>
                ))}
            </Card.Grid>
        </div>
    );
};

export default CardsDisplay;
