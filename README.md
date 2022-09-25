# wjcreaser.github.io

TO ADD NEW LINEUPS TO THE WEBSITE

1. Copy the Mapbase.html file into the map folder of the map the lineups are on
2. Rename the Mapbase.html file to CHARACTER_NAME.html where CHARACTER_NAME is the name of the character with the first letter capitalized (e.g. Kayo.html, Viper.html)
3. Insert .jpg files of the lineups into the map folder where your CHARACTER_NAME.html file is
    - Name them under the format Character_lineupIdentifier.jpg where Character is name of character and lineup identifier is a short description of use of lineup
    (Look at other .jpg files in the map folders for examples)
4. Inside the CHARACTER_NAME.html file, copy and paste:

		<div>
		<h1>Position<h1>
		<img src="src.jpg"></img>
		</div>
	
   (which is found within the body) as many times as you have lineup photos. So if you have 6 lineup photos, you need 6 separate div.
For each div representing a new lineup:
  5. Replace "Position" inbetween <h1> with text describing the position and use of lineups (refer to other character.html files for examples)
  6. Replace "src.jpg" with the name of the .jpg file of the photo of the lineup
7. Save your changes and you are done :)
