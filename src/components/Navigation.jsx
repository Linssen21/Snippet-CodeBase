import { Breadcrumbs, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2, 0, 2),
  },
  text: {
    textTransform: "uppercase",
  },
}));

const handleClick = (e) => {
  e.preventDefault();
  console.info("You clicked a breadcrumb.");
};

const Navigation = () => {
  const classes = useStyles();
  const linkArray = ["javascript", "html", "php", "css", "ruby", "objective-c"];

  return (
    <Breadcrumbs className={classes.container} aria-label="breadcrumb">
      <Link
        aria-current="page"
        color="textPrimary"
        href="#"
        onClick={handleClick}
      >
        ALL
      </Link>
      {!!linkArray &&
        linkArray.map((value, index) => (
          <Link
            className={classes.text}
            color="inherit"
            href="#"
            onClick={handleClick}
            key={index}
          >
            {value}
          </Link>
        ))}
    </Breadcrumbs>
  );
};

export default Navigation;
