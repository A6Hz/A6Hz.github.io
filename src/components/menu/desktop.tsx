import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState, MouseEvent, useEffect } from "react";
import CodeIcon from "@mui/icons-material/Code";
import { useLocation, useNavigate } from "react-router-dom";

const pages = [
  { label: "Home", id: "home" },
  { label: "Archivements", id: "archivements" },
  { label: "CV", id: "cv" },
  { label: "Lets connect", id: "contact" },
];

const scrollIntoViewWithOffset = (selector: string) => {
  const element = document.getElementById(selector);

  if (element) {
    window.scrollTo({
      behavior: "smooth",
      top:
        element.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top,
    });
  }
};

export const DesktopAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* Fix chrome scroll bug  */
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (toId?: string) => {
    setAnchorElNav(null);
    if (toId) {
      scrollIntoViewWithOffset(toId);
    }
  };

  return (
    <AppBar
      id="menu"
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        backgroundImage:
          //"linear-gradient(to right, #017bc2, #2567b2, #36549f, #40408a, #452b74)",
          "linear-gradient(to right, #017bc2b3, #2567b2a6, #36549fab, #40408a80, #452b7480)",
        backdropFilter: "blur(10px)",
        transition: "all 2s",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CodeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              //letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              PaperProps={{ style: { width: "100vw" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleCloseNavMenu(page.id)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CodeIcon sx={{ display: { xs: "flex", sm: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AH
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              //alignItems: "center",
              justifyContent: "end",
            }}
          >
            {location.pathname === "/" ? (
              pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handleCloseNavMenu(page.id)}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    alignSelf: "end",
                  }}
                >
                  {page.label}
                </Button>
              ))
            ) : (
              <Button
                onClick={() => navigate("/")}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  alignSelf: "end",
                }}
              >
                Back To home
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
