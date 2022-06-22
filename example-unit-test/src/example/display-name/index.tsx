type DisplayNameProp = {
  name: string;
};
export const DisplayName = (props: DisplayNameProp) => {
  const { name } = props;

  return <div>Welcome {name}</div>;
};
