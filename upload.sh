#!bin/bash

USER="kelmore5"

git add -A

read -p "Put a note for this commit: " note

echo $note

git commit -m "Test 2"
git push -u origin master
