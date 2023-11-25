export const getImage = (city: string, name: string) => {
  city = city.toLowerCase().replace(" ", "-");
  name = name.toLowerCase();
  const imageName = `${city}-${name}`;
  return `https://loodibee.com/wp-content/uploads/nfl-${imageName}-team-logo-2-350x350.png`;
};
