// use "interface" to declare types to write clean function code.
interface HeaderType {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderType) => {
  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};
