export function NavMenu(props: { menuItem: string[] }): JSX.Element {
  const list: string[] = props.menuItem;
  const updatedList: JSX.Element[] = list.map((listItems) => {
    return <li key={listItems.toString()}>{listItems}</li>;
  });

  return (
    <ul>{updatedList}</ul>
  );
}

function ListItem(props: { value: string }): JSX.Element {
  return <li>{props.value}</li>;
}

export function NumbersList(props: { numbers: string[] }): JSX.Element {
  const list: string[] = props.numbers;

  return (
    <ul>
      {list.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}
