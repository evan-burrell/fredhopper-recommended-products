declare type ListItem = {
  secondid: string;
  brand: string;
  _imageurl: string;
  vg_url_key: string;
  url_key: string;
  title: string;
};

declare type ListProps = {
  list: Array<ListItem>,
}
