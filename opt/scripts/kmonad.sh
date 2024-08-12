#!/bin/bash

sleep 5
echo "Script started" >> logfile.log
kmonad ~/.config/kmonad/config.kbd
echo "Script ended" >> logfile.log
notify-send "Hyprland Autostart" "This is a test notification"