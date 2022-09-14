import { Button } from "@mui/material";

export default function ButtonDefault(props) {
  let {title, ...others} = props;
  return (
    <Button
      size='small'
      style={{ textTransform: 'none' }}
      {...others}
    >
      {title}
    </Button>
  )
}