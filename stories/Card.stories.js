import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const Default = (args) => <Card {...args} />;

Default.args = {
  header: "Heading One",
  text: "This is the card content text. Replace this text with the information of your choice.",
  link: "http://example.com",
};
