#!/bin/bash
touch temp.text
lsof -n -i4TCP:$1 | awk '{print $2}' > temp.text
pidToStop=$( (sed '2q;d' temp.text) ) > temp.text
if [[ -n $pidToStop ]]
then
kill -9 "$pidToStop"
echo "Congrats!! $1 is stopped."
else
echo "Sorry nothing running on port $1"
fi
rm temp.text
