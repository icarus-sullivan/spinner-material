import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Option = ({ name, description, children }) => (
  <div>
    <div>
      <h4 style={{ marginBottom: 0 }}>{name}</h4>
      <i>{description}</i>
    </div>
    {children}
  </div>
);

const Render = () => {
  const [color, setColor] = useState('#333333');
  const [stroke, setStroke] = useState(5);
  const [radius, setRadius] = useState(40);
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <h1>Attributes</h1>
          <Option name='radius' description='The width + height of the ring'>
            <input type="number" value={radius} onChange={(ev) => {
              setRadius(ev.target.value)
            }} />
          </Option>
          <Option name='color' description='The color of the ring'>
            <input type="text" value={color} onChange={(ev) => {
              setColor(ev.target.value)
            }} />
          </Option>
          <Option name='stroke' description='The thickness of the ring'>
            <input type="number" value={stroke} onChange={(ev) => {
              setStroke(ev.target.value)
            }} />
          </Option>
          <Option name='visible' description='The thickness of the ring'>
            <input type="checkbox" checked={visible} onChange={(ev) => {
              setVisible(ev.target.checked);
            }} />
          </Option>
          <pre>{JSON.stringify({
            stroke,
            radius,
            color,
            visible
          }, null, 2)}</pre>
        </div>
        <div style={{ marginLeft: 20 }}>
          <h1>Display</h1>
          <spinner-material stroke={stroke} color={color} radius={radius} visible={visible} />
        </div>
      </div>
  )
};

const root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

ReactDOM.render(<Render/>, document.getElementById('root'));
