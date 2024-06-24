// use "interface" to declare types to write clean function code.
interface HeaderType {
  title: string;
  description: string;
}

export const Header = (props: HeaderType) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  );
};
