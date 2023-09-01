import styled from "styled-components";

export default function List(props: { items: string[] }) {
  console.log(props.items);
  return (
    <div>
      <ul>
        {props.items.map((item) => {
          return (
            <Item name={item}>
              {item}
            </Item>
          );
        })}
      </ul>
    </div>
  );
}

const Item = styled.li<{ name: string }>`
  font-size: 2em;
  display: flex;
  flex: 1;  
  color: ${(props) => stringToColor(props.name)};
`;

const stringToColor = (str: string) => {
  let hash = 0;
  str.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, "0");
  }
  return colour;
};
