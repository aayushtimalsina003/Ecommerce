import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
  handleToggleDarkMode: () => void;
  darkMode: boolean;
};

export default function NavBar({ handleToggleDarkMode, darkMode }: Props) {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">ShopSphere</Typography>
        <IconButton onClick={handleToggleDarkMode} sx={{ marginLeft: "auto" }}>
          {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
