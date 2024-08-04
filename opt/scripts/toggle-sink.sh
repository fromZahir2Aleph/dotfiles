#!/bin/bash

# Sink IDs
SINK_1=56
SINK_2=57

# Extract the two-digit sink ID that starts with 5 and is marked with "*"
CURRENT_SINK=$(wpctl status | grep -E '56|57' | grep '\*' | sed -n 's/.*\b\(56\|57\)\b.*/\1/p')

# Debug output
echo "Current default sink: '$CURRENT_SINK'"

# Check if CURRENT_SINK is valid
if [ -z "$CURRENT_SINK" ]; then
    echo "Error: Unable to determine the current default sink."
    exit 1
fi

# Toggle the default sink
if [ "$CURRENT_SINK" == "$SINK_1" ]; then
    wpctl set-default $SINK_2
    echo "Switched to sink $SINK_2"
elif [ "$CURRENT_SINK" == "$SINK_2" ]; then
    wpctl set-default $SINK_1
    echo "Switched to sink $SINK_1"
else
    echo "Error: Current sink is neither $SINK_1 nor $SINK_2"
    exit 1
fi

# Verify the change
NEW_SINK=$(wpctl status | awk '/^Sinks:/, /^[^ ]/' | grep -E '^\s*\*.*5[0-9]' | awk '{print $1}' | grep -oP '5[0-9]')
echo "New default sink: '$NEW_SINK'"
