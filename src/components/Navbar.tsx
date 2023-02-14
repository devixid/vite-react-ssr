import {
  changeTheme,
  Navbar,
  Switch,
  Text,
  useTheme,
  Link as NextLink,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { memo } from "react";
import { MoonIcon, SunIcon } from "@/assets";

function NavbarApp(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { type, isDark } = useTheme();

  const handleOnChange = () => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const nextTheme = isDark ? "light" : "dark";
    window.localStorage.setItem("data-theme", nextTheme); // you can use any storage
    changeTheme(nextTheme);
  };

  const collapseItems: string[] = ["Home", "About", "Portfolio", "Contact"];

  return (
    <Navbar
      variant="static"
      css={{ borderBottom: "1px solid $primaryBorder" }}
    >
      <Navbar.Brand>
        <Text
          color="inherit"
          hideIn="xs"
          size="$3xl"
          css={{ fontWeight: "$bold" }}
        >
          Dimas
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        hideIn="sm"
        variant="highlight"
        css={{ fontWeight: "$bold" }}
      >
        <Navbar.Link
          as={Link}
          to="/"
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/about"
        >
          About
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="portfolio"
        >
          Portfolio
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/contact"
        >
          Contact
        </Navbar.Link>
      </Navbar.Content>
      <Navbar.Content hideIn="sm">
        <Switch
          checked={isDark}
          onChange={handleOnChange}
          iconOn={<MoonIcon />}
          iconOff={<SunIcon />}
          color="primary"
        />
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Toggle
          aria-label="toggle navigation"
          showIn="sm"
        />
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            css={{ background: "$background" }}
          >
            <NextLink
              as={Link}
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              to={`/${item.toLowerCase()}`}
            >
              {item}
            </NextLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default memo(NavbarApp);
