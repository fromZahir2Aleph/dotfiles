local wezterm = require 'wezterm'
local mux = wezterm.mux
local act = wezterm.action

return {
  default_prog = { '/usr/bin/zsh', '-l' },
  color_scheme = 'GruvboxDark',
  font = wezterm.font('JetBrainsMono Nerd Font'),
  font_size = 12,
  line_height = 1.1,
}

